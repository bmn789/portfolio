<script setup lang="ts">
import { ref } from 'vue';

const skills = [
  { name: 'Node.js', type: 'neutral' },
  { name: 'TypeScript', type: 'brand' },
  { name: 'React.js', type: 'brand' },
  { name: 'Next.js', type: 'accent' },
  { name: 'Express.js', type: 'brand' },
  { name: 'FastAPI', type: 'accent' },
  { name: 'Python', type: 'accent' },
  { name: 'MongoDB', type: 'brand' },
  { name: 'MySQL', type: 'accent' },
  { name: 'PostgreSQL', type: 'brand' },
  { name: 'AI-Agents', type: 'brand' }
];

const experiences = [
  {
    index: '01',
    company: 'Codewave Technologies',
    role: 'Software Developer',
    period: 'Apr 2025 — Present',
    bullets: [
      'Built and optimized React.js and Next.js applications with reusable, scalable components.',
      'Built instant messaging services and a multi-repository system.',
      'Integrated REST and GraphQL APIs.',
      'Contributed to CI/CD pipeline automation using GitLab and Azure DevOps.'
    ],
    tags: [
      { text: 'Product delivery', variant: 'brand' },
      { text: 'Engineering systems', variant: 'accent' },
      { text: 'API integration', variant: 'neutral' }
    ]
  },
  {
    index: '02',
    company: 'Winline Technologies',
    role: 'Software Developer',
    period: 'Feb 2024 — Mar 2025',
    bullets: [
      'Delivered full-stack Next.js applications with responsive React front ends.',
      'Integrated REST APIs to power dynamic content experiences.',
      'Improved SEO using meta tags and schema markup.',
      'Collaborated with Python/Django APIs.'
    ],
    tags: [
      { text: 'Product delivery', variant: 'brand' },
      { text: 'Engineering systems', variant: 'accent' },
      { text: 'API integration', variant: 'neutral' }
    ]
  },
  {
    index: '03',
    company: 'Plausibility Solutions',
    role: 'Frontend Developer',
    period: 'Aug 2022 — Jan 2024',
    bullets: [
      'Built scalable, responsive UIs using JavaScript, TypeScript, and React.',
      'Implemented state management with Redux and the Context API.',
      'Integrated APIs for reliable real-time data experiences.'
    ],
    tags: [
      { text: 'Product delivery', variant: 'brand' },
      { text: 'Engineering systems', variant: 'accent' },
      { text: 'API integration', variant: 'neutral' }
    ]
  }
];

const projects = [
  {
    title: 'Healthcare SAAS',
    description: 'UI-focused dashboard project built with React.js, Node.js, Firebase and Tailwind CSS.',
    url: 'https://healthcare-saas-789.netlify.app/login?user=demo',
    displayUrl: 'healthcare-saas-789.netlify.app',
    image: '/projects/healthcare-saas.png',
    tags: ['React.js', 'Node.js', 'Firebase', 'Tailwind CSS']
  },
  {
    title: 'AI Assistant',
    description: 'Built with React.js, Python, Google Agent Development Kit (ADK), LLM orchestration, and RAG-style agent workflows. CI/CD using GitHub & Vercel.',
    url: 'https://agent-b7.vercel.app',
    displayUrl: 'agent-b7.vercel.app',
    image: '/projects/ai-assistance.png',
    tags: ['React.js', 'Python', 'Google ADK', 'Vercel']
  }
];

const certificates = [
  {
    title: 'AI Upskilling Certificate',
    issuer: 'Qualcomm',
    image: '/certificates/qualcomm.png',
    url: 'https://drive.google.com/file/d/1a9C-TGMMkuEZQNqULYielBqSZWX8Lyjp/view?usp=sharing'
  },
  {
    title: 'Advanced Prompt Engineering with ChatGPT Certificate',
    issuer: 'UpGrad',
    image: '/certificates/upgrad.png',
    url: 'https://drive.google.com/file/d/1-PsSo5ro7Rdju3y_he327J2LOFJHT6Vy/view?usp=sharing'
  }
];
</script>

