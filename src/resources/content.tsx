import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Barath",
  lastName: "Nethra",
  name: `Barath Nethra`,
  role: "Software Developer",
  avatar: "/images/barath.png",
  email: "bmn7892@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/bmn789",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/barathnethra",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building Cutting Edge UI for Software Products</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Agent_B7</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "https://bmn789.vercel.app",
  },
  subline: (
    <>
      I'm Barath Nethra, a SDE at <Text as="span" size="xl" weight="strong">Codewave Technologies</Text>, where I craft intuitive user experiences.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a Software Developer building scalable web applications with Node.js, TypeScript, React, Next.js, and Astro.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Barath Nethra, also known professionally as Bharath M N, a Software Developer with
        4+ years of experience building scalable, high-performance web applications with a strong
        focus on Node.js systems. I design RESTful APIs, microservices, and real-time architectures
        across backend and frontend layers, and I actively use ChatGPT, Cursor, Claude AI, and
        GitHub Copilot to accelerate development, reviews, documentation, and architecture work.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Visvesvaraya Technological University",
        description: (
          <>
            Bachelor of Engineering in Electronics and Communication Engineering, 2018 — 2022.
            CGPA: 8.0.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Core & Frontend",
        description: (
          <>
            JavaScript, TypeScript, Python, React.js, Next.js, Astro.js, Redux Toolkit, Tailwind
            CSS, Material UI, and animations.
          </>
        ),
        tags: [
          {
            name: "TypeScript",
            icon: "javascript",
          },
          {
            name: "React.js",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: [],
      },
      {
        title: "Backend & APIs",
        description: (
          <>
            Node.js, Express.js, Django, JWT, Mongoose, REST APIs, GraphQL, WebSockets, payment
            gateways, email services, SMS services, analytics services, and chat services.
          </>
        ),
        tags: [
          {
            name: "Node.js",
          },
          {
            name: "Express",
          },
          {
            name: "REST APIs",
            icon: "rocket",
          },
        ],
        images: [],
      },
      {
        title: "Cloud, Data & Delivery",
        description: (
          <>
            AWS, GCP, Vercel, Netlify, Cloudinary, MongoDB, Redis, MySQL, PostgreSQL, Docker,
            CI/CD, GitHub, GitLab, and version control.
          </>
        ),
        tags: [
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "CI/CD",
            icon: "rocket",
          },
          {
            name: "TDD",
          },
        ],
        images: [],
      },
      {
        title: "Architecture, Testing & Web Quality",
        description: (
          <>
            Microservices, micro-frontends, MCP, Jest, Vitest, Playwright, Cypress, unit and E2E
            testing, SEO, schema markup, accessibility, optimization, and web performance.
          </>
        ),
        tags: [
          {
            name: "Microservices",
          },
          {
            name: "Testing",
          },
          {
            name: "Web Performance",
            icon: "rocket",
          },
        ],
        images: [],
      },
    ],
  },
  upskills: {
    display: true,
    title: "Certificates & Upskills",
    items: [
      {
        title: "AI Upskilling Certificate",
        description: <>Qualcomm</>,
        href: "https://drive.google.com/file/d/1a9C-TGMMkuEZQNqULYielBqSZWX8Lyjp/view?usp=sharing",
        linkLabel: "Certificate",
      },
      {
        title: "Prompt Engineering / LLM / RAG",
        description: <>Simplilearn</>,
        href: "https://drive.google.com/file/d/1itNIIE_gjJNqyjnGQDfmZo8FIIRipg-H/view?usp=sharing",
        linkLabel: "Certificate",
      },
      {
        title: "Advanced Prompt Engineering with ChatGPT",
        description: <>UpGrad</>,
        href: "https://drive.google.com/file/d/1-PsSo5ro7Rdju3y_he327J2LOFJHT6Vy/view?usp=sharing",
        linkLabel: "Certificate",
      },
      {
        title: "GitHub Copilot",
        description: <>Copilot Fundamentals</>,
        href: "https://learn.microsoft.com/",
        linkLabel: "Microsoft Learn",
      },
      {
        title: "AI Assistants",
        description: <>Conversational AI and agents development using Google Agent Development Kit (ADK)</>,
        href: "https://adk.dev/",
        linkLabel: "Google Agent Development Kit (ADK)",
      },
      {
        title: "AI Augmented Coding",
        description: <>AI pair programming for code generation and test writing using Cursor, Claude, Codex, and ChatGPT</>,
      },
      {
        title: "System Design",
        description: <>Scalable architectures and distributed systems</>,
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const blogs: Blog = {
  path: "/blogs",
  label: "Blogs",
  title: `Blogs – ${person.name}`,
  description: `${person.firstName}'s writing and notes — coming soon.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Experience & Projects – ${person.name}`,
  description: `Professional experience and shipped web projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, blogs, work };
