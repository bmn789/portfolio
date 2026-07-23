<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import ContactCard from './ContactCard.vue';

const route = useRoute();

const breadcrumbs = computed(() => {
  const path = route.path;
  if (!path || path === '/') {
    return [{ label: 'Home', to: '/' }];
  }
  const parts = path.split('/').filter(p => p);
  const list = [{ label: 'Home', to: '/' }];
  let currentPath = '';
  for (const part of parts) {
    currentPath += `/${part}`;
    list.push({ label: part, to: currentPath });
  }
  return list;
});
</script>

<template>
  <div class="mt-16 w-full">
    <!-- Contact Card -->
    <ContactCard />

    <!-- Main Footer Container -->
    <footer class="mt-12 pt-10 pb-8 border-t border-purple-500/20 flex flex-col gap-10 relative z-10 w-full">
      
      <!-- Top / Main Footer Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        
        <!-- Column 1: Brand & Bio -->
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
            <span class="font-display font-black text-lg text-text-primary tracking-tight">Bharath M N</span>
          </div>
          <p class="text-xs text-text-secondary leading-relaxed">
            Software Development Engineer crafting scalable microservices, interactive web applications, and modern developer tools.
          </p>
          <div class="flex items-center gap-2 text-xs text-text-muted mt-1 font-mono">
            <svg class="w-3.5 h-3.5 text-pink-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span>Bangalore, India</span>
          </div>
        </div>

        <!-- Column 2: Navigation Links -->
        <div class="flex flex-col gap-3">
          <h4 class="text-xs font-extrabold uppercase tracking-wider text-sky-400 font-display">Navigation</h4>
          <ul class="flex flex-col gap-2 text-xs text-text-secondary">
            <li>
              <RouterLink to="/" class="hover:text-sky-400 transition-colors inline-flex items-center gap-1.5">
                <span class="text-purple-500/60">&gt;</span> Home
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="hover:text-purple-400 transition-colors inline-flex items-center gap-1.5">
                <span class="text-purple-500/60">&gt;</span> About
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/work" class="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5">
                <span class="text-purple-500/60">&gt;</span> Work & Projects
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/blogs" class="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5">
                <span class="text-purple-500/60">&gt;</span> Blogs
              </RouterLink>
            </li>
            <li>
              <a href="/resume.html" target="_blank" class="hover:text-pink-400 transition-colors inline-flex items-center gap-1.5">
                <span class="text-purple-500/60">&gt;</span> Resume (PDF)
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Connect & Socials -->
        <div class="flex flex-col gap-3">
          <h4 class="text-xs font-extrabold uppercase tracking-wider text-purple-400 font-display">Connect</h4>
          <ul class="flex flex-col gap-2 text-xs text-text-secondary">
            <li>
              <a href="https://github.com/bmn789" target="_blank" rel="noopener noreferrer" class="hover:text-sky-400 transition-colors flex items-center gap-2">
                <svg class="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/bmn789" target="_blank" rel="noopener noreferrer" class="hover:text-purple-400 transition-colors flex items-center gap-2">
                <svg class="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="mailto:bmn7892@gmail.com" class="hover:text-pink-400 transition-colors flex items-center gap-2">
                <svg class="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>bmn7892@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+917892475321" class="hover:text-emerald-400 transition-colors flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.94l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+91 7892475321</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Sub-Bar: Breadcrumbs & Copyright -->
      <div class="pt-6 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
        <!-- Breadcrumb path -->
        <div class="flex items-center gap-1.5 font-mono text-[11px] tracking-tight">
          <span class="text-sky-400 font-bold">Bharath</span>
          <span class="text-purple-400">|</span>
          <template v-for="(crumb, index) in breadcrumbs" :key="crumb.label">
            <span v-if="index > 0" class="text-purple-500/40">/</span>
            <RouterLink v-if="index < breadcrumbs.length - 1" :to="crumb.to"
              class="hover:text-sky-400 transition-colors duration-150 capitalize">
              {{ crumb.label }}
            </RouterLink>
            <span v-else class="text-purple-300 font-bold capitalize">{{ crumb.label }}</span>
          </template>
        </div>

        <!-- Copyright -->
        <div class="text-[11px] font-mono text-text-muted/70">
          <span>© 2026 Bharath M N. All rights reserved.</span>
        </div>
      </div>

    </footer>
  </div>
</template>


