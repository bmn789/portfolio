<script setup lang="ts">
import { ref } from 'vue';

const copiedEmail = ref(false);
const copiedPhone = ref(false);

const copyEmail = () => {
  navigator.clipboard.writeText('bmn7892@gmail.com');
  copiedEmail.value = true;
  setTimeout(() => {
    copiedEmail.value = false;
  }, 2000);
};

const copyPhone = () => {
  navigator.clipboard.writeText('+917892475321');
  copiedPhone.value = true;
  setTimeout(() => {
    copiedPhone.value = false;
  }, 2000);
};
</script>

<template>
  <section class="relative z-10 w-full mb-10">
    <!-- Outer Glow Ambient Backdrop -->
    <div class="absolute -inset-1 bg-gradient-to-r from-sky-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 pointer-events-none"></div>

    <!-- Main Premium Glass Card -->
    <div class="relative w-full rounded-3xl bg-bg-card/85 backdrop-blur-2xl border border-purple-500/20 hover:border-sky-400/40 p-6 sm:p-10 shadow-2xl shadow-purple-950/30 overflow-hidden group">
      
      <!-- Subtle Corner Light Beam Accent -->
      <div class="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 flex flex-col gap-8">
        
        <!-- Header & Status Badge -->
        <div class="flex flex-col items-center text-center gap-3.5 max-w-2xl mx-auto">
          <!-- Availability Pill -->
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide shadow-sm">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Open for Software Engineering Roles & Tech Collaboration</span>
          </div>

          <!-- Main Catchy Title -->
          <h2 class="text-2xl sm:text-4xl font-black font-display text-text-primary tracking-tight leading-tight">
            Let's build something <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400">extraordinary</span>.
          </h2>

          <p class="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-lg">
            Have a project in mind, an opportunity to discuss, or just want to connect? I'm always excited to collaborate on innovative software solutions.
          </p>
        </div>

        <!-- Contact Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          
          <!-- Card 1: Email -->
          <div class="relative group/item p-4 sm:p-5 rounded-2xl bg-bg-page/50 border border-purple-500/15 hover:border-sky-400/50 hover:bg-sky-500/5 transition-all duration-300 flex flex-col justify-between gap-4">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover/item:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <button 
                @click="copyEmail" 
                class="px-2.5 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/25 text-[11px] font-mono transition-all flex items-center gap-1 cursor-pointer"
                title="Copy Email"
              >
                <svg v-if="!copiedEmail" class="w-3 h-3 text-sky-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v9.25c0 .621-.504 1.125-1.125 1.125z" />
                </svg>
                <svg v-else class="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{{ copiedEmail ? 'Copied!' : 'Copy' }}</span>
              </button>
            </div>
            <div>
              <span class="text-[11px] font-mono text-text-muted uppercase tracking-wider block mb-0.5">Email Address</span>
              <a href="mailto:bmn7892@gmail.com" class="text-xs sm:text-sm font-semibold text-text-primary group-hover/item:text-sky-300 font-mono transition-colors block truncate">
                bmn7892@gmail.com
              </a>
            </div>
          </div>

          <!-- Card 2: Phone -->
          <div class="relative group/item p-4 sm:p-5 rounded-2xl bg-bg-page/50 border border-purple-500/15 hover:border-purple-400/50 hover:bg-purple-500/5 transition-all duration-300 flex flex-col justify-between gap-4">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover/item:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.94l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <button 
                @click="copyPhone" 
                class="px-2.5 py-1 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/25 text-[11px] font-mono transition-all flex items-center gap-1 cursor-pointer"
                title="Copy Phone Number"
              >
                <svg v-if="!copiedPhone" class="w-3 h-3 text-purple-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v9.25c0 .621-.504 1.125-1.125 1.125z" />
                </svg>
                <svg v-else class="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{{ copiedPhone ? 'Copied!' : 'Copy' }}</span>
              </button>
            </div>
            <div>
              <span class="text-[11px] font-mono text-text-muted uppercase tracking-wider block mb-0.5">Direct Phone</span>
              <a href="tel:+917892475321" class="text-xs sm:text-sm font-semibold text-text-primary group-hover/item:text-purple-300 font-mono transition-colors block">
                +91 7892475321
              </a>
            </div>
          </div>

          <!-- Card 3: Location -->
          <div class="relative group/item p-4 sm:p-5 rounded-2xl bg-bg-page/50 border border-purple-500/15 hover:border-pink-400/50 hover:bg-pink-500/5 transition-all duration-300 flex flex-col justify-between gap-4">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover/item:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <span class="px-2 py-0.5 rounded-md bg-pink-500/10 text-pink-300 text-[11px] font-mono border border-pink-500/20">IST (UTC+5:30)</span>
            </div>
            <div>
              <span class="text-[11px] font-mono text-text-muted uppercase tracking-wider block mb-0.5">Location</span>
              <span class="text-xs sm:text-sm font-semibold text-text-primary group-hover/item:text-pink-300 transition-colors block">
                Bangalore, Karnataka, India
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>


