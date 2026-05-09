import type { ReactNode } from "react";
import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Line,
  Badge,
  Tag,
  SmartLink,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { IconName } from "@/resources/icons";

const portfolioTitle = "Bharath M N | Software Developer";
const portfolioDescription =
  "Software Developer with 4+ years of experience building scalable web applications with Node.js, TypeScript, React, Next.js, and Astro.";

type HomeExperience = {
  company: string;
  timeframe: string;
  role: string;
  achievements: ReactNode[];
};

const homeWorkExperiences: HomeExperience[] = [
  {
    company: "Codewave Technologies Private Limited",
    timeframe: "Apr 2025 — Present",
    role: "Software Developer",
    achievements: [
      <>
        Built and optimized React.js and Next.js applications with reusable, scalable components.
      </>,
      <>Built instant messaging services and a multi-repository system.</>,
      <>Integrated REST and GraphQL APIs.</>,
      <>
        Contributed to CI/CD pipeline automation using GitLab and Azure DevOps.
      </>,
    ],
  },
  {
    company: "Winline Technologies Private Limited",
    timeframe: "Feb 2024 — Mar 2025",
    role: "Software Developer",
    achievements: [
      <>Delivered full-stack Next.js applications with responsive React front ends.</>,
      <>Integrated REST APIs to power dynamic content experiences.</>,
      <>Improved SEO using meta tags and schema markup.</>,
      <>Collaborated with Python/Django APIs.</>,
    ],
  },
  {
    company: "Upgradableweb Technologies",
    timeframe: "May 2023 — Feb 2024",
    role: "Full Stack Developer",
    achievements: [
      <>
        Developed high-performance Next.js projects with server-side rendering (SSR).
      </>,
      <>Built responsive UIs using Tailwind CSS.</>,
      <>Implemented API routes and authentication flows in Node.js applications.</>,
    ],
  },
  {
    company: "Plausibility Solutions",
    timeframe: "Dec 2022 — May 2023",
    role: "Junior Frontend Developer",
    achievements: [
      <>
        Built scalable, responsive UIs using JavaScript, TypeScript, and React.
      </>,
      <>Implemented state management with Redux and the Context API.</>,
      <>Integrated APIs for reliable real-time data experiences.</>,
    ],
  },
];

type HomeSkillChip = {
  label: string;
  variant: "brand" | "accent" | "neutral";
  icon?: IconName;
};

type HomeSkillGroup = {
  title: string;
  description: string;
  skills: HomeSkillChip[];
};

