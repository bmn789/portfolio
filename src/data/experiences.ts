export type ExperienceTag = {
  text: string
  color: string
}

export type Experience = {
  index: string
  gradient: string
  shadow: string
  border: string
  company: string
  role: string
  period: string
  bullets: string[]
  tags: ExperienceTag[]
}

export const experiences: Experience[] = [
  {
    index: '01',
    gradient: 'from-sky-500 to-cyan-400',
    shadow: 'shadow-sky-500/20',
    border: 'hover:border-sky-400/50',
    company: 'Codewave Technologies',
    role: 'Software Engineer',
    period: 'Apr 2025 — Sep 2026',
    bullets: [
      'Developed scalable backend services, REST APIs, authentication systems, and PostgreSQL databases using Node.js, Express.js, and FastAPI (Python).',
      'Built real-time messaging services and microservices-based applications while integrating REST and GraphQL APIs.',
      'Developed modern React.js, Next.js, and Vue.js applications and contributed to CI/CD automation using GitLab and Azure DevOps.'
    ],
    tags: [
      { text: 'Product delivery', color: 'bg-sky-500/15 text-sky-400 border-sky-500/30' },
      { text: 'Engineering systems', color: 'bg-purple-500/15 text-purple-400 border-purple-500/30' },
      { text: 'API integration', color: 'bg-pink-500/15 text-pink-400 border-pink-500/30' }
    ]
  },
  {
    index: '02',
    gradient: 'from-purple-500 to-indigo-500',
    shadow: 'shadow-purple-500/20',
    border: 'hover:border-purple-400/50',
    company: 'Winline Technologies',
    role: 'Software Developer',
    period: 'Feb 2024 — Mar 2025',
    bullets: [
      'Developed full-stack applications with React.js, Next.js, and Node.js, building responsive user interfaces and scalable backend APIs.',
      'Integrated REST APIs, optimized application performance and SEO, and ensured efficient data flow across systems.',
      'Collaborated with Python/Django services to deliver reliable, production-ready solutions.'
    ],
    tags: [
      { text: 'Full-Stack Web', color: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30' },
      { text: 'SEO & Performance', color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
      { text: 'Django APIs', color: 'bg-amber-500/15 text-amber-400 border-amber-500/30' }
    ]
  },
  {
    index: '03',
    gradient: 'from-pink-500 to-rose-500',
    shadow: 'shadow-pink-500/20',
    border: 'hover:border-pink-400/50',
    company: 'First Career',
    role: 'Fullstack Developer',
    period: 'Aug 2022 — Jan 2024',
    bullets: [
      'Developed applications using React.js, TypeScript, and JavaScript, building responsive user interfaces.',
      'Implemented efficient state management using Redux and the Context API while optimizing performance and user experience.'
    ],
    tags: [
      { text: 'React & Redux', color: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' },
      { text: 'TypeScript', color: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
      { text: 'Full-Stack', color: 'bg-rose-500/15 text-rose-400 border-rose-500/30' }
    ]
  }
]
