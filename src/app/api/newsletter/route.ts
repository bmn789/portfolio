import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildSlackText(email: string, sourceLabel: string) {
  return `New subscriber from ${sourceLabel}\n• Email: ${email}`;
}

function sanitizeSource(raw: unknown): string {
  if (typeof raw !== "string") return "Portfolio";
  const t = raw.trim().slice(0, 80);
  if (!t) return "Portfolio";
  return t.replace(/\s+/g, " ");
}

async function notifySlack(text: string): Promise<{ ok: boolean; status: number; detail?: string }> {
  const webhook = process.env.SLACK_WEBHOOK_URL?.trim();
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const body = await res.text();
    if (!res.ok) {
      return { ok: false, status: res.status, detail: body.slice(0, 200) };
    }
    return { ok: true, status: res.status };
  }

  const botToken = process.env.SLACK_BOT_TOKEN?.trim();
  const channelId = process.env.SLACK_CHANNEL_ID?.trim();
  if (botToken && channelId) {
    const res = await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${botToken}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        channel: channelId,
        text,
      }),
    });
    const data = (await res.json()) as { ok?: boolean; error?: string };
    if (!res.ok || !data.ok) {
      return { ok: false, status: res.status, detail: data.error };
    }
    return { ok: true, status: res.status };
  }

  return { ok: false, status: 503, detail: "missing_slack_env" };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const email =
    typeof body === "object" && body !== null && "email" in body && typeof (body as { email: unknown }).email === "string"
      ? (body as { email: string }).email.trim()
      : "";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 });
  }

  const source = sanitizeSource(
    typeof body === "object" && body !== null && "source" in body ? (body as { source: unknown }).source : undefined,
  );
  const text = buildSlackText(email, source);

  try {
    const result = await notifySlack(text);
    if (!result.ok) {
      if (result.detail === "missing_slack_env") {
        return NextResponse.json({ success: false, error: "Newsletter is not configured" }, { status: 503 });
      }
      return NextResponse.json({ success: false, error: "Failed to send notification" }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to send notification" }, { status: 502 });
  }
}
