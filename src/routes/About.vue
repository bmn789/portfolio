<script setup lang="ts">
import WorkExperience from '../components/WorkExperience.vue';

const skills = [
  { name: 'TypeScript', bg: 'bg-sky-500/15', text: 'text-sky-400', border: 'border-sky-500/30' },
  { name: 'React.js', bg: 'bg-cyan-500/15', text: 'text-cyan-400', border: 'border-cyan-500/30' },
  { name: 'Next.js', bg: 'bg-indigo-500/15', text: 'text-indigo-400', border: 'border-indigo-500/30' },
  { name: 'Node.js', bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  { name: 'Express.js', bg: 'bg-teal-500/15', text: 'text-teal-400', border: 'border-teal-500/30' },
  { name: 'FastAPI', bg: 'bg-emerald-600/15', text: 'text-emerald-300', border: 'border-emerald-600/30' },
  { name: 'JavaScript', bg: 'bg-yellow-500/15', text: 'text-yellow-400', border: 'border-yellow-500/30' },
  { name: 'Python', bg: 'bg-amber-500/15', text: 'text-amber-400', border: 'border-amber-500/30' },
  { name: 'React Redux', bg: 'bg-purple-500/15', text: 'text-purple-400', border: 'border-purple-500/30' },
  { name: 'Tailwind CSS', bg: 'bg-sky-400/15', text: 'text-sky-300', border: 'border-sky-400/30' },
  { name: 'Material UI', bg: 'bg-blue-600/15', text: 'text-blue-400', border: 'border-blue-600/30' },
  { name: 'JWT', bg: 'bg-pink-500/15', text: 'text-pink-400', border: 'border-pink-500/30' },
  { name: 'Mongoose', bg: 'bg-red-500/15', text: 'text-red-400', border: 'border-red-500/30' },
  { name: 'OpenAPI', bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  { name: 'Swagger', bg: 'bg-green-600/15', text: 'text-green-400', border: 'border-green-600/30' },
  { name: 'Postman', bg: 'bg-orange-500/15', text: 'text-orange-400', border: 'border-orange-500/30' },
  { name: 'AWS', bg: 'bg-amber-600/15', text: 'text-amber-400', border: 'border-amber-600/30' },
  { name: 'GCP', bg: 'bg-blue-500/15', text: 'text-blue-400', border: 'border-blue-500/30' },
  { name: 'Azure', bg: 'bg-sky-500/15', text: 'text-sky-400', border: 'border-sky-500/30' },
  { name: 'MongoDB', bg: 'bg-green-500/15', text: 'text-green-400', border: 'border-green-500/30' },
  { name: 'Redis', bg: 'bg-rose-500/15', text: 'text-rose-400', border: 'border-rose-500/30' },
  { name: 'SQL', bg: 'bg-indigo-500/15', text: 'text-indigo-400', border: 'border-indigo-500/30' },
  { name: 'NoSQL', bg: 'bg-teal-500/15', text: 'text-teal-400', border: 'border-teal-500/30' },
  { name: 'MySQL', bg: 'bg-blue-500/15', text: 'text-blue-400', border: 'border-blue-500/30' },
  { name: 'PostgreSQL', bg: 'bg-sky-600/15', text: 'text-sky-300', border: 'border-sky-600/30' },
  { name: 'REST APIs', bg: 'bg-sky-500/15', text: 'text-sky-400', border: 'border-sky-500/30' },
  { name: 'GraphQL', bg: 'bg-pink-600/15', text: 'text-pink-400', border: 'border-pink-600/30' },
  { name: 'WebSockets', bg: 'bg-amber-500/15', text: 'text-amber-400', border: 'border-amber-500/30' },
  { name: 'Git', bg: 'bg-orange-600/15', text: 'text-orange-400', border: 'border-orange-600/30' },
  { name: 'GitHub', bg: 'bg-purple-500/15', text: 'text-purple-300', border: 'border-purple-500/30' },
  { name: 'CI/CD', bg: 'bg-cyan-500/15', text: 'text-cyan-400', border: 'border-cyan-500/30' },
  { name: 'Docker', bg: 'bg-sky-500/15', text: 'text-sky-400', border: 'border-sky-500/30' },
  { name: 'Kubernetes', bg: 'bg-indigo-600/15', text: 'text-indigo-400', border: 'border-indigo-600/30' },
  { name: 'Prompt Engineer', bg: 'bg-fuchsia-500/15', text: 'text-fuchsia-400', border: 'border-fuchsia-500/30' },
  { name: 'RAG', bg: 'bg-purple-600/15', text: 'text-purple-400', border: 'border-purple-600/30' },
  { name: 'Agents', bg: 'bg-pink-500/15', text: 'text-pink-400', border: 'border-pink-500/30' },
  { name: 'LLMs', bg: 'bg-sky-400/15', text: 'text-sky-300', border: 'border-sky-400/30' }
];

skills.map(d=>d.name.toLowerCase)

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
    <div class="-mx-4 sm:mx-0 relative overflow-hidden rounded-none sm:rounded-2xl border-y sm:border border-sky-500/30 bg-bg-card/30">
      <img src="https://images.pexels.com/photos/27588991/pexels-photo-27588991.jpeg" alt="Banner" class="w-full h-auto object-contain sm:object-cover sm:h-72 md:h-80 lg:h-96 z-0 object-center block" />
    </div>

    <div class="flex flex-col gap-12 w-full mt-6 relative z-10">
      <!-- Header / Profile Section -->
      <section
        class="flex flex-col md:flex-row items-center gap-6 md:items-start text-center md:text-left bg-bg-card/85 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 shadow-md hover:border-purple-500/40 transition-all duration-300">
        <img src="/images/barath.png" alt="Bharath M N"
          class="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover ring-4 ring-sky-500/40 shadow-lg shadow-sky-500/20" />

        <div class="flex flex-col gap-3.5 w-full">
          <div class="flex flex-col gap-1">
            <h1 class="text-3xl font-extrabold font-display bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Bharath M N</h1>
            <span class="text-xs sm:text-sm text-sky-400 font-extrabold uppercase tracking-wider">Software Engineer - SDE
              @Codewave | 4+ Years Experience</span>
          </div>

          <div
            class="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-1 text-[11px] font-semibold text-text-secondary">
            <span
              class="inline-flex items-center gap-1.5 bg-sky-500/15 border border-sky-500/30 text-sky-300 px-3 py-1 rounded-lg">
              <svg class="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Bangalore, India
            </span>

            <a href="mailto:bmn7892@gmail.com"
              class="inline-flex items-center gap-1.5 bg-purple-500/15 border border-purple-500/30 text-purple-300 hover:bg-purple-500/25 px-3 py-1 rounded-lg transition-colors">
              <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              bmn7892@gmail.com
            </a>

            <a href="tel:+917892475321"
              class="inline-flex items-center gap-1.5 bg-pink-500/15 border border-pink-500/30 text-pink-300 hover:bg-pink-500/25 px-3 py-1 rounded-lg transition-colors">
              <svg class="w-3.5 h-3.5 text-pink-400" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.94l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +91 7892475321
            </a>
          </div>
        </div>
      </section>

      <!-- Introduction Card -->
      <section class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <h2 class="text-xs font-extrabold text-transparent bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text uppercase tracking-widest font-display">Introduction</h2>
          <div class="flex-1 h-[1px] bg-gradient-to-r from-sky-500/30 via-purple-500/30 to-transparent"></div>
        </div>

        <div
          class="bg-bg-card/85 backdrop-blur-md border border-border-weak rounded-2xl p-6 text-sm md:text-base text-text-secondary leading-relaxed flex flex-col gap-4 shadow-sm">
          <p>
            I have over <span class="text-sky-400 font-bold border-b border-sky-400/30 pb-0.5">4 years</span>
            of experience building scalable full-stack applications and distributed systems. My core expertise is in
            <span class="text-cyan-400 font-bold">React.js</span>,
            <span class="text-indigo-400 font-bold">Next.js</span>,
            <span class="text-emerald-400 font-bold">Node.js</span>,
            <span class="text-sky-400 font-bold">TypeScript</span>, and
            <span class="text-purple-400 font-bold">Microservices</span> architecture.
          </p>
          <p>
            Throughout my career, I've designed and shipped interactive frontend platforms, responsive SaaS dashboards,
            robust backend APIs, instant messaging frameworks, and automated CI/CD workflows while focusing on
            performance, maintainability, and visual excellence.
          </p>
          <p>
            More recently, I've been working on AI-driven applications involving Large Language Models (LLMs),
            orchestrating autonomous agents, and implementing RAG architectures for custom client workflows.
          </p>
        </div>
      </section>

      <WorkExperience />

      <!-- Technical Skills Section -->
      <section class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <h2 class="text-xs font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text uppercase tracking-widest font-display">Technical Skills</h2>
          <div class="flex-1 h-[1px] bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-transparent"></div>
        </div>

        <div class="bg-bg-card/85 backdrop-blur-md border border-border-weak rounded-2xl p-6 flex flex-wrap gap-2.5 shadow-sm">
          <div v-for="skill in skills" :key="skill.name" :class="[
            'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default',
            skill.bg, skill.text, skill.border
          ]">
            {{ skill.name }}
          </div>
        </div>
      </section>

      <!-- Upskills Section -->
      <section class="flex flex-col gap-4 mb-8">
        <div class="flex items-center gap-2">
          <h2 class="text-xs font-extrabold text-transparent bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text uppercase tracking-widest font-display">Upskills</h2>
          <div class="flex-1 h-[1px] bg-gradient-to-r from-pink-500/30 via-rose-500/30 to-transparent"></div>
        </div>

        <div class="flex flex-col gap-4">
          <a v-for="cert in upskills" :key="cert.title" :href="cert.url" target="_blank" rel="noopener noreferrer"
            class="bg-bg-card/85 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50 hover:-translate-y-0.5 hover:shadow-lg rounded-2xl p-4 flex items-center gap-4 flex-wrap sm:flex-nowrap transition-all duration-300 group/cert">
            <div
              class="w-14 h-12 bg-neutral-weak border border-border-weak rounded-xl overflow-hidden shrink-0 flex items-center justify-center relative shadow-sm">
              <img :src="cert.image" :alt="cert.title" class="w-full h-full object-cover" />
            </div>

            <div class="flex flex-col gap-0.5 flex-1 min-w-[200px] text-left">
              <h3
                class="text-xs sm:text-sm font-bold font-display text-text-primary group-hover/cert:text-purple-400 transition-colors duration-200 leading-snug">
                {{ cert.title }}
              </h3>
              <span class="text-[11px] text-purple-300 font-medium">{{ cert.issuer }}</span>
            </div>

            <span
              class="text-xs font-bold text-purple-400 hover:text-pink-400 inline-flex items-center gap-1.5 ml-auto shrink-0 group/link">
              View details
              <svg class="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200" fill="none"
                stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>
