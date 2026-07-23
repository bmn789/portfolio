<script setup lang="ts">
const projects = [
  {
    title: 'Healthcare SAAS',
    slogan: 'Responsive SaaS UI with demo-ready flows',
    description: 'Healthcare SaaS interface focused on a clean user experience, responsive workflows, and fast deployment.',
    url: 'https://healthcare-saas-789.netlify.app/login?user=demo',
    displayUrl: 'healthcare-saas-789.netlify.app',
    image: '/projects/healthcare-saas.png',
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
    slogan: 'Agent experience, fast frontend, and Vercel delivery',
    description: 'Conversational AI assistant using Astro, React, Vite, Tailwind CSS, and Google Agent Development Kit.',
    url: 'https://agent-b7.vercel.app',
    displayUrl: 'agent-b7.vercel.app',
    image: '/projects/ai-assistance.png',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    tags: [
      { name: 'React.js', cls: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' },
      { name: 'Python', cls: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
      { name: 'Google ADK', cls: 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30' },
      { name: 'Vercel', cls: 'bg-slate-500/15 text-slate-300 border-slate-500/30' }
    ]
  },
  {
    title: 'GearX AI',
    slogan: 'Product modules, admin workflows, and cloud delivery',
    description: 'User and admin modules for an AI product, built with modern React foundations and production deployment workflows.',
    url: 'https://gearx.ai',
    displayUrl: 'gearx-ai-demo.netlify.app',
    image: '/projects/gearx.png',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    tags: [
      { name: 'React.js', cls: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' },
      { name: 'Tailwind CSS', cls: 'bg-sky-500/15 text-sky-400 border-sky-500/30' },
      { name: 'Node.js', cls: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' }
    ]
  },
  {
    title: 'My Dream Paints',
    slogan: 'Brand website with production deployment',
    description: 'Business website built with Next.js and Tailwind CSS, optimized for a polished responsive brand presence.',
    url: 'https://mydreampaints.com/',
    displayUrl: 'mydreampaints.com',
    image: '/projects/mydreampaints.png',
    badgeColor: 'bg-pink-500/20 text-pink-300 border-pink-500/40',
    tags: [
      { name: 'Next.js', cls: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30' },
      { name: 'Tailwind CSS', cls: 'bg-sky-500/15 text-sky-400 border-sky-500/30' }
    ]
  },
  {
    title: 'MKS Foods',
    slogan: 'Performance-focused business site',
    description: 'Food business website built and optimized with React.js, Next.js, Tailwind CSS, and Netlify CI/CD.',
    url: 'https://mksfoods.in/',
    displayUrl: 'mksfoods.com',
    image: '/projects/mksfoods.png',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    tags: [
      { name: 'React.js', cls: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' },
      { name: 'Next.js', cls: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30' },
      { name: 'Tailwind CSS', cls: 'bg-sky-500/15 text-sky-400 border-sky-500/30' },
      { name: 'Netlify', cls: 'bg-teal-500/15 text-teal-400 border-teal-500/30' }
    ]
  }
];

</script>

<template>
  <div class="flex flex-col gap-12 w-full mt-6 relative z-10">
    <!-- Header Hero -->
    <section class="flex flex-col gap-4 text-center items-center">
      <h1 class="text-3xl md:text-4xl font-extrabold font-display leading-tight tracking-tight bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Building premium web products across frontend, backend, AI, and delivery.
      </h1>
      <p class="text-sm md:text-base text-text-secondary leading-relaxed px-2 max-w-3xl">
        A focused overview of my production experience and shipped projects, from scalable React and Next.js interfaces to APIs, microservices, CI/CD, and AI-assisted development.
      </p>
    </section>

    <!-- Section Divider -->
    <div class="h-[1px] w-1/3 mx-auto bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>

    <!-- Selected Builds Grid -->
    <section class="flex flex-col gap-6 mb-8">
      <div class="flex flex-col gap-1.5 text-center items-center">
        <h2 class="text-xs font-extrabold text-transparent bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text uppercase tracking-widest font-display">Selected Builds</h2>
        <p class="text-xs text-text-secondary max-w-md">
          Production and portfolio projects that show the range of my frontend, full-stack, cloud, and AI-focused work.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div 
          v-for="project in projects" 
          :key="project.title"
          class="bg-bg-card/85 backdrop-blur-md border border-border-weak hover:border-sky-400/60 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 rounded-2xl overflow-hidden flex flex-col transition-all duration-500 group"
        >
          <!-- Image Zoom & Overlays -->
          <div class="aspect-video w-full overflow-hidden bg-neutral-weak relative border-b border-border-weak">
            <!-- Floating Top Badges -->
            <div class="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
              <span :class="['px-3 py-1 backdrop-blur-md border rounded-lg text-[9px] font-extrabold uppercase tracking-wider shadow-md', project.badgeColor]">
                Featured Project
              </span>
              <div class="w-8 h-8 rounded-full bg-bg-card/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-text-secondary group-hover:text-sky-400 group-hover:border-sky-400 group-hover:scale-110 shadow-md transition-all duration-300">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover group-hover:scale-[1.05] transition-all duration-700 ease-out"
            />
            
            <!-- Diagonal Sheen reflection sweep -->
            <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none z-10"></div>
            
            <!-- Ambient hover brand gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent opacity-85 group-hover:opacity-40 transition-opacity duration-500 z-5"></div>
          </div>

          <!-- Card Body -->
          <div class="p-5 flex flex-col gap-4 flex-1">
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-0.5">
                <h3 class="text-lg font-bold font-display text-text-primary group-hover:text-sky-400 transition-colors duration-200">
                  {{ project.title }}
                </h3>
                <span class="text-[10px] sm:text-[11px] text-purple-400 font-bold uppercase tracking-wider">{{ project.slogan }}</span>
              </div>
              <p class="text-xs text-text-secondary leading-relaxed min-h-[44px]">
                {{ project.description }}
              </p>
            </div>

            <!-- Tech stack chips -->
            <div class="flex flex-wrap gap-1.5">
              <span 
                v-for="tag in project.tags" 
                :key="tag.name"
                :class="[
                  'inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] uppercase font-extrabold tracking-wider rounded-md border',
                  tag.cls
                ]"
              >
                {{ tag.name }}
              </span>
            </div>

            <!-- Card Footer -->
            <div class="flex items-center justify-between gap-4 mt-auto pt-3 border-t border-border-weak/40 text-xs">
              <span class="text-sky-400/80 font-mono tracking-tight text-[11px]">{{ project.displayUrl }}</span>
              <a 
                v-if="project.url !== '#'"
                :href="project.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-400 hover:to-purple-400 text-white font-bold rounded-full transition-all duration-200 text-xs group/link shadow-md shadow-purple-500/20"
              >
                View project
                <svg class="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
              <span v-else class="text-[11px] text-text-muted font-semibold italic uppercase tracking-wider bg-neutral-weak border border-neutral-strong/10 px-2 py-0.5 rounded">Internal Build</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>