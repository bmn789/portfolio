<script setup lang="ts">
import { ref } from 'vue';

const skills = [
  { name: 'TypeScript', bg: 'bg-sky-500/15', text: 'text-sky-400', border: 'border-sky-500/30', dot: 'bg-sky-400' },
  { name: 'React.js', bg: 'bg-cyan-500/15', text: 'text-cyan-400', border: 'border-cyan-500/30', dot: 'bg-cyan-400' },
  { name: 'Next.js', bg: 'bg-indigo-500/15', text: 'text-indigo-400', border: 'border-indigo-500/30', dot: 'bg-indigo-400' },
  { name: 'Node.js', bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/30', dot: 'bg-emerald-400' },
  { name: 'Express.js', bg: 'bg-teal-500/15', text: 'text-teal-400', border: 'border-teal-500/30', dot: 'bg-teal-400' },
  { name: 'FastAPI', bg: 'bg-emerald-600/15', text: 'text-emerald-300', border: 'border-emerald-600/30', dot: 'bg-emerald-300' },
  { name: 'Python', bg: 'bg-amber-500/15', text: 'text-amber-400', border: 'border-amber-500/30', dot: 'bg-amber-400' },
  { name: 'MongoDB', bg: 'bg-green-500/15', text: 'text-green-400', border: 'border-green-500/30', dot: 'bg-green-400' },
  { name: 'MySQL', bg: 'bg-blue-500/15', text: 'text-blue-400', border: 'border-blue-500/30', dot: 'bg-blue-400' },
  { name: 'PostgreSQL', bg: 'bg-sky-600/15', text: 'text-sky-300', border: 'border-sky-600/30', dot: 'bg-sky-300' },
  { name: 'AWS', bg: 'bg-orange-500/15', text: 'text-orange-400', border: 'border-orange-500/30', dot: 'bg-orange-400' },
  { name: 'AI-Assistance', bg: 'bg-fuchsia-500/15', text: 'text-fuchsia-400', border: 'border-fuchsia-500/30', dot: 'bg-fuchsia-400' }
];

const experiences = [
  {
    index: '01',
    gradient: 'from-sky-500 to-cyan-400',
    shadow: 'shadow-sky-500/20',
    border: 'hover:border-sky-400/50',
    company: 'Codewave Technologies',
    role: 'Software Engineer',
    period: 'Apr 2025 — July 2026',
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
    company: 'Plausibility Solutions',
    role: 'Frontend Developer',
    period: 'Aug 2022 — Jan 2024',
    bullets: [
      'Developed applications using React.js, TypeScript, and JavaScript, building responsive user interfaces.',
      'Integrated Django REST APIs to enable dynamic data handling and improve application functionality.',
      'Implemented efficient state management using Redux and the Context API while optimizing performance and user experience.'
    ],
    tags: [
      { text: 'React & Redux', color: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' },
      { text: 'TypeScript', color: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
      { text: 'UI/UX Craft', color: 'bg-rose-500/15 text-rose-400 border-rose-500/30' }
    ]
  }
];

const projects = [
  {
    title: 'Healthcare SAAS',
    description: 'A customizable dashboard application built with React.js, Node.js, Firebase and Tailwind CSS.',
    url: 'https://healthcare-saas-789.netlify.app/login?user=demo',
    displayUrl: 'healthcare-saas-789.netlify.app',
    image: '/projects/healthcare-saas.png',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    tags: [
      { name: 'React.js', cls: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' },
      { name: 'Node.js', cls: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
      { name: 'Firebase', cls: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
      { name: 'Tailwind CSS', cls: 'bg-sky-500/15 text-sky-400 border-sky-500/30' }
    ]
  },
  {
    title: 'AI Assistant',
    description: 'Built with React.js, Python, Google Agent Development Kit (ADK), LLM orchestration, and RAG-style agent workflows.',
    url: 'https://agent-b7.vercel.app',
    displayUrl: 'agent-b7.vercel.app',
    image: '/projects/ai-assistance.png',
    gradient: 'from-purple-500/20 to-pink-500/20',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    tags: [
      { name: 'React.js', cls: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' },
      { name: 'Python', cls: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
      { name: 'Google ADK', cls: 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30' },
      { name: 'Vercel', cls: 'bg-slate-500/15 text-slate-300 border-slate-500/30' }
    ]
  }
];

const certificates = [
  {
    title: 'AI Upskilling Certificate',
    issuer: 'Qualcomm',
    image: '/certificates/qualcomm.png',
    url: 'https://drive.google.com/file/d/1a9C-TGMMkuEZQNqULYielBqSZWX8Lyjp/view?usp=sharing',
    color: 'border-purple-500/30 bg-purple-500/10 text-purple-400'
  },
  {
    title: 'Advanced Prompt Engineering with ChatGPT Certificate',
    issuer: 'UpGrad',
    image: '/certificates/upgrad.png',
    url: 'https://drive.google.com/file/d/1-PsSo5ro7Rdju3y_he327J2LOFJHT6Vy/view?usp=sharing',
    color: 'border-pink-500/30 bg-pink-500/10 text-pink-400'
  }
];
</script>

<template>
  <div class="flex flex-col gap-16 w-full">

    <!-- Hero / Intro Section -->
    <section class="flex flex-col items-center text-center gap-6 mt-6 relative z-10">
      <!-- Glow Rainbow Feature Badge -->
      <a href="https://agent-b7.vercel.app" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-sky-500/15 via-purple-500/15 to-pink-500/15 hover:from-sky-500/25 hover:to-pink-500/25 border border-sky-400/40 rounded-full text-xs font-semibold text-sky-400 transition-all duration-300 animate-glow hover:scale-[1.03] shadow-md shadow-purple-500/10 cursor-pointer">
        <span class="font-extrabold uppercase tracking-wider text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 text-white shadow-xs">AI Assistant</span>
        <span class="text-purple-400">|</span>
        <span class="flex items-center gap-1 font-sans text-text-primary hover:text-sky-400">
          Featured work
          <svg class="w-3.5 h-3.5 text-purple-400 transition-transform duration-200 group-hover:translate-x-0.5" fill="none"
            stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </a>

      <!-- Dynamic Hero Headline & Animated Domain Grid -->
      <div class="flex flex-col items-center gap-5 w-full">
        <!-- Main Animated Gradient Headline -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-tight tracking-tight px-2 bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-text drop-shadow-sm">
          Frontend Engineering • Microservices • AI Agents • Fullstack Development
        </h1>

        <!-- Interactive Animated Domain Badges Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full mt-2">
          
          <!-- Badge 1: Frontend Engineering -->
          <div class="relative group p-4 rounded-2xl bg-bg-card/80 backdrop-blur-xl border border-sky-500/30 hover:border-sky-400/70 hover:bg-sky-500/10 shadow-lg shadow-sky-500/5 hover:shadow-sky-500/20 transition-all duration-300 animate-float-1 flex flex-col justify-between text-left overflow-hidden">
            <div class="absolute -top-10 -right-10 w-24 h-24 bg-sky-500/15 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div class="flex items-center justify-between mb-2">
              <div class="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <span class="flex h-2 w-2 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
              </span>
            </div>
            <div>
              <h3 class="font-display font-extrabold text-sm sm:text-base text-text-primary group-hover:text-sky-300 transition-colors">
                Frontend Engineering
              </h3>
              <p class="text-[11px] font-mono text-sky-400/90 mt-1">
                Vue 3 • React • TypeScript • Tailwind
              </p>
            </div>
          </div>

          <!-- Badge 2: Microservices -->
          <div class="relative group p-4 rounded-2xl bg-bg-card/80 backdrop-blur-xl border border-emerald-500/30 hover:border-emerald-400/70 hover:bg-emerald-500/10 shadow-lg shadow-emerald-500/5 hover:shadow-emerald-500/20 transition-all duration-300 animate-float-2 flex flex-col justify-between text-left overflow-hidden">
            <div class="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/15 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div class="flex items-center justify-between mb-2">
              <div class="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <span class="flex h-2 w-2 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
            </div>
            <div>
              <h3 class="font-display font-extrabold text-sm sm:text-base text-text-primary group-hover:text-emerald-300 transition-colors">
                Microservices
              </h3>
              <p class="text-[11px] font-mono text-emerald-400/90 mt-1">
                Python • Node.js • Docker • REST
              </p>
            </div>
          </div>

          <!-- Badge 3: AI Agents -->
          <div class="relative group p-4 rounded-2xl bg-bg-card/80 backdrop-blur-xl border border-pink-500/30 hover:border-pink-400/70 hover:bg-pink-500/10 shadow-lg shadow-pink-500/5 hover:shadow-pink-500/20 transition-all duration-300 animate-float-3 flex flex-col justify-between text-left overflow-hidden">
            <div class="absolute -top-10 -right-10 w-24 h-24 bg-pink-500/15 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div class="flex items-center justify-between mb-2">
              <div class="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-400/30 flex items-center justify-center text-pink-300 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
              </div>
              <span class="flex h-2 w-2 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-pink-400"></span>
              </span>
            </div>
            <div>
              <h3 class="font-display font-extrabold text-sm sm:text-base text-text-primary group-hover:text-pink-300 transition-colors">
                AI Agents
              </h3>
              <p class="text-[11px] font-mono text-pink-400/90 mt-1">
                Gemini API • LLMs • RAG • Automation
              </p>
            </div>
          </div>

          <!-- Badge 4: Fullstack Development -->
          <div class="relative group p-4 rounded-2xl bg-bg-card/80 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/70 hover:bg-purple-500/10 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 transition-all duration-300 animate-float-4 flex flex-col justify-between text-left overflow-hidden">
            <div class="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/15 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div class="flex items-center justify-between mb-2">
              <div class="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3m-5.571-3l5.571-3m0 6l5.571 3m-5.571-3l5.571-3m0 6L21.75 12l-4.179-2.25m0 0l-5.571 3m5.571-3l-5.571-3" />
                </svg>
              </div>
              <span class="flex h-2 w-2 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
              </span>
            </div>
            <div>
              <h3 class="font-display font-extrabold text-sm sm:text-base text-text-primary group-hover:text-purple-300 transition-colors">
                Fullstack Development
              </h3>
              <p class="text-[11px] font-mono text-purple-400/90 mt-1">
                PostgreSQL • Cloud • CI/CD • System Design
              </p>
            </div>
          </div>

        </div>

        <!-- Continuous Infinite Marquee Ticker -->
        <div class="w-full overflow-hidden rounded-full bg-bg-card/50 backdrop-blur-md border border-purple-500/20 py-2.5 mt-2 relative">
          <div class="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono text-xs text-text-secondary">
            <!-- Repeat item set 1 -->
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span class="font-bold text-sky-300">Frontend Engineering</span>
            </span>
            <span class="text-purple-400/60">•</span>
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="font-bold text-emerald-300">Microservices</span>
            </span>
            <span class="text-purple-400/60">•</span>
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
              <span class="font-bold text-pink-300">AI Agents</span>
            </span>
            <span class="text-purple-400/60">•</span>
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              <span class="font-bold text-purple-300">Fullstack Development</span>
            </span>
            <span class="text-purple-400/60">•</span>

            <!-- Repeat item set 2 for seamless loop -->
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span class="font-bold text-sky-300">Frontend Engineering</span>
            </span>
            <span class="text-purple-400/60">•</span>
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="font-bold text-emerald-300">Microservices</span>
            </span>
            <span class="text-purple-400/60">•</span>
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
              <span class="font-bold text-pink-300">AI Agents</span>
            </span>
            <span class="text-purple-400/60">•</span>
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              <span class="font-bold text-purple-300">Fullstack Development</span>
            </span>
            <span class="text-purple-400/60">•</span>
          </div>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-4">
        <!-- Stat 1 -->
        <div
          class="bg-bg-card/90 backdrop-blur-md border border-sky-500/20 hover:border-sky-400/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10 rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 text-left group">
          <div
            class="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-xl shrink-0 shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform">
            35+
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-sm text-text-primary leading-tight">Tools & skills</span>
            <span class="text-xs text-text-muted mt-0.5">Across frontend, backend, cloud & AI</span>
          </div>
        </div>

        <!-- Stat 2 -->
        <div
          class="bg-bg-card/90 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 text-left group">
          <div
            class="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-white font-extrabold text-xl shrink-0 shadow-md shadow-purple-500/20 group-hover:scale-110 transition-transform">
            4+
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-sm text-text-primary leading-tight">Years applying them</span>
            <span class="text-xs text-text-muted mt-0.5">Production full-stack experience</span>
          </div>
        </div>

        <!-- Stat 3 -->
        <div
          class="bg-bg-card/90 backdrop-blur-md border border-pink-500/20 hover:border-pink-400/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10 rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 text-left group">
          <div
            class="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-extrabold text-xl shrink-0 shadow-md shadow-pink-500/20 group-hover:scale-110 transition-transform">
            2+
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-sm text-text-primary leading-tight">Years in AI Automation</span>
            <span class="text-xs text-text-muted mt-0.5">Shipped SaaS & AI agent systems</span>
          </div>
        </div>
      </div>

      <!-- Profile Button Link -->
      <RouterLink to="/about"
        class="inline-flex items-center gap-3 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/30 hover:border-purple-400/60 rounded-full px-6 py-2.5 shadow-md hover:shadow-purple-500/15 transition-all duration-300 group mt-2">
        <img src="/images/barath.png" alt="Avatar"
          class="w-7 h-7 rounded-full object-cover ring-2 ring-purple-400 transition-all duration-300 group-hover:ring-pink-400" />
        <span class="text-xs sm:text-sm font-bold text-text-primary">About – Bharath M N</span>
        <svg class="w-4 h-4 text-purple-400 group-hover:translate-x-1.5 transition-transform duration-300" fill="none"
          stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </RouterLink>

      <!-- Bio Paragraph -->
      <p class="text-sm md:text-base text-text-secondary leading-relaxed max-w-4xl mt-8 px-2">
        Hi there 👋. I have over <span class="text-sky-400 font-bold">4 years</span> of experience building scalable applications and distributed systems. My
        expertise
        includes <span class="text-purple-400 font-bold">Node.js, FastAPI (Python), TypeScript, PostgreSQL, React.js, Next.js, Vue.js</span> and <span class="text-pink-400 font-bold">Microservices</span>
        architecture. Throughout my career, I've designed high-performance backend services, database schemas,
        and UI implementations while mentoring developers and shipping high-impact software.
      </p>
    </section>

    <!-- Section Divider -->
    <div class="h-[1px] w-1/3 mx-auto bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>

    <!-- Skills Section -->
    <section class="flex flex-col gap-6 relative z-10">
      <div class="flex flex-col items-center text-center gap-2">
        <h2 class="text-xs font-extrabold text-transparent bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text uppercase tracking-widest font-display">Skills & Stack</h2>
        <div class="w-12 h-[3px] bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 rounded-full"></div>
      </div>

      <div class="bg-bg-card/85 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 flex flex-col gap-6 shadow-md">
        <div class="flex items-start justify-between gap-4 flex-wrap">
          <div class="flex flex-col gap-1">
            <h3 class="text-base sm:text-lg font-bold font-display text-text-primary">Core Technical Proficiency</h3>
            <span class="text-xs text-text-muted">Languages, frameworks, databases, and AI tooling.</span>
          </div>
          <span
            class="px-3 py-1 bg-gradient-to-r from-sky-500/20 to-purple-500/20 border border-sky-400/30 text-sky-400 text-xs font-bold rounded-full">
            {{ skills.length }} Technologies
          </span>
        </div>

        <!-- Skills Cloud with Authentic Colors -->
        <div class="flex flex-wrap gap-2.5">
          <div v-for="skill in skills" :key="skill.name" :class="[
            'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default',
            skill.bg, skill.text, skill.border
          ]">
            <span :class="['w-2 h-2 rounded-full animate-pulse', skill.dot]"></span>
            {{ skill.name }}
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="h-[1px] w-1/3 mx-auto bg-gradient-to-r from-transparent via-sky-500/40 to-transparent"></div>

    <!-- Education Section -->
    <section class="flex flex-col gap-6 relative z-10">
      <div class="flex flex-col items-center text-center gap-2">
        <h2 class="text-xs font-extrabold text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text uppercase tracking-widest font-display">Education</h2>
        <div class="w-12 h-[3px] bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
      </div>

      <div
        class="bg-bg-card/85 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 rounded-2xl p-6 flex flex-col gap-6 transition-all duration-300">
        <div class="flex items-start justify-between gap-4 flex-wrap md:flex-nowrap">
          <div class="flex flex-col gap-3">
            <span
              class="px-3 py-0.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] uppercase font-bold tracking-wider rounded-full w-fit">
              Bachelor of Engineering
            </span>
            <div class="flex flex-col gap-1">
              <h3 class="text-base sm:text-lg font-bold font-display text-text-primary leading-snug">Visvesvaraya
                Technological University</h3>
              <span class="text-xs sm:text-sm text-text-secondary">Electronics and Communication Engineering</span>
            </div>
          </div>

          <div
            class="flex flex-col items-center justify-center p-3 sm:p-4 bg-gradient-to-br from-amber-500/20 to-emerald-500/20 border border-amber-400/30 rounded-2xl min-w-[84px] shrink-0 text-center shadow-md">
            <span class="text-2xl font-black text-amber-400">8.0</span>
            <span class="text-[9px] text-amber-300 uppercase tracking-widest font-bold">CGPA</span>
          </div>
        </div>

        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-xs rounded-xl font-medium">
            2018 — 2022
          </span>
          <span
            class="px-3 py-1 bg-sky-500/15 border border-sky-500/25 text-sky-400 text-xs rounded-xl font-medium">
            Bangalore, Karnataka
          </span>
          <span class="px-3 py-1 bg-purple-500/15 border border-purple-500/25 text-purple-400 text-xs rounded-xl font-medium">
            Engineering Foundation
          </span>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="h-[1px] w-1/3 mx-auto bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>

    <!-- Work Experience Section -->
    <section class="flex flex-col gap-6 relative z-10">
      <div class="flex flex-col items-center text-center gap-2">
        <h2 class="text-xs font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text uppercase tracking-widest font-display">Work Experience</h2>
        <div class="w-12 h-[3px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
      </div>

      <div class="flex flex-col gap-6">
        <div v-for="exp in experiences" :key="exp.company" :class="[
          'bg-bg-card/85 backdrop-blur-md border border-border-weak rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 group/card hover:-translate-y-1 hover:shadow-xl',
          exp.border, exp.shadow
        ]">
          <!-- Header -->
          <div class="flex items-start justify-between gap-4 flex-wrap">
            <div class="flex items-center gap-3">
              <div :class="[
                'w-10 h-10 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-extrabold text-sm shadow-md transition-all duration-300 group-hover/card:scale-110',
                exp.gradient
              ]">
                {{ exp.index }}
              </div>
              <div class="flex flex-col">
                <h3 class="font-bold font-display text-text-primary text-base sm:text-lg leading-tight group-hover/card:text-sky-400 transition-colors duration-300">
                  {{ exp.company }}
                </h3>
                <span class="text-xs text-text-secondary font-semibold">{{ exp.role }}</span>
              </div>
            </div>
            <span
              class="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs rounded-full font-medium">
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
              'px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg border',
              tag.color
            ]">
              {{ tag.text }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="h-[1px] w-1/3 mx-auto bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"></div>

    <!-- Featured Projects Section -->
    <section class="flex flex-col gap-6 relative z-10">
      <div class="flex flex-col items-center text-center gap-2">
        <h2 class="text-xs font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text uppercase tracking-widest font-display">Featured Projects</h2>
        <div class="w-12 h-[3px] bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="project in projects" :key="project.title"
          class="bg-bg-card/85 backdrop-blur-md border border-border-weak hover:border-sky-400/60 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-2 rounded-2xl overflow-hidden flex flex-col transition-all duration-500 group">
          <!-- Image Zoom & Overlays -->
          <div class="aspect-video w-full overflow-hidden bg-neutral-weak relative border-b border-border-weak">
            <!-- Floating Top Badges -->
            <div class="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
              <span :class="['px-3 py-1 backdrop-blur-md border rounded-lg text-[9px] font-extrabold uppercase tracking-wider shadow-md', project.badgeColor]">
                Production View
              </span>
              <div
                class="w-8 h-8 rounded-full bg-bg-card/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-text-secondary group-hover:text-sky-400 group-hover:border-sky-400 group-hover:scale-110 shadow-md transition-all duration-300">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

            <img :src="project.image" :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-[1.05] transition-all duration-700 ease-out" />

            <!-- Diagonal Sheen reflection sweep -->
            <div
              class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none z-10">
            </div>

            <!-- Ambient hover brand gradient overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent opacity-85 group-hover:opacity-40 transition-opacity duration-500 z-5">
            </div>
          </div>

          <!-- Details -->
          <div class="p-5 flex flex-col gap-4 flex-1">
            <div class="flex flex-col gap-1.5">
              <h3
                class="text-base sm:text-lg font-bold font-display text-text-primary group-hover:text-sky-400 transition-colors duration-300">
                {{ project.title }}
              </h3>
              <p class="text-xs text-text-secondary leading-relaxed min-h-[36px]">
                {{ project.description }}
              </p>
            </div>

            <!-- Stack -->
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tag in project.tags" :key="tag.name" :class="[
                'inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] uppercase font-extrabold tracking-wider rounded-md border',
                tag.cls
              ]">
                {{ tag.name }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex items-center justify-between gap-4 mt-auto pt-3 border-t border-border-weak/40 text-xs">
              <span class="text-sky-400/80 font-mono tracking-tight text-[11px]">{{ project.displayUrl }}</span>
              <a :href="project.url" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-400 hover:to-purple-400 text-white font-bold rounded-full transition-all duration-200 text-xs group/link shadow-md shadow-purple-500/20">
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
    <div class="h-[1px] w-1/3 mx-auto bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>

    <!-- Certificates & Upskills Section -->
    <section class="flex flex-col gap-6 relative z-10">
      <div class="flex flex-col items-center text-center gap-2">
        <h2 class="text-xs font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text uppercase tracking-widest font-display">Certificates & Upskills
        </h2>
        <div class="w-12 h-[3px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
      </div>

      <!-- Upskill Card (ADK) -->
      <div
        class="bg-bg-card/85 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-purple-400/50 hover:shadow-lg transition-all duration-300 relative">
        <div class="flex items-start gap-4 text-left">
          <!-- Index -->
          <span class="font-mono text-xs text-text-muted mt-1 shrink-0">
            <img src="/certificates/adk.png" alt="ADK Certificate" width="50" height="50" class="rounded-lg shadow-sm" />
          </span>
          <div class="flex flex-col gap-1.5">
            <h3 class="text-base sm:text-lg font-bold font-display text-text-primary leading-tight">
              Conversational agents development
            </h3>
            <span class="text-xs text-purple-400 font-medium">Google Agent Development Kit (ADK)</span>
            <!-- Tag -->
            <span
              class="inline-flex items-center px-2.5 py-0.5 mt-1 rounded-md bg-purple-500/15 border border-purple-500/30 text-[10px] font-extrabold text-purple-400 uppercase tracking-wider w-fit">
              Upskill
            </span>
          </div>
        </div>

        <!-- Right Button -->
        <a href="https://adk.dev/" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/40 hover:border-purple-400 text-xs font-bold text-purple-300 rounded-full shadow-md transition-all duration-200 w-fit shrink-0 self-start sm:self-center group/link">
          Google ADK Docs
          <svg class="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200" fill="none"
            stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      <!-- Certificates Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="cert in certificates" :key="cert.title"
          class="bg-bg-card/85 backdrop-blur-md border border-border-weak hover:border-pink-400/50 hover:shadow-xl rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group">
          <!-- Image Container -->
          <div class="w-full p-4 overflow-hidden bg-neutral-weak relative flex items-center justify-center">
            <img :src="cert.image" :alt="cert.title"
              class="w-full h-full object-contain border border-gray-300 rounded-lg group-hover:scale-[1.02] transition-transform duration-500" />
          </div>
          <!-- Details -->
          <div class="p-5 flex flex-col gap-3.5 flex-1 text-left">
            <div class="flex justify-between items-center w-full">
              <span :class="['px-2.5 py-0.5 border text-[9px] uppercase font-bold tracking-wider rounded-md', cert.color]">
                {{ cert.issuer }}
              </span>
              <span
                class="px-2.5 py-0.5 bg-neutral-weak border border-neutral-strong/15 text-text-secondary text-[9px] uppercase font-bold tracking-wider rounded-md">
                PDF
              </span>
            </div>
            <h4
              class="text-xs sm:text-sm font-bold font-display text-text-primary leading-snug group-hover:text-pink-400 transition-colors duration-300">
              {{ cert.title }}
            </h4>
            <a :href="cert.url" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple-500/15 to-pink-500/15 border border-purple-500/30 hover:border-pink-400 text-xs font-bold text-pink-300 rounded-full shadow-xs transition-all duration-200 mt-auto ml-auto group/link">
              View certificate
              <svg class="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200" fill="none"
                stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
