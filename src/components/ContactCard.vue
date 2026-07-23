<script setup lang="ts">
import { ref } from 'vue';

const copied = ref(false);

const copyEmail = () => {
  navigator.clipboard.writeText('bmn7892@gmail.com');
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};
</script>

<template>
  <section class="flex flex-col gap-6 mb-8 relative z-10 w-full">
    <div class="flex flex-col items-center text-center gap-2">
      <h2 class="text-xs font-extrabold text-transparent bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text uppercase tracking-widest font-display">Contact & Collaboration</h2>
      <div class="w-12 h-[3px] bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 rounded-full"></div>
    </div>

    <div class="bg-bg-card/90 backdrop-blur-xl border border-purple-500/25 hover:border-sky-400/50 hover:shadow-2xl hover:shadow-purple-500/10 rounded-3xl p-6 sm:p-8 flex flex-col gap-8 transition-all duration-300">
      
      <!-- Top Status & Heading -->
      <div class="flex flex-col items-center text-center gap-3 max-w-xl mx-auto">
        <!-- Live Status Pill -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-semibold">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for SDE & Full-Stack Opportunities
        </div>

        <h3 class="text-2xl sm:text-3xl font-black font-display text-text-primary leading-tight">
          Let's build something <span class="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">extraordinary</span> together.
        </h3>

        <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Whether you're looking to build an AI agent system, scale microservices, or build a high-performance web platform, feel free to reach out.
        </p>
      </div>

      <!-- Quick Contact Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        <!-- Email Box -->
        <div class="bg-bg-page/60 border border-border-weak hover:border-sky-500/40 rounded-2xl p-4 flex flex-col items-center text-center gap-2 group transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <span class="text-xs font-bold text-text-primary">Email</span>
          <a href="mailto:bmn7892@gmail.com" class="text-xs text-sky-400 font-mono hover:underline truncate max-w-full">
            bmn7892@gmail.com
          </a>
        </div>

        <!-- Phone Box -->
        <div class="bg-bg-page/60 border border-border-weak hover:border-purple-500/40 rounded-2xl p-4 flex flex-col items-center text-center gap-2 group transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.94l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </div>
          <span class="text-xs font-bold text-text-primary">Phone</span>
          <a href="tel:+917892475321" class="text-xs text-purple-400 font-mono hover:underline">
            +91 7892475321
          </a>
        </div>

        <!-- Location Box -->
        <div class="bg-bg-page/60 border border-border-weak hover:border-pink-500/40 rounded-2xl p-4 flex flex-col items-center text-center gap-2 group transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <span class="text-xs font-bold text-text-primary">Location</span>
          <span class="text-xs text-pink-300 font-medium">
            Bangalore, India
          </span>
        </div>
      </div>

      <!-- Primary Action Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
        <a 
          href="mailto:bmn7892@gmail.com" 
          class="px-6 py-3 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 hover:from-sky-400 hover:to-pink-400 text-white font-extrabold text-xs tracking-wider rounded-full transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-purple-500/25 hover:scale-105"
        >
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          Send Email
        </a>

        <button 
          @click="copyEmail" 
          class="px-5 py-3 bg-bg-card border border-purple-500/30 hover:border-purple-400/70 hover:bg-purple-500/10 font-bold text-xs uppercase tracking-wider text-purple-300 hover:text-sky-300 rounded-full transition-all duration-300 flex items-center gap-2 shadow-md cursor-pointer hover:scale-105"
        >
          <svg v-if="!copied" class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v9.25c0 .621-.504 1.125-1.125 1.125z" />
          </svg>
          <svg v-else class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          {{ copied ? 'Email Copied!' : 'Copy Email' }}
        </button>
      </div>

    </div>
  </section>
</template>

