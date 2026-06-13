<script setup lang="ts">
const skills = [
  { name: 'TypeScript', type: 'brand' },
  { name: 'React.js', type: 'brand' },
  { name: 'Next.js', type: 'accent' },
  { name: 'Node.js', type: 'neutral' },
  { name: 'Express.js', type: 'brand' },
  { name: 'FastAPI', type: 'accent' },
  { name: 'JavaScript', type: 'accent' },
  { name: 'Python', type: 'accent' },
  { name: 'React Redux', type: 'neutral' },
  { name: 'Tailwind CSS', type: 'neutral' },
  { name: 'Material UI', type: 'brand' },
  { name: 'JWT', type: 'accent' },
  { name: 'Mongoose', type: 'brand' },
  { name: 'OpenAPI', type: 'neutral' },
  { name: 'Swagger', type: 'brand' },
  { name: 'Postman', type: 'neutral' },
  { name: 'AWS', type: 'neutral' },
  { name: 'GCP', type: 'accent' },
  { name: 'Azure', type: 'brand' },
  { name: 'MongoDB', type: 'brand' },
  { name: 'Redis', type: 'neutral' },
  { name: 'SQL', type: 'accent' },
  { name: 'NoSQL', type: 'neutral' },
  { name: 'MySQL', type: 'accent' },
  { name: 'PostgreSQL', type: 'brand' },
  { name: 'REST APIs', type: 'brand' },
  { name: 'GraphQL', type: 'accent' },
  { name: 'WebSockets', type: 'neutral' },
  { name: 'Git', type: 'brand' },
  { name: 'GitHub', type: 'accent' },
  { name: 'CI/CD', type: 'accent' },
  { name: 'Docker', type: 'neutral' },
  { name: 'Kubernetes', type: 'brand' },
  { name: 'Prompt Engineer', type: 'brand' },
  { name: 'RAG', type: 'accent' },
  { name: 'Agents', type: 'neutral' },
  { name: 'LLMs', type: 'brand' }
];

const upskills = [
  {
    title: 'Conversational Agents Development',
    issuer: 'Google Agent Development Kit',
    image: '/certificates/adk.png',
    url: 'https://adk.dev/'
  }
];
</script>

