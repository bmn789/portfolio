"use client";

import { mailchimp, newsletter } from "@/resources";
import { Button, Heading, Input, Text, Background, Column, Row } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";

function validateEmail(value: string): boolean {
  if (value === "") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

type MailchimpProps = React.ComponentProps<typeof Column> & {
  /** Shown in Slack (e.g. "Blogs page", "Portfolio"); defaults to Portfolio */
  subscriberSource?: string;
};

export const Mailchimp: React.FC<MailchimpProps> = ({ subscriberSource = "Portfolio", ...flex }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | "success" | "error">(null);

  if (newsletter.display === false) return null;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setResult(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: subscriberSource }),
      });
      const data = (await res.json()) as { success?: boolean };
      if (res.ok && data.success) {
        setResult("success");
        setEmail("");
      } else {
        setResult("error");
      }
    } catch {
      setResult("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          {newsletter.title}
        </Heading>
        <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">
          {newsletter.description}
        </Text>
      </Column>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        onSubmit={onSubmit}
      >
        <Column id="mc_embed_signup_scroll" fillWidth maxWidth={24} gap="8">
          <Row fillWidth gap="8" vertical="center" s={{ direction: "column" }}>
            <Column fillWidth flex={1} minWidth={0}>
              <Input
                id="wf-email"
                name="email"
                type="email"
                placeholder="Email"
                required
                height="m"
                value={email}
                onChange={(ev) => {
                  setEmail(ev.target.value);
                  setResult(null);
                  if (error) setError("");
                }}
                errorMessage={error}
              />
            </Column>
            <Column flex={0} minWidth={0} fillWidth={false} s={{ fillWidth: true }}>
              <Row height="48" vertical="center">
                <Button id="wf-submit" type="submit" size="m" fillWidth loading={submitting} disabled={submitting}>
                  Subscribe
                </Button>
              </Row>
            </Column>
          </Row>
          {(result === "success" || result === "error") && (
            <Row
              fillWidth
              horizontal="center"
              paddingY="12"
              paddingX="16"
              radius="m"
              background={result === "success" ? "brand-alpha-medium" : "neutral-alpha-weak"}
            >
              <Text
                variant="body-default-s"
                align="center"
                wrap="balance"
                onBackground={result === "success" ? "brand-strong" : "neutral-strong"}
              >
                {result === "success"
                  ? "Thanks — you’re subscribed."
                  : "Something went wrong. Please try again."}
              </Text>
            </Row>
          )}
        </Column>
      </form>
    </Column>
  );
};
