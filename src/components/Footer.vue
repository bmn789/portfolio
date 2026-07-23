<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import ContactCard from './ContactCard.vue';

const route = useRoute();
const copied = ref(false);

// Live Bangalore (IST) Time Clock
const istTime = ref('');
let timer: number | undefined;

const updateIstTime = () => {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  istTime.value = new Intl.DateTimeFormat('en-US', options).format(new Date());
};

onMounted(() => {
  updateIstTime();
  timer = window.setInterval(updateIstTime, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

// Breadcrumb Navigation
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

// Smooth Scroll to Top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Copy email
const copyEmail = () => {
  navigator.clipboard.writeText('bmn7892@gmail.com');
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};
</script>

<template>
  <div class="mt-16 w-full relative">
    <!-- Contact Card -->
    <ContactCard />

    <!-- Main Footer Container (Plain integrated layout without card container) -->
    <footer class="mt-12 pt-10 border-t border-purple-500/20 relative z-10 w-full overflow-hidden group/footer">
      
    

      <!-- Main Columns Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 py-8 border-b border-purple-500/15 relative z-10">
        
        <!-- Col 1: Bio & Core Mission (5 cols) -->
        <div class="md:col-span-5 flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 via-purple-500 to-pink-500 p-[1.5px] shadow-lg shadow-purple-500/20">
              <div class="w-full h-full bg-bg-card rounded-[14px] flex items-center justify-center font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 text-lg">
                BM
              </div>
            </div>
            <div>
              <h3 class="font-display font-black text-base text-text-primary tracking-tight">Bharath M N</h3>
              <p class="text-xs text-text-muted font-mono">Software Development Engineer</p>
            </div>
          </div>

          <p class="text-xs text-text-secondary leading-relaxed max-w-sm">
            Crafting resilient microservices, high-performance web applications, and modern cloud solutions with Java, Node.js, and modern frontend frameworks.
          </p>

          <!-- Quick Interactive Copy Button -->
          <div class="pt-1 flex items-center gap-2">
            <button 
              @click="copyEmail"
              class="px-3.5 py-1.5 rounded-xl bg-bg-page/80 border border-purple-500/25 hover:border-pink-400/50 text-xs font-mono text-pink-300 hover:text-pink-200 transition-all flex items-center gap-2 cursor-pointer group/copy"
            >
              <svg v-if="!copied" class="w-3.5 h-3.5 text-pink-400 group-hover/copy:scale-110 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v9.25c0 .621-.504 1.125-1.125 1.125z" />
              </svg>
              <svg v-else class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{{ copied ? 'Email Copied!' : 'bmn7892@gmail.com' }}</span>
            </button>
          </div>
        </div>

        <!-- Col 2: Navigation (3 cols) -->
        <div class="md:col-span-3 flex flex-col gap-3">
          <h4 class="text-xs font-black uppercase tracking-widest text-sky-400 font-display flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            Navigation
          </h4>
          <ul class="flex flex-col gap-2.5 text-xs text-text-secondary">
            <li>
              <RouterLink to="/" class="hover:text-sky-300 transition-colors inline-flex items-center gap-2 group/nav">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-500/30 group-hover/nav:bg-sky-400 group-hover/nav:scale-125 transition-all"></span>
                <span>Home</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="hover:text-purple-300 transition-colors inline-flex items-center gap-2 group/nav">
                <span class="w-1.5 h-1.5 rounded-full bg-purple-500/30 group-hover/nav:bg-purple-400 group-hover/nav:scale-125 transition-all"></span>
                <span>About</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/work" class="hover:text-emerald-300 transition-colors inline-flex items-center gap-2 group/nav">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500/30 group-hover/nav:bg-emerald-400 group-hover/nav:scale-125 transition-all"></span>
                <span>Work & Projects</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/blogs" class="hover:text-amber-300 transition-colors inline-flex items-center gap-2 group/nav">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500/30 group-hover/nav:bg-amber-400 group-hover/nav:scale-125 transition-all"></span>
                <span>Blogs</span>
              </RouterLink>
            </li>
            <li>
              <a href="/resume.html" target="_blank" class="hover:text-pink-300 transition-colors inline-flex items-center gap-2 group/nav">
                <span class="w-1.5 h-1.5 rounded-full bg-pink-500/30 group-hover/nav:bg-pink-400 group-hover/nav:scale-125 transition-all"></span>
                <span>Resume (PDF)</span>
                <svg class="w-3 h-3 text-pink-400 opacity-60 group-hover/nav:opacity-100 group-hover/nav:translate-x-0.5 transition-all" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3: Social & Connect Hub (4 cols) -->
        <div class="md:col-span-4 flex flex-col gap-3">
          <h4 class="text-xs font-black uppercase tracking-widest text-purple-400 font-display flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            Socials & Contact
          </h4>
          
          <div class="grid grid-cols-2 gap-2 text-xs">
            <!-- Github -->
            <a 
              href="https://github.com/bmn789" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="p-2.5 rounded-xl bg-bg-page/60 border border-purple-500/20 hover:border-sky-400/50 hover:bg-sky-500/10 text-text-secondary hover:text-sky-300 transition-all duration-200 flex items-center gap-2 group/social"
            >
              <svg class="w-4 h-4 text-sky-400 group-hover/social:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span class="font-medium">GitHub</span>
            </a>

            <!-- LinkedIn -->
            <a 
              href="https://linkedin.com/in/bmn789" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="p-2.5 rounded-xl bg-bg-page/60 border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-500/10 text-text-secondary hover:text-purple-300 transition-all duration-200 flex items-center gap-2 group/social"
            >
              <svg class="w-4 h-4 text-purple-400 group-hover/social:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span class="font-medium">LinkedIn</span>
            </a>

            <!-- Email -->
            <a 
              href="mailto:bmn7892@gmail.com" 
              class="p-2.5 rounded-xl bg-bg-page/60 border border-purple-500/20 hover:border-pink-400/50 hover:bg-pink-500/10 text-text-secondary hover:text-pink-300 transition-all duration-200 flex items-center gap-2 group/social"
            >
              <svg class="w-4 h-4 text-pink-400 group-hover/social:scale-110 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span class="font-medium truncate">Email</span>
            </a>

            <!-- Phone -->
            <a 
              href="tel:+917892475321" 
              class="p-2.5 rounded-xl bg-bg-page/60 border border-purple-500/20 hover:border-emerald-400/50 hover:bg-emerald-500/10 text-text-secondary hover:text-emerald-300 transition-all duration-200 flex items-center gap-2 group/social"
            >
              <svg class="w-4 h-4 text-emerald-400 group-hover/social:scale-110 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.94l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span class="font-medium">Call</span>
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Bar: Dynamic Breadcrumbs & Copyright -->
      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted relative z-10">
        <!-- Interactive Breadcrumb -->
        <div class="flex items-center gap-1.5 font-mono text-[11px] tracking-tight bg-bg-page/40 px-3 py-1.5 rounded-full border border-purple-500/15">
          <span class="text-sky-400 font-bold">Bharath</span>
          <span class="text-purple-400/60">:~</span>
          <template v-for="(crumb, index) in breadcrumbs" :key="crumb.label">
            <span v-if="index > 0" class="text-purple-500/40">/</span>
            <RouterLink 
              v-if="index < breadcrumbs.length - 1" 
              :to="crumb.to"
              class="hover:text-sky-300 transition-colors duration-150 capitalize"
            >
              {{ crumb.label }}
            </RouterLink>
            <span v-else class="text-sky-300 font-bold capitalize">{{ crumb.label }}</span>
          </template>
        </div>

        <!-- Copyright & Built With -->
        <div class="flex items-center gap-2 text-[11px] font-mono text-text-muted/70">
          <span>© 2026 Bharath M N</span>
          <span>•</span>
          <span class="text-purple-300/80">Built with Vue 3 & Tailwind</span>
        </div>
      </div>

        <!-- Background Ambient Typography Watermark (Visible on mobile & desktop) -->
      <div class="select-none pointer-events-none opacity-20 sm:opacity-25 group-hover/footer:opacity-35 transition-all duration-700 whitespace-nowrap z-0">
        <span class="font-display font-black text-[54px] min-[400px]:text-[68px] sm:text-[120px] lg:text-[160px] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 uppercase drop-shadow-[0_0_35px_rgba(168,85,247,0.4)] animate-gradient-text">
          BHARATH M N
        </span>
      </div>

    </footer>
  </div>
</template>