<template>
  <div class="w-full">
    <img src="/banner.png" class="w-full z-0" />
    <div class="flex flex-col gap-12 w-full mt-6 relative z-10">
      <!-- Header / Profile Section -->
      <section class="flex flex-col md:flex-row items-center gap-6 md:items-start text-center md:text-left bg-bg-card border border-border-weak rounded-2xl p-6 shadow-xs">
        <img src="/images/barath.png" alt="Bharath M N" class="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover ring-2 ring-brand/20 shadow-xs" />
        
        <div class="flex flex-col gap-3.5 w-full">
          <div class="flex flex-col gap-1">
            <h1 class="text-3xl font-extrabold font-display text-text-primary leading-none">Bharath M N</h1>
            <span class="text-xs sm:text-sm text-brand-text font-bold uppercase tracking-wider">Software Engineer - SDE @Codewave | 4+ Years Experience</span>
          </div>

          <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-1 text-[11px] font-semibold text-text-secondary">
            <span class="inline-flex items-center gap-1 bg-neutral-weak/50 px-2.5 py-1 rounded-md border border-neutral-strong/10">
              <svg class="w-3.5 h-3.5 text-text-muted" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Bangalore, India
            </span>

            <a href="mailto:bmn7892@gmail.com" class="inline-flex items-center gap-1 bg-brand-weak border border-brand-strong/15 text-brand-text hover:bg-brand-medium/30 px-2.5 py-1 rounded-md transition-colors">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              bmn7892@gmail.com
            </a>

            <a href="tel:+917892475321" class="inline-flex items-center gap-1 bg-neutral-weak border border-neutral-strong/10 text-text-secondary hover:bg-neutral-medium/20 px-2.5 py-1 rounded-md transition-colors">
              <svg class="w-3.5 h-3.5 text-text-muted" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.94l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +91 7892475321
            </a>
          </div>
        </div>
      </section>

      <!-- Introduction Card -->
      <section class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <h2 class="text-xs font-bold text-text-muted uppercase tracking-widest font-display">Introduction</h2>
          <div class="flex-1 h-[1px] bg-border-weak/40"></div>
        </div>
        
        <div class="bg-bg-card border border-border-weak rounded-2xl p-6 text-sm md:text-base text-text-secondary leading-relaxed flex flex-col gap-4 shadow-xs">
          <p>
            I have over <span class="text-text-primary font-bold border-b border-brand-strong/30 pb-0.5">4 years</span> of experience building scalable full-stack applications and distributed systems. My core expertise is in 
            <span class="text-text-primary font-semibold">React.js</span>, 
            <span class="text-text-primary font-semibold">Next.js</span>, 
            <span class="text-text-primary font-semibold">Node.js</span>, 
            <span class="text-text-primary font-semibold">TypeScript</span>, and 
            <span class="text-text-primary font-semibold">Microservices</span> architecture.
          </p>
          <p>
            Throughout my career, I've designed and shipped interactive frontend platforms, responsive SaaS dashboards, robust backend APIs, instant messaging frameworks, and automated CI/CD workflows while focusing on performance, maintainability, and visual excellence.
          </p>
          <p>
            More recently, I've been working on AI-driven applications involving Large Language Models (LLMs), orchestrating autonomous agents, and implementing RAG architectures for custom client workflows.
          </p>
        </div>
      </section>

      <!-- Technical Skills Section -->
      <section class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <h2 class="text-xs font-bold text-text-muted uppercase tracking-widest font-display">Technical Skills</h2>
          <div class="flex-1 h-[1px] bg-border-weak/40"></div>
        </div>

        <div class="bg-bg-card border border-border-weak rounded-2xl p-6 flex flex-wrap gap-2 shadow-xs">
          <div 
            v-for="skill in skills" 
            :key="skill.name"
            :class="[
              'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xs cursor-default hover:bg-bg-page',
              skill.type === 'brand' ? 'bg-brand-weak border-brand-strong/15 text-brand-text hover:border-brand-strong/40' : 
              skill.type === 'accent' ? 'bg-accent-weak border-accent-strong/15 text-accent-text hover:border-accent-strong/40' : 
              'bg-neutral-weak border-neutral-strong/15 text-text-secondary hover:border-neutral-strong/40'
            ]"
          >
            <span :class="[
              'w-1.5 h-1.5 rounded-full',
              skill.type === 'brand' ? 'bg-brand' : 
              skill.type === 'accent' ? 'bg-accent' : 
              'bg-neutral'
            ]"></span>
            {{ skill.name }}
          </div>
        </div>
      </section>

      <!-- Upskills Section -->
      <section class="flex flex-col gap-4 mb-8">
        <div class="flex items-center gap-2">
          <h2 class="text-xs font-bold text-text-muted uppercase tracking-widest font-display">Upskills</h2>
          <div class="flex-1 h-[1px] bg-border-weak/40"></div>
        </div>

        <div class="flex flex-col gap-4">
          <a 
            v-for="cert in upskills" 
            :key="cert.title"
            :href="cert.url"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-bg-card border border-border-weak hover:border-brand-strong/30 hover:-translate-y-0.5 hover:shadow-xs rounded-xl p-4 flex items-center gap-4 flex-wrap sm:flex-nowrap transition-all duration-300 group/cert"
          >
            <div class="w-14 h-11 bg-neutral-weak border border-border-weak rounded overflow-hidden shrink-0 flex items-center justify-center relative">
              <img :src="cert.image" :alt="cert.title" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-neutral-900/5"></div>
            </div>

            <div class="flex flex-col gap-0.5 flex-1 min-w-[200px] text-left">
              <h3 class="text-xs sm:text-sm font-bold font-display text-text-primary group-hover/cert:text-brand-text transition-colors duration-200 leading-snug">
                {{ cert.title }}
              </h3>
              <span class="text-[11px] text-text-secondary">{{ cert.issuer }}</span>
            </div>

            <span class="text-xs font-semibold text-brand-text hover:text-brand inline-flex items-center gap-1 ml-auto shrink-0 group/link">
              View details
              <svg class="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>