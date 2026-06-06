import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Bharath",
  lastName: "M N",
  name: `Bharath M N`,
  role: "Software Engineer - SDE | 4+ Years Experience",
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
  headline: <>Frontend Engineering • Microservices • Agents • Product Engineering</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">AI Assistant</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "https://agent-b7.vercel.app",
  },
  subline: (
    <>
      I'm Bharath M N, a Software Engineer at{" "}
      <Text as="span" weight="strong">Codewave Technologies</Text>, building scalable full-stack
      applications and AI-driven agent workflows.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a Software Engineer building scalable full-stack applications with React, Next.js, Node.js, TypeScript, and microservices architecture.`,
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
        I have over 4 years of experience building scalable full-stack applications and distributed
        systems. My core expertise is in React.js, Next.js, Node.js, TypeScript, and Microservices
        architecture. Throughout my career, I've designed frontend platforms, backend APIs, messaging
        systems, and CI/CD workflows while focusing on performance, maintainability, and scalability.
        More recently, I've been working on AI-driven applications involving LLMs, agents, and RAG
        architectures. I'm looking for opportunities where I can contribute to large-scale products
        and continue growing as a software engineer.
      </>
    ),
  },
  work: {
    display: false,
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: false,
    title: "Education",
    institutions: [],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>React.js, Next.js, Astro.js, Redux Toolkit, Tailwind CSS, Material UI</>
        ),
        tags: [
          { name: "React.js", icon: "javascript" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Tailwind CSS" },
        ],
        images: [],
      },
      {
        title: "Backend",
        description: (
          <>
            Node.js, Express.js, FastAPI, JWT, Mongoose, OpenAPI, Swagger, Postman
          </>
        ),
        tags: [
          { name: "Node.js" },
          { name: "Express" },
          { name: "FastAPI" },
        ],
        images: [],
      },
      {
        title: "Core",
        description: <>TypeScript, JavaScript, Node.js, Python</>,
        tags: [
          { name: "TypeScript", icon: "javascript" },
          { name: "JavaScript", icon: "javascript" },
          { name: "Python" },
        ],
        images: [],
      },
      {
        title: "Cloud & Database",
        description: <>AWS, GCP, Azure, MongoDB, Redis, MySQL, Cloudinary</>,
        tags: [
          { name: "AWS" },
          { name: "MongoDB" },
          { name: "Redis" },
        ],
        images: [],
      },
      {
        title: "API & DevOps",
        description: <>REST APIs, GraphQL, WebSockets, Git, CI/CD, Docker, Kubernetes</>,
        tags: [
          { name: "REST APIs", icon: "rocket" },
          { name: "GraphQL" },
          { name: "Docker" },
        ],
        images: [],
      },
    ],
  },
  upskills: {
    display: true,
    title: "Upskills",
    items: [
      {
        title: "Conversational agents development",
        description: <>Google Agent Development Kit</>,
        href: "https://adk.dev/",
        linkLabel: "Google Agent Development Kit",
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
