<script setup lang="ts">
// Reusable Contact Card Component
</script>

<template>
  <section class="flex flex-col gap-6 mb-8 relative z-10 w-full">
    <div class="flex flex-col items-center text-center gap-2">
      <h2 class="text-xs font-bold text-text-muted uppercase tracking-widest font-display">Contact</h2>
      <div class="w-8 h-[2.5px] bg-brand rounded-full"></div>
    </div>

    <div class="bg-bg-card border border-border-weak hover:border-brand-strong/20 rounded-2xl p-8 flex flex-col items-center text-center gap-6 shadow-sm transition-all duration-300">
      <div class="flex flex-col gap-2.5 max-w-md">
        <h3 class="text-xl md:text-2xl font-black font-display text-text-primary leading-tight">
          Let's build your next production-ready web experience.
        </h3>
        <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Open to meaningful web product work. Frontend, full-stack, microservices, AI agents, and product engineering work. Quick response time, usually within 24 hours.
        </p>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-3 w-full">
        <!-- Email Button -->
        <a 
          href="mailto:bmn7892@gmail.com" 
          class="px-5 py-2.5 bg-brand hover:opacity-95 text-bg-page font-bold text-xs tracking-wider rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          bmn7892@gmail.com
        </a>

        <!-- Phone Button -->
        <a 
          href="tel:+917892475321" 
          class="px-5 py-2.5 bg-bg-card border border-border-strong hover:bg-neutral-weak font-bold text-xs uppercase tracking-wider text-text-primary rounded-full transition-all duration-200 flex items-center gap-2 shadow-xs cursor-pointer"
        >
          <svg class="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.94l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          +91 7892475321
        </a>
      </div>
    </div>
  </section>
</template>