<template>

 
  <div class="flex flex-col gap-16 w-full">

    <!-- Hero / Intro Section -->
    <section class="flex flex-col items-center text-center gap-6 mt-6 relative z-10">
      <!-- Glow Feature Badge -->
      <a href="https://agent-b7.vercel.app" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-1 px-3.5 py-1 bg-brand-weak/30 hover:bg-brand-medium/40 border border-brand-strong/30 rounded-full text-xs font-medium text-brand-text transition-all duration-300 animate-glow hover:scale-[1.02] shadow-xs cursor-pointer">
        <span class="font-bold uppercase tracking-wider text-[10px] px-1.5 py-0.5 rounded">AI Assistant</span>
        <span> | </span>
        <span class="flex items-center gap-1 font-sans">
          Featured work
          <svg class="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none"
            stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </a>

      <!-- Headline with Text Gradient -->
      <h1
        class="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight tracking-tight px-2 bg-gradient-to-b from-text-primary via-text-primary to-text-secondary bg-clip-text text-transparent">
        Frontend Engineering • Microservices • Agents • Fullstack Development
      </h1>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-4">
        <div
          class="bg-bg-card border border-border-weak hover:border-brand-strong/40 hover:-translate-y-1 hover:shadow-md rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 text-left">
          <div
            class="w-11 h-11 rounded-full bg-brand-weak border border-brand-strong/20 flex items-center justify-center text-brand-text font-extrabold text-lg shrink-0">
            35+
          </div>
          <div class="flex flex-col">
            <span class="font-extrabold text-sm text-text-primary leading-tight">Tools & skills</span>
            <span class="text-xs text-text-muted mt-0.5">Across frontend, backend, cloud & delivery</span>
          </div>
        </div>

        <div
          class="bg-bg-card border border-border-weak hover:border-brand-strong/40 hover:-translate-y-1 hover:shadow-md rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 text-left">
          <div
            class="w-11 h-11 rounded-full bg-brand-weak border border-brand-strong/20 flex items-center justify-center text-brand-text font-extrabold text-lg shrink-0">
            4+
          </div>
          <div class="flex flex-col">
            <span class="font-extrabold text-sm text-text-primary leading-tight">Years applying them</span>
            <span class="text-xs text-text-muted mt-0.5">Production full-stack development experience</span>
          </div>
        </div>

        <div
          class="bg-bg-card border border-border-weak hover:border-brand-strong/40 hover:-translate-y-1 hover:shadow-md rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 text-left">
          <div
            class="w-11 h-11 rounded-full bg-brand-weak border border-brand-strong/20 flex items-center justify-center text-brand-text font-extrabold text-lg shrink-0">
            2
          </div>
          <div class="flex flex-col">
            <span class="font-extrabold text-sm text-text-primary leading-tight">Featured projects</span>
            <span class="text-xs text-text-muted mt-0.5">Shipped SaaS and AI agent builds</span>
          </div>
        </div>
      </div>

      <!-- Profile Button Link -->
      <RouterLink to="/about"
        class="inline-flex items-center gap-3 bg-bg-card/85 backdrop-blur-xs border border-border-weak hover:border-brand-strong/50 hover:bg-bg-card rounded-full px-5 py-2.5 shadow-sm hover:shadow transition-all duration-300 group mt-2">
        <img src="/images/barath.png" alt="Avatar"
          class="w-6 h-6 rounded-full object-cover ring-2 ring-brand/20 transition-all duration-300 group-hover:ring-brand/50" />
        <span class="text-xs sm:text-sm font-bold text-text-primary">About – Bharath M N</span>
        <svg class="w-4 h-4 text-brand group-hover:translate-x-1.5 transition-transform duration-300" fill="none"
          stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </RouterLink>

      <!-- Bio Paragraph -->
      <p class="text-sm md:text-base text-text-secondary leading-relaxed max-w-6xl mt-12 px-2">
       Hi there 👋. I have over <span class="text-text-primary font-bold border-b border-brand-strong/40 pb-0.5">4 years</span> of
        experience building scalable full-stack applications and distributed systems. My core expertise is in
        <span class="text-text-primary font-semibold">React.js</span>,
        <span class="text-text-primary font-semibold">Next.js</span>,
        <span class="text-text-primary font-semibold">Node.js</span>,
        <span class="text-text-primary font-semibold">TypeScript</span>, and
        <span class="text-text-primary font-semibold">Microservices</span> architecture. More recently, I've been
        working on AI-driven applications involving LLMs, agents, and RAG architectures.
      </p>
    </section>

    <!-- Section Divider -->
    <hr class="border-border-weak/40 w-1/5 mx-auto" />

    <!-- Skills Section -->
    <section class="flex flex-col gap-6 relative z-10">
      <div class="flex flex-col items-center text-center gap-2">
        <h2 class="text-xs font-bold text-text-muted uppercase tracking-widest font-display">Skills</h2>
        <div class="w-8 h-[2.5px] bg-brand rounded-full"></div>
      </div>

      <div class="bg-bg-card border border-border-weak rounded-2xl p-6 flex flex-col gap-6 shadow-xs">
        <div class="flex items-start justify-between gap-4 flex-wrap">
          <div class="flex flex-col gap-1">
            <h3 class="text-base sm:text-lg font-bold font-display text-text-primary">All Skills</h3>
            <span class="text-xs text-text-muted">Languages, frameworks, databases, and tools.</span>
          </div>
          <span
            class="px-2.5 py-0.5 bg-brand-weak border border-brand-strong/15 text-brand-text text-[11px] font-bold rounded-full">
            {{ skills.length }} skills
          </span>
        </div>

        <!-- Skills Cloud -->
        <div class="flex flex-wrap gap-2">
          <div v-for="skill in skills" :key="skill.name" :class="[
            'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xs cursor-default hover:bg-bg-page',
            skill.type === 'brand' ? 'bg-brand-weak/40 border-brand-strong/15 text-brand-text hover:border-brand-strong/40' :
              skill.type === 'accent' ? 'bg-accent-weak/40 border-accent-strong/15 text-accent-text hover:border-accent-strong/40' :
                'bg-neutral-weak/40 border-neutral-strong/15 text-text-secondary hover:border-neutral-strong/40'
          ]">
            <span :class="[
              'w-1.5 h-1.5 rounded-full transition-transform duration-300',
              skill.type === 'brand' ? 'bg-brand' :
                skill.type === 'accent' ? 'bg-accent' :
                  'bg-neutral'
            ]"></span>
            {{ skill.name }}
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <hr class="border-border-weak/40 w-1/5 mx-auto" />

    <!-- Education Section -->
    <section class="flex flex-col gap-6 relative z-10">
      <div class="flex flex-col items-center text-center gap-2">
        <h2 class="text-xs font-bold text-text-muted uppercase tracking-widest font-display">Education</h2>
        <div class="w-8 h-[2.5px] bg-brand rounded-full"></div>
      </div>

      <div
        class="bg-bg-card border border-border-weak hover:border-brand-strong/20 hover:-translate-y-1 hover:shadow-md rounded-2xl p-6 flex flex-col gap-6 transition-all duration-300">
        <div class="flex items-start justify-between gap-4 flex-wrap md:flex-nowrap">
          <div class="flex flex-col gap-3">
            <span
              class="px-2.5 py-0.5 bg-brand-weak border border-brand-strong/20 text-brand-text text-[10px] uppercase font-bold tracking-wider rounded-full w-fit">
              Bachelor of Engineering
            </span>
            <div class="flex flex-col gap-1">
              <h3 class="text-base sm:text-lg font-bold font-display text-text-primary leading-snug">Visvesvaraya
                Technological University</h3>
              <span class="text-xs sm:text-sm text-text-secondary">Electronics and Communication Engineering</span>
            </div>
          </div>

          <div
            class="flex flex-col items-center justify-center p-3 sm:p-4 bg-brand-weak/30 border border-brand-strong/20 rounded-xl min-w-[76px] shrink-0 text-center">
            <span class="text-xl sm:text-2xl font-black text-brand-text">8.0</span>
            <span class="text-[9px] text-text-muted uppercase tracking-widest font-bold">CGPA</span>
          </div>
        </div>

        <div class="flex flex-wrap gap-2">
          <span class="px-2.5 py-1 bg-brand-weak border border-brand-strong/15 text-brand-text text-xs rounded-lg">
            2018 — 2022
          </span>
          <span
            class="px-2.5 py-1 bg-neutral-weak border border-neutral-strong/15 text-text-secondary text-xs rounded-lg">
            Bangalore, Karnataka — 560076
          </span>
          <span class="px-2.5 py-1 bg-accent-weak border border-accent-strong/15 text-accent-text text-xs rounded-lg">
            Engineering Foundation
          </span>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <hr class="border-border-weak/40 w-1/5 mx-auto" />

    <!-- Work Experience Section -->
    <section class="flex flex-col gap-6 relative z-10">
      <div class="flex flex-col items-center text-center gap-2">
        <h2 class="text-xs font-bold text-text-muted uppercase tracking-widest font-display">Work Experience</h2>
        <div class="w-8 h-[2.5px] bg-brand rounded-full"></div>
      </div>

      <div class="flex flex-col gap-6">
        <div v-for="exp in experiences" :key="exp.company"
          class="bg-bg-card border border-border-weak hover:border-brand-strong/30 hover:-translate-y-1 hover:shadow-md rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 group/card">
          <!-- Header -->
          <div class="flex items-start justify-between gap-4 flex-wrap">
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full bg-brand-weak border border-brand-strong/20 flex items-center justify-center text-brand-text font-bold text-xs group-hover/card:bg-brand group-hover/card:text-bg-page transition-all duration-300">
                {{ exp.index }}
              </div>
              <div class="flex flex-col">
                <h3
                  class="font-bold font-display text-text-primary leading-tight group-hover/card:text-brand-text transition-colors duration-300">
                  {{ exp.company }}
                </h3>
                <span class="text-xs text-text-secondary font-semibold">{{ exp.role }}</span>
              </div>
            </div>
            <span
              class="px-2.5 py-0.5 bg-neutral-weak border border-neutral-strong/15 text-text-secondary text-xs rounded-full font-medium">
              {{ exp.period }}
            </span>
          </div>

          <!-- Bullet points -->
          <ul class="list-disc pl-5 text-xs sm:text-sm text-text-secondary flex flex-col gap-2">
            <li v-for="(bullet, bidx) in exp.bullets" :key="bidx" class="leading-relaxed">
              {{ bullet }}
            </li>
          </ul>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 pt-3 border-t border-border-weak/40">
            <span v-for="tag in exp.tags" :key="tag.text" :class="[
              'px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md border',
              tag.variant === 'brand' ? 'bg-brand-weak border-brand-strong/15 text-brand-text' :
                tag.variant === 'accent' ? 'bg-accent-weak border-accent-strong/15 text-accent-text' :
                  'bg-neutral-weak border-neutral-strong/15 text-text-secondary'
            ]">
              {{ tag.text }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <hr class="border-border-weak/40 w-1/5 mx-auto" />

    <!-- Featured Projects Section -->
    <section class="flex flex-col gap-6 relative z-10">
      <div class="flex flex-col items-center text-center gap-2">
        <h2 class="text-xs font-bold text-text-muted uppercase tracking-widest font-display">Featured Projects</h2>
        <div class="w-8 h-[2.5px] bg-brand rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="project in projects" :key="project.title"
          class="bg-bg-card/75 backdrop-blur-xs border border-border-weak hover:border-brand-strong/50 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] hover:-translate-y-2 rounded-2xl overflow-hidden flex flex-col transition-all duration-500 group">
          <!-- Image Zoom & Overlays -->
          <div class="aspect-video w-full overflow-hidden bg-neutral-weak relative border-b border-border-weak">
            <!-- Floating Top Badges -->
            <div class="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
              <span class="px-2.5 py-0.5 bg-bg-card/90 backdrop-blur-md border border-border-weak rounded-md text-[9px] font-bold uppercase tracking-wider text-text-secondary shadow-xs">
                Production View
              </span>
              <div class="w-7 h-7 rounded-full bg-bg-card/90 backdrop-blur-md border border-border-weak flex items-center justify-center text-text-secondary group-hover:text-brand group-hover:border-brand-strong/50 group-hover:scale-110 shadow-xs transition-all duration-300">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

            <img :src="project.image" :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-[1.05] transition-all duration-700 ease-out" />
            
            <!-- Diagonal Sheen reflection sweep -->
            <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-10"></div>
            
            <!-- Ambient hover brand gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-brand/10 to-transparent opacity-85 group-hover:opacity-30 transition-opacity duration-500 z-5"></div>
          </div>

          <!-- Details -->
          <div class="p-5 flex flex-col gap-4 flex-1">
            <div class="flex flex-col gap-1.5">
              <h3
                class="text-base sm:text-lg font-bold font-display text-text-primary group-hover:text-brand-text transition-colors duration-300">
                {{ project.title }}
              </h3>
              <p class="text-xs text-text-secondary leading-relaxed min-h-[36px]">
                {{ project.description }}
              </p>
            </div>

            <!-- Stack -->
            <div class="flex flex-wrap gap-1">
              <span v-for="tag in project.tags" :key="tag"
                class="inline-flex items-center gap-1 px-2.5 py-0.5 bg-neutral-weak border border-neutral-strong/10 text-[9px] uppercase font-bold tracking-wider text-text-secondary rounded-md">
                <span class="w-1.5 h-1.5 rounded-full bg-text-muted/60"></span>
                {{ tag }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex items-center justify-between gap-4 mt-auto pt-3 border-t border-border-weak/40 text-xs">
              <span class="text-text-muted font-mono tracking-tight text-[11px]">{{ project.displayUrl }}</span>
              <a :href="project.url" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-1 px-3 py-1 border border-brand-strong/35 hover:border-brand-strong/70 bg-brand-weak/20 hover:bg-brand-medium/40 text-brand-text hover:text-brand font-bold rounded-full transition-all duration-200 text-xs group/link">
                View project
                <svg
                  class="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                  fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <hr class="border-border-weak/40 w-1/5 mx-auto" />

    <!-- Certificates & Upskills Section -->
    <section class="flex flex-col gap-6 relative z-10">
      <div class="flex flex-col items-center text-center gap-2">
        <h2 class="text-xs font-bold text-text-muted uppercase tracking-widest font-display">Certificates & Upskills</h2>
        <div class="w-8 h-[2.5px] bg-brand rounded-full"></div>
      </div>

      <!-- Upskill Card (ADK) -->
      <div class="bg-bg-card border border-border-weak rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-brand-strong/30 hover:shadow-xs transition-all duration-300 relative">
        <div class="flex items-start gap-4 text-left">
          <!-- Index -->
          <span class="font-mono text-xs text-text-muted mt-1">
            <img  src="/certificates/adk.png" alt="ADK Certificate" width="50" height="50" />
          </span>
          <div class="flex flex-col gap-1.5">
            <h3 class="text-base sm:text-lg font-bold font-display text-text-primary leading-tight">
              Conversational agents development
            </h3>
            <span class="text-xs text-text-secondary">Google Agent Development Kit (ADK)</span>
            <!-- Tag -->
            <span class="inline-flex items-center px-2 py-0.5 mt-1 rounded bg-neutral-weak text-[10px] font-bold text-text-muted uppercase tracking-wider w-fit">
              Upskill
            </span>
          </div>
        </div>

        <!-- Right Button -->
        <a 
          href="https://adk.dev/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center hover:bg-brand-weak gap-1.5 px-4 py-2 bg-bg-navbar border border-border-weak hover:border-brand-strong/40 text-[11px] font-semibold text-text-secondary hover:text-brand rounded-full shadow-xs transition-all duration-200 w-fit shrink-0 self-start sm:self-center group/link"
        >
          Google Agent Development Kit
          <svg class="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      <!-- Certificates Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="cert in certificates" 
          :key="cert.title"
          class="bg-bg-card border border-border-weak hover:border-brand-strong/30 hover:shadow-lg rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group"
        >
          <!-- Image Container -->
          <div class="w-full p-4 overflow-hidden bg-neutral-weak relative flex items-center justify-center">
            <img 
              :src="cert.image" 
              :alt="cert.title" 
              class="w-full h-full object-contain border border-gray-300 group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <!-- Details -->
          <div class="p-5 flex flex-col gap-3.5 flex-1 text-left">
            <div class="flex justify-between items-center w-full">
              <span class="px-2 py-0.5 bg-brand-weak border border-brand-strong/15 text-brand-text text-[9px] uppercase font-bold tracking-wider rounded">
                {{ cert.issuer }}
              </span>
              <span class="px-2 py-0.5 bg-neutral-weak border border-neutral-strong/15 text-text-secondary text-[9px] uppercase font-bold tracking-wider rounded">
                PDF
              </span>
            </div>
            <h4 class="text-xs sm:text-sm font-bold font-display text-text-primary leading-snug group-hover:text-brand-text transition-colors duration-300">
              {{ cert.title }}
            </h4>
            <a 
              :href="cert.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex hover:bg-brand-weak items-center gap-1.5 px-4 py-2 bg-bg-navbar/30 border border-border-weak hover:border-brand-strong/40 text-[11px] font-semibold text-text-secondary hover:text-brand rounded-full shadow-xs transition-all duration-200 mt-auto ml-auto group/link"
            >
              View certificate
              <svg class="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>