const homeSkillGroups: HomeSkillGroup[] = [
  {
    title: "Core Languages",
    description: "The languages I use to build product logic, interfaces, services, and automation.",
    skills: [
      { label: "JavaScript", variant: "accent", icon: "javascript" },
      { label: "TypeScript", variant: "brand", icon: "javascript" },
      { label: "Node.js", variant: "neutral" },
      { label: "Python", variant: "accent" },
    ],
  },
  {
    title: "Frontend",
    description: "Fast, responsive product interfaces with polished interaction details.",
    skills: [
      { label: "React.js", variant: "brand", icon: "react" },
      { label: "Next.js", variant: "accent", icon: "nextjs" },
      { label: "Astro.js", variant: "accent" },
      { label: "Redux Toolkit", variant: "neutral" },
      { label: "Tailwind CSS", variant: "neutral" },
      { label: "Material UI", variant: "brand" },
      { label: "Animations", variant: "accent" }
    ],
  },
  {
    title: "Backend & APIs",
    description: "Production APIs, auth flows, real-time features, and service integrations.",
    skills: [
      { label: "Node.js", variant: "neutral" },
      { label: "Express", variant: "brand", icon: "express" },
      { label: "Django", variant: "neutral" },
      { label: "JWT", variant: "accent" },
      { label: "Mongoose", variant: "brand" },
      { label: "REST APIs", variant: "brand", icon: "rest" },
      { label: "GraphQL", variant: "accent" },
      { label: "WebSockets", variant: "neutral" },
    ],
  },
  {
    title: "Cloud & Data",
    description: "Deployments, databases, storage, and cloud services for web products.",
    skills: [
      { label: "AWS", variant: "neutral" },
      { label: "GCP", variant: "accent" },
      { label: "Vercel", variant: "brand" },
      { label: "Netlify", variant: "neutral" },
      { label: "Cloudinary", variant: "accent" },
      { label: "MongoDB", variant: "brand" },
      { label: "Redis", variant: "neutral" },
      { label: "MySQL", variant: "accent" },
      { label: "PostgreSQL", variant: "brand" },
    ],
  },
  {
    title: "Architecture & Quality",
    description: "Scalable architecture, testing discipline, performance, and delivery workflows.",
    skills: [
      { label: "Microservices", variant: "brand" },
      { label: "Micro-Frontend", variant: "accent" },
      { label: "MCP", variant: "neutral" },
      { label: "Jest", variant: "brand" },
      { label: "Vitest", variant: "accent" },
      { label: "Playwright", variant: "neutral" },
      { label: "Cypress", variant: "brand" },
      { label: "Unit & E2E Testing", variant: "accent" },
      { label: "Docker", variant: "neutral" },
      { label: "CI/CD", variant: "accent", icon: "rocket" },
      { label: "GitHub", variant: "brand", icon: "github" },
      { label: "GitLab", variant: "neutral" },
    ],
  },
  {
    title: "Web & Integrations",
    description: "Search visibility, accessibility, performance, and third-party integrations.",
    skills: [
      { label: "SEO", variant: "brand" },
      { label: "Schema Markup", variant: "accent" },
      { label: "Accessibility", variant: "neutral" },
      { label: "Optimization", variant: "brand" },
      { label: "Web Performance", variant: "accent" },
      { label: "Payment Gateways", variant: "neutral" },
      { label: "Email Services", variant: "brand" },
      { label: "SMS Services", variant: "accent" },
      { label: "Analytics Services", variant: "neutral" },
      { label: "Chat Services", variant: "brand" },
    ],
  },
];

type HomeKeyProject = {
  title: string;
  description: string;
  href: string;
  category: string;
  stack: string[];
};

const homeKeyProjects: HomeKeyProject[] = [
  {
    title: "Healthcare SAAS",
    description:
      "UI based project built on React.js, Vite, Tailwind CSS. Deployed using GitHub and Netlify.",
    href: "https://healthcare-saas-789.netlify.app/login?user=demo",
    category: "SaaS Interface",
    stack: ["React.js", "Vite", "Tailwind CSS", "Netlify"],
  },
  {
    title: "AI Assistant",
    description:
      "Built with Astro.js, React.js, Vite, Tailwind CSS, Google Agent Development Kit (ADK). CI/CD using GitHub and Vercel.",
    href: "https://bmn789.vercel.app",
    category: "AI Product",
    stack: ["Astro.js", "React.js", "Google ADK", "Vercel"],
  },
  {
    title: "GearX AI",
    description:
      "Project consists of User module and Admin module. Built with React.js, Next.js, Tailwind CSS and MUI. CI/CD using GitLab and AWS.",
    href: "https://gearx.ai",
    category: "AI Platform",
    stack: ["React.js", "Next.js", "MUI", "AWS"],
  },
  {
    title: "My Dream Paints",
    description:
      "UI based project built on Next.js, Tailwind CSS. Deployed using GitHub and Vercel.",
    href: "https://www.mydreampaints.com",
    category: "Brand Website",
    stack: ["Next.js", "JavaScript", "Tailwind CSS", "Vercel"],
  },
  {
    title: "MKS Foods",
    description:
      "Built and optimized in React.js, Next.js, Tailwind CSS. CI/CD using GitHub and Netlify.",
    href: "https://mksfoods.in",
    category: "Business Website",
    stack: ["React.js", "Next.js", "Tailwind CSS", "Netlify"],
  },
];

