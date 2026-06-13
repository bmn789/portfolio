<script setup lang="ts">
const projects = [
  {
    title: 'Healthcare SAAS',
    slogan: 'Responsive SaaS UI with demo-ready flows',
    description: 'Healthcare SaaS interface focused on a clean user experience, responsive workflows, and fast deployment.',
    url: 'https://healthcare-saas-789.netlify.app/login?user=demo',
    displayUrl: 'healthcare-saas-789.netlify.app',
    image: '/projects/healthcare-saas.png',
    tags: ['React.js', 'Node.js', 'Firebase', 'Tailwind CSS']
  },
  {
    title: 'AI Assistant',
    slogan: 'Agent experience, fast frontend, and Vercel delivery',
    description: 'Conversational AI assistant using Astro, React, Vite, Tailwind CSS, and Google Agent Development Kit.',
    url: 'https://agent-b7.vercel.app',
    displayUrl: 'agent-b7.vercel.app',
    image: '/projects/ai-assistance.png',
    tags: ['React.js', 'Python', 'Google ADK', 'Vercel']
  },
  {
    title: 'GearX AI',
    slogan: 'Product modules, admin workflows, and cloud delivery',
    description: 'User and admin modules for an AI product, built with modern React foundations and production deployment workflows.',
    url: 'https://gearx.ai',
    displayUrl: 'gearx-ai-demo.netlify.app',
    image: '/projects/gearx.png',
    tags: ['React.js', 'Tailwind CSS', 'Node.js']
  },
  {
    title: 'My Dream Paints',
    slogan: 'Brand website with production deployment',
    description: 'Business website built with Next.js and Tailwind CSS, optimized for a polished responsive brand presence.',
    url: 'https://mydreampaints.com/',
    displayUrl: 'mydreampaints.com',
    image: '/projects/mydreampaints.png',
    tags: ['Next.js', 'Tailwind CSS']
  },
  {
    title: 'MKS Foods',
    slogan: 'Performance-focused business site',
    description: 'Food business website built and optimized with React.js, Next.js, Tailwind CSS, and Netlify CI/CD.',
    url: 'https://mksfoods.in/',
    displayUrl: 'mksfoods.com',
    image: '/projects/mksfoods.png',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Netlify']
  }
];

</script>

<template>
  <div class="flex flex-col gap-12 w-full mt-6 relative z-10">
    <!-- Header Hero -->
    <section class="flex flex-col gap-4 text-center items-center">
      <h1 class="text-3xl md:text-4xl font-extrabold font-display leading-tight tracking-tight bg-gradient-to-b from-text-primary via-text-primary to-text-secondary bg-clip-text text-transparent">
        Building premium web products across frontend, backend, AI, and delivery.
      </h1>
      <p class="text-sm md:text-base text-text-secondary leading-relaxed px-2">
        A focused overview of my production experience and shipped projects, from scalable React and Next.js interfaces to APIs, microservices, CI/CD, and AI-assisted development.
      </p>

    </section>

    <!-- Section Divider -->
    <hr class="border-border-weak/40 w-1/5 mx-auto" />

    <!-- Selected Builds Grid -->
    <section class="flex flex-col gap-6 mb-8">
      <div class="flex flex-col gap-1.5 text-center items-center">
        <h2 class="text-xs font-bold text-text-muted uppercase tracking-widest font-display">Selected Builds</h2>
        <p class="text-xs text-text-secondary max-w-md">
          Production and portfolio projects that show the range of my frontend, full-stack, cloud, and AI-focused work.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-24 mt-4">
        <div 
          v-for="project in projects" 
          :key="project.title"
          class="bg-bg-card/75 backdrop-blur-xs border border-border-weak hover:border-brand-strong/50 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] hover:-translate-y-2 rounded-2xl overflow-hidden flex flex-col transition-all duration-500 group"
        >
          <!-- Image Zoom & Overlays -->
          <div class="aspect-video w-full overflow-hidden bg-neutral-weak relative border-b border-border-weak">
            <!-- Floating Top Badges -->
            <div class="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
              <span class="px-2.5 py-0.5 bg-bg-card/90 backdrop-blur-md border border-border-weak rounded-md text-[9px] font-bold uppercase tracking-wider text-text-secondary shadow-xs">
                Featured Project
              </span>
              <div class="w-7 h-7 rounded-full bg-bg-card/90 backdrop-blur-md border border-border-weak flex items-center justify-center text-text-secondary group-hover:text-brand group-hover:border-brand-strong/50 group-hover:scale-110 shadow-xs transition-all duration-300">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
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
            <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-10"></div>
            
            <!-- Ambient hover brand gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-brand/10 to-transparent opacity-85 group-hover:opacity-30 transition-opacity duration-500 z-5"></div>
          </div>

          <!-- Card Body -->
          <div class="p-5 flex flex-col gap-4 flex-1">
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-0.5">
                <h3 class="text-lg font-bold font-display text-text-primary group-hover:text-brand-text transition-colors duration-200">
                  {{ project.title }}
                </h3>
                <span class="text-[10px] sm:text-[11px] text-brand-text font-bold uppercase tracking-wider">{{ project.slogan }}</span>
              </div>
              <p class="text-xs text-text-secondary leading-relaxed min-h-[50px]">
                {{ project.description }}
              </p>
            </div>

            <!-- Tech stack chips -->
            <div class="flex flex-wrap gap-1.5">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="inline-flex items-center gap-1 px-2.5 py-0.5 bg-neutral-weak border border-neutral-strong/10 text-[9px] uppercase font-bold tracking-wider text-text-secondary rounded-md"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-text-muted/60"></span>
                {{ tag }}
              </span>
            </div>

            <!-- Card Footer -->
            <div class="flex items-center justify-between gap-4 mt-auto pt-3 border-t border-border-weak/40 text-xs">
              <span class="text-text-muted font-mono tracking-tight text-[11px]">{{ project.displayUrl }}</span>
              <a 
                v-if="project.url !== '#'"
                :href="project.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center gap-1 px-3 py-1 border border-brand-strong/35 hover:border-brand-strong/70 bg-brand-weak/20 hover:bg-brand-medium/40 text-brand-text hover:text-brand font-bold rounded-full transition-all duration-200 text-xs group/link"
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