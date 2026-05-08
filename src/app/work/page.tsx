import { Badge, Column, Heading, Media, Meta, Row, Schema, SmartLink, Tag, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";

type WorkProject = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  stack: string[];
  impact: string;
};

const projects: WorkProject[] = [
  {
    title: "Healthcare SAAS",
    description:
      "Healthcare SaaS interface focused on a clean user experience, responsive workflows, and fast deployment.",
    href: "https://healthcare-saas-789.netlify.app/login?user=demo",
    image: "/projects/healthcare-saas.png",
    imageAlt: "Healthcare SaaS project preview",
    stack: ["React.js", "Vite", "Tailwind CSS", "GitHub", "Netlify"],
    impact: "Responsive SaaS UI with demo-ready flows",
  },
  {
    title: "AI Assistant",
    description:
      "Conversational AI assistant using Astro, React, Vite, Tailwind CSS, and Google Agent Development Kit.",
    href: "https://bmn789.vercel.app",
    image: "/projects/ai-assistance.png",
    imageAlt: "AI Assistant project preview",
    stack: ["Astro.js", "React.js", "Vite", "Tailwind CSS", "Google ADK", "Vercel"],
    impact: "Agent experience, fast frontend, and Vercel delivery",
  },
  {
    title: "GearX AI",
    description:
      "User and admin modules for an AI product, built with modern React foundations and production deployment workflows.",
    href: "https://gearx.ai",
    image: "/projects/gearx.png",
    imageAlt: "GearX AI project preview",
    stack: ["React.js", "Next.js", "Tailwind CSS", "MUI", "GitLab", "AWS"],
    impact: "Product modules, admin workflows, and cloud delivery",
  },
  {
    title: "My Dream Paints",
    description:
      "Business website built with Next.js and Tailwind CSS, optimized for a polished responsive brand presence.",
    href: "https://www.mydreampaints.com",
    image: "/projects/mydreampaints.png",
    imageAlt: "My Dream Paints project preview",
    stack: ["Next.js", "JavaScript", "Tailwind CSS", "GitHub", "Vercel"],
    impact: "Brand website with production deployment",
  },
  {
    title: "MKS Foods",
    description:
      "Food business website built and optimized with React.js, Next.js, Tailwind CSS, and Netlify CI/CD.",
    href: "https://mksfoods.in",
    image: "/projects/mksfoods.png",
    imageAlt: "MKS Foods project preview",
    stack: ["React.js", "Next.js", "Tailwind CSS", "GitHub", "Netlify"],
    impact: "Performance-focused business site",
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column
        className="work-hero-faint-gradient"
        fillWidth
        gap="24"
        padding="32"
        radius="xl"
        border="neutral-alpha-weak"
      >
        <Badge
          background="brand-alpha-weak"
          paddingX="12"
          paddingY="4"
          onBackground="brand-strong"
          textVariant="label-default-s"
          arrow={false}
        >
          Experience & Projects
        </Badge>
        <Column gap="12" maxWidth="s">
          <Heading as="h1" variant="display-strong-l" wrap="balance">
            Building premium web products across frontend, backend, AI, and delivery.
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            A focused overview of my production experience and shipped projects, from scalable
            React and Next.js interfaces to APIs, microservices, CI/CD, and AI-assisted
            development.
          </Text>
        </Column>
        <Row fillWidth gap="12" wrap>
          {["4+ years experience", "5 featured projects", "React / Next.js / Node.js", "AI-Augmented Development"].map(
            (item) => (
              <Tag key={item} size="l" variant="brand">
                {item}
              </Tag>
            ),
          )}
        </Row>
      </Column>

      <Column fillWidth gap="24" marginBottom="40">
        <Column gap="8">
          <Text variant="label-default-s" onBackground="brand-weak">
            Selected Builds
          </Text>
          <Heading as="h2" variant="display-strong-s">
            Projects
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Production and portfolio projects that show the range of my frontend, full-stack,
            cloud, and AI-focused work.
          </Text>
        </Column>

        <Column fillWidth gap="32">
          {projects.map((project, index) => (
            <Column
              key={project.href}
              className="work-project-card"
              fillWidth
              gap="0"
              padding="0"
              radius="l"
              border="neutral-alpha-weak"
              background="page"
              overflow="hidden"
            >
              <SmartLink
                href={project.href}
                className="work-project-card-media-link"
                aria-label={`Open ${project.title}`}
                style={{ display: "block", width: "100%", margin: 0, textDecoration: "none" }}
              >
                <Media
                  priority={index < 2}
                  src={project.image}
                  alt={project.imageAlt}
                  aspectRatio="16 / 9"
                  fillWidth
                  border="neutral-alpha-weak"
                  cursor="interactive"
                  objectFit="cover"
                  sizes="(max-width: 768px) 100vw, min(880px, 92vw)"
                />
              </SmartLink>

              <Column fillWidth padding="24" gap="16">
                <Row fillWidth horizontal="between" vertical="start" gap="16" wrap s={{ direction: "column" }}>
                  <Column gap="8" flex={1} minWidth={0}>
                    <Row gap="12" vertical="center" wrap>
                      <Badge
                        background="brand-alpha-weak"
                        paddingX="12"
                        paddingY="4"
                        onBackground="brand-strong"
                        textVariant="label-default-s"
                        arrow={false}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </Badge>
                      <Heading as="h3" variant="heading-strong-xl">
                        {project.title}
                      </Heading>
                    </Row>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {project.description}
                    </Text>
                  </Column>
                  <SmartLink
                    href={project.href}
                    suffixIcon="arrowUpRightFromSquare"
                    className="home-project-action brand-on-background-weak"
                  >
                    <Text variant="body-default-s" onBackground="brand-weak">
                      View project
                    </Text>
                  </SmartLink>
                </Row>

                <Text variant="body-default-s" onBackground="neutral-weak">
                  {project.impact}
                </Text>

                <Row wrap gap="8">
                  {project.stack.map((item) => (
                    <Tag key={`${project.title}-${item}`} size="m" variant="accent">
                      {item}
                    </Tag>
                  ))}
                </Row>
              </Column>
            </Column>
          ))}
        </Column>
      </Column>
    </Column>
  );
}
