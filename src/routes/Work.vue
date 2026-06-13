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
    url: 'https://gearx-ai-demo.netlify.app',
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
          class="bg-bg-card border border-border-weak hover:border-brand-strong/40 hover:-translate-y-1.5 hover:shadow-lg rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group"
        >
          <!-- Image -->
          <div class="aspect-video w-full overflow-hidden bg-neutral-weak relative border-b border-border-weak">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-colors duration-300"></div>
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
                class="inline-flex items-center gap-1 text-brand-text hover:text-brand font-semibold group/link"
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