type HomeUpskill = {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

const homeCurrentUpskills: HomeUpskill[] = [
  {
    title: "Prompt Engineering / LLM / RAG",
    description: "Prompt Engineering (Simplilearn)",
    href: "https://drive.google.com/file/d/1itNIIE_gjJNqyjnGQDfmZo8FIIRipg-H/view?usp=sharing",
    linkLabel: "Certificate",
  },
  {
    title: "Advanced Prompt Engineering with ChatGPT",
    description: "UpGrad",
    href: "https://drive.google.com/file/d/1-PsSo5ro7Rdju3y_he327J2LOFJHT6Vy/view?usp=sharing",
    linkLabel: "Certificate",
  },
  {
    title: "GitHub Copilot",
    description: "Copilot Fundamentals",
    href: "https://learn.microsoft.com/",
    linkLabel: "Microsoft Learn",
  },
  {
    title: "AI Assistants",
    description: "Conversational AI and agents development with Google Agent Development Kit (ADK)",
    href: "https://adk.dev/",
    linkLabel: "ADK",
  },
  {
    title: "AI Augmented Coding",
    description:
      "AI pair programming for code generation and test writing (Cursor, Claude, Codex, ChatGPT).",
  },
  {
    title: "System Design",
    description: "Scalable architectures and distributed systems",
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: portfolioTitle,
    description: portfolioDescription,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

function HomeSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Column fillWidth gap="24" marginBottom="l">
      <Row fillWidth horizontal="center" paddingBottom="8">
        <Column  horizontal="center" gap="8">
          <Heading
            className="home-section-heading-title"
            as="h2"
            align="center"
            variant="display-strong-xs"
            wrap="balance"
          >
            {title}
          </Heading>
          <Row className="home-section-heading-mark" />
        </Column>
      </Row>
      {children}
      {/* <Line /> */}
    </Column>
  );
}

export default function Home() {
 

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={portfolioTitle}
        description={portfolioDescription}
        image={`/api/og/generate?title=${encodeURIComponent(portfolioTitle)}`}
        author={{
          name: "Bharath M N",
          url: "https://bmn789.vercel.app",
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column fillWidth horizontal="center" gap="m">

        {home.featured.display && (
          <RevealFx
            fillWidth
            horizontal="center"
            paddingTop="16"
            paddingBottom="16"
            paddingLeft="12"
            className="print-hidden"
          >
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              arrow={false}
              href={home.featured.href}
            >
              <Row>{home.featured.title}</Row>
            </Badge>
          </RevealFx>
        )}


        <Column maxWidth="s" horizontal="center" align="center" fillWidth gap="m">
          <RevealFx translateY="4" fillWidth horizontal="center">
            <Heading as="h1" wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>

          <RevealFx translateY="4" delay={0.2} fillWidth horizontal="center" paddingTop="16">
            {/* <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text> */}
            <Text onBackground="neutral-weak" variant="body-default-m">
              Software Developer with{" "}
              <Text as="span" onBackground="info-strong">
                4+ years
              </Text>{" "}
              of experience building scalable, high-performance web applications, with a strong
              focus on systems using{" "}
              <Text as="span" onBackground="info-strong">
                Node.js
              </Text>
              . Proficient in designing RESTful APIs,{" "}
              <Text as="span" onBackground="info-strong">
                microservices
              </Text>
              , and real-time architectures. Skilled in{" "}
              <Text as="span" onBackground="info-strong">
                TypeScript
              </Text>
              ,{" "}
              <Text as="span" onBackground="info-strong">
                React.js
              </Text>
              ,{" "}
              <Text as="span" onBackground="info-strong">
                Next.js
              </Text>
              ,{" "}
              <Text as="span" onBackground="info-strong">
                Express.js
              </Text>
              ,{" "}
              <Text as="span" onBackground="info-strong">
                Astro.js
              </Text>
              . Strong expertise in{" "}
              <Text as="span" onBackground="info-strong">
                system design
              </Text>
              ,{" "}
              <Text as="span" onBackground="info-strong">
                performance optimization
              </Text>
              , and AI-augmented development using ChatGPT, Cursor, Claude AI, and GitHub Copilot.
            </Text>
          </RevealFx>

          <RevealFx translateY="4" delay={0.28} fillWidth horizontal="center">
            <Text align="center" variant="label-default-m" onBackground="brand-medium">
              Coming soon.
            </Text>
          </RevealFx>

          {/* <RevealFx delay={0.25} fillWidth horizontal="center">
            <Row gap="12" wrap horizontal="center" vertical="center">
              <Button href="https://linkedin.com/in/barathnethra" variant="secondary" size="s">
                LinkedIn
              </Button>
              <Button href="https://github.com/bmn789" variant="secondary" size="s">
                GitHub
              </Button>
              <Button href="https://bmn789.vercel.app" variant="secondary" size="s">
                AI Assistant
              </Button>
            </Row>
          </RevealFx> */}

          <RevealFx delay={0.35} horizontal="center" paddingTop="32">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                About – Bharath M N
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      <RevealFx translateY="12" delay={0.4} fillWidth>
        <Column fillWidth>

       

          <HomeSection title="Skills">
            <Column fillWidth gap="16">
              <Row fillWidth gap="12" wrap>
                {[
                  { value: "50+", label: "Tools & skills", detail: "Across frontend, backend, cloud, and delivery" },
                  { value: "4+", label: "Years applying them", detail: "Production web development experience" },
                  { value: "10+", label: "Featured projects", detail: "Shipped product and portfolio builds" },
                ].map((item) => (
                  <Column
                    key={item.label}
                    className="home-skill-stat"
                    padding="20"
                    radius="xl"
                    border="neutral-alpha-weak"
                    background="page"
                    gap="8"
                  >
                    <Row gap="12" vertical="center">
                      <Row className="home-skill-stat-orb" vertical="center" horizontal="center">
                        <Text variant="heading-strong-m" onBackground="brand-strong">
                          {item.value}
                        </Text>
                      </Row>
                      <Column gap="2">
                        <Text variant="heading-strong-s">
                          {item.label}
                        </Text>
                        <Text variant="body-default-xs" onBackground="neutral-weak">
                          {item.detail}
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                ))}
              </Row>

              <Column fillWidth gap="12">
                {homeSkillGroups.map((group, index) => (
                  <Column
                    key={group.title}
                    className="home-skill-card"
                    fillWidth
                    padding="24"
                    radius="xl"
                    border="neutral-alpha-weak"
                    background={index === 0 ? "brand-alpha-weak" : "page"}
                    gap="16"
                  >
                    <Row fillWidth horizontal="between" vertical="start" gap="16" wrap>
                      <Column gap="4" maxWidth="xs">
                        <Heading as="h3" variant="heading-strong-l">
                          {group.title}
                        </Heading>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                          {group.description}
                        </Text>
                      </Column>
                      <Row className="home-skill-count" vertical="center" horizontal="center">
                        <Text variant="label-default-s" onBackground="brand-strong">
                          {group.skills.length} skills
                        </Text>
                      </Row>
                    </Row>

                    <Row wrap gap="8" className="home-skill-pill-cloud">
                      {group.skills.map((skill) => (
                        <Row
                          key={`${group.title}-${skill.label}`}
                          className={`home-skill-pill home-skill-pill-${skill.variant}`}
                          vertical="center"
                          gap="8"
                        >
                          <span className="home-skill-pill-dot" />
                          <Text variant="label-default-s">{skill.label}</Text>
                        </Row>
                      ))}
                    </Row>
                  </Column>
                ))}
              </Column>
            </Column>
          </HomeSection>

          <HomeSection title="Education">
            <Column
              className="home-education-card"
              fillWidth
              padding="24"
              radius="xl"
              border="neutral-alpha-weak"
              gap="20"
            >
              <Row fillWidth horizontal="between" vertical="start" gap="16" wrap>
                <Column gap="8" maxWidth="s">
                  <Row className="home-section-kicker" fitWidth paddingX="12" paddingY="4" radius="full">
                    <Text variant="label-default-s" onBackground="brand-strong">
                      Bachelor of Engineering
                    </Text>
                  </Row>
                  <Column gap="4">
                    <Heading as="h3" variant="heading-strong-xl">
                      Visvesvaraya Technological University
                    </Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      Electronics and Communication Engineering
                    </Text>
                  </Column>
                </Column>

                <Column className="home-education-score" padding="16" radius="l" gap="4">
                  <Text variant="heading-strong-l" onBackground="brand-strong">
                    8.0
                  </Text>
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    CGPA
                  </Text>
                </Column>
              </Row>

              <Row fillWidth gap="12" wrap>
                <Tag size="m" variant="brand">
                  2018 — 2022
                </Tag>
                <Tag size="m" variant="neutral">
                  Bangalore, Karnataka
                </Tag>
                <Tag size="m" variant="accent">
                  Engineering Foundation
                </Tag>
              </Row>
            </Column>
          </HomeSection>

          <HomeSection title="Work Experience">
            <Column className="home-work-timeline" fillWidth gap="16">
              {homeWorkExperiences.map((experience, index) => (
                <Column
                  className={`home-work-card ${index === 1 ? "page-break" : ""}`}
                  key={`${experience.company}-${experience.role}-${index}`}
                  fillWidth
                  padding="24"
                  radius="xl"
                  border="neutral-alpha-weak"
                  gap="16"
                >
                  <Row
                    className="home-project-card-header"
                    fillWidth
                    horizontal="between"
                    vertical="start"
                    gap="16"
                    wrap
                  >
                    <Row className="home-project-card-copy" gap="12" vertical="start">
                      <Row className="home-work-index" vertical="center" horizontal="center">
                        <Text variant="label-default-s" onBackground="brand-strong">
                          {String(index + 1).padStart(2, "0")}
                        </Text>
                      </Row>
                      <Column gap="4">
                        <Heading as="h3" variant="heading-strong-l">
                          {experience.company}
                        </Heading>
                        <Text variant="body-default-m" onBackground="brand-weak">
                          {experience.role}
                        </Text>
                      </Column>
                    </Row>

                    <Row className="home-work-date" paddingX="12" paddingY="4" radius="full">
                      <Text variant="label-default-s" onBackground="neutral-strong">
                        {experience.timeframe}
                      </Text>
                    </Row>
                  </Row>

                  <Column as="ul" gap="12" paddingLeft="20" onBackground="neutral-weak">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <Text
                        as="li"
                        key={`${experience.company}-${achievementIndex}`}
                        variant="body-default-m"
                      >
                        {achievement}
                      </Text>
                    ))}
                  </Column>

                  <Row wrap gap="8">
                    {experience.achievements.slice(0, 3).map((_, achievementIndex) => (
                      <Tag
                        key={`${experience.company}-focus-${achievementIndex}`}
                        size="m"
                        variant={achievementIndex === 0 ? "brand" : achievementIndex === 1 ? "accent" : "neutral"}
                      >
                        {achievementIndex === 0
                          ? "Product delivery"
                          : achievementIndex === 1
                            ? "Engineering systems"
                            : "API integration"}
                      </Tag>
                    ))}
                  </Row>
                </Column>
              ))}
            </Column>
          </HomeSection>

          <HomeSection title="Key Projects">
            <Column className="home-project-grid" fillWidth gap="16">
              {homeKeyProjects.map((project, index) => (
                <Column
                  key={project.href}
                  className="home-project-showcase"
                  fillWidth
                  padding="24"
                  radius="xl"
                  border="neutral-alpha-weak"
                  gap="20"
                >
                  <Row fillWidth horizontal="between" vertical="center" gap="16" wrap>
                    <Row className="home-project-number" vertical="center" horizontal="center">
                      <Text variant="label-default-s" onBackground="brand-strong">
                        {String(index + 1).padStart(2, "0")}
                      </Text>
                    </Row>
                    <Row className="home-project-category" paddingX="12" paddingY="4" radius="full">
                      <Text variant="label-default-s" onBackground="brand-strong">
                        {project.category}
                      </Text>
                    </Row>
                  </Row>

                  <Column gap="8">
                    <Heading as="h3" variant="heading-strong-xl" wrap="balance">
                      {project.title}
                    </Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {project.description}
                    </Text>
                  </Column>

                  <Row wrap gap="8">
                    {project.stack.map((item) => (
                      <Row
                        key={`${project.title}-${item}`}
                        className="home-project-stack-chip"
                        vertical="center"
                        gap="8"
                      >
                        <span className="home-project-pill-dot" />
                        <Text variant="label-default-s">{item}</Text>
                      </Row>
                    ))}
                  </Row>

                  <Row className="home-project-footer" fillWidth horizontal="between" vertical="center" gap="16" wrap>
                    <Text className="home-project-url" variant="body-default-s" onBackground="neutral-weak">
                      {project.href.replace(/^https?:\/\//, "")}
                    </Text>
                    <SmartLink
                      href={project.href}
                      suffixIcon="arrowUpRightFromSquare"
                      className="home-project-action brand-on-background-weak"
                      style={{ margin: "0", width: "fit-content" }}
                    >
                      <Text variant="body-default-s" onBackground="brand-weak">
                        View project
                      </Text>
                    </SmartLink>
                  </Row>
                </Column>
              ))}
            </Column>
          </HomeSection>

          <HomeSection title="Certificates & Upskills">
            <Column fillWidth gap="16">
              {homeCurrentUpskills.map((item, index) => (
                <Column
                  key={`${item.title}-${item.href ?? "nohref"}`}
                  className="home-upskill-card"
                  fillWidth
                  padding="20"
                  radius="xl"
                  border="neutral-alpha-weak"
                  gap="12"
                >
                  <Row fillWidth horizontal="between" vertical="start" gap="16" wrap>
                    <Row gap="12" vertical="start">
                      <Row className="home-upskill-index" vertical="center" horizontal="center">
                        <Text variant="label-default-s" onBackground="brand-strong">
                          {String(index + 1).padStart(2, "0")}
                        </Text>
                      </Row>
                      <Column gap="4">
                        <Heading as="h3" variant="heading-strong-m">
                          {item.title}
                        </Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">
                          {item.description}
                        </Text>
                      </Column>
                    </Row>

                    <SmartLink
                      href={item.href ?? "#"}
                      suffixIcon="arrowUpRightFromSquare"
                        className="home-project-action brand-on-background-weak"
                      style={{
                        margin: "0",
                        width: "fit-content",
                        display: item.href && item.linkLabel ? "inline-flex" : "none",
                      }}
                    >
                      <Text as="span" variant="body-default-s" onBackground="brand-weak">
                        {item.linkLabel}
                      </Text>
                    </SmartLink>
                  </Row>

                  <Row className="home-upskill-type" fitWidth paddingX="12" paddingY="4" radius="full">
                    <Text variant="label-default-s" onBackground="neutral-strong">
                      {item.linkLabel === "Certificate" ? "Certificate" : "Upskill"}
                    </Text>
                  </Row>
                </Column>
              ))}
            </Column>
          </HomeSection>

          <HomeSection title="Contact">
            <Column
              className="home-contact-card home-education-card"
              fillWidth
              padding="24"
              radius="xl"
              border="neutral-alpha-weak"
              gap="20"
            >
              <Row fillWidth horizontal="between" vertical="start" gap="16" wrap>
                <Column gap="8" maxWidth="s">
                  <Row className="home-contact-status" fitWidth paddingX="12" paddingY="4" radius="full">
                    <Text variant="label-default-s" onBackground="brand-strong">
                      Open to meaningful web product work
                    </Text>
                  </Row>
                  <Column gap="4">
                    <Heading as="h3" variant="heading-strong-xl" wrap="balance">
                      Let&apos;s build your next production-ready web experience.
                    </Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      Frontend, full-stack, AI assistant, performance, and product engineering work.
                      Quick response time, usually within 24 hours.
                    </Text>
                  </Column>
                </Column>

                <Column className="home-contact-actions" gap="12">
                  <SmartLink
                    href="mailto:bmn7892@gmail.com"
                    suffixIcon="arrowUpRightFromSquare"
                    className="home-contact-action"
                    style={{ margin: "0" }}
                  >
                    <Column gap="2">
                      <Text variant="label-default-s" onBackground="neutral-weak">
                        Email
                      </Text>
                      <Text variant="body-default-m" onBackground="brand-weak">
                        bmn7892@gmail.com
                      </Text>
                    </Column>
                  </SmartLink>
                  <SmartLink
                    href="tel:+917892475321"
                    suffixIcon="arrowUpRightFromSquare"
                    className="home-contact-action"
                    style={{ margin: "0" }}
                  >
                    <Column gap="2">
                      <Text variant="label-default-s" onBackground="neutral-weak">
                        Mobile
                      </Text>
                      <Text variant="body-default-m" onBackground="brand-weak">
                        +91 7892475321
                      </Text>
                    </Column>
                  </SmartLink>
                </Column>
              </Row>
            </Column>
          </HomeSection>


        </Column>
      </RevealFx>


    </Column>
  );
}
