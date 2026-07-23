<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const isDark = ref(true); // Default theme is dark

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    isDark.value = false;
    document.documentElement.classList.remove('dark');
  } else {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  }
});
</script>

<template>
  <!-- Floating Header Capsule -->
  <header class="fixed top-3 sm:top-4 inset-x-0 z-[100] flex justify-center px-4 pointer-events-none">
    <!-- Outer Glow Border Wrapper -->
    <div class="p-[1px] bg-gradient-to-r from-sky-500/40 via-purple-500/40 to-pink-500/40 rounded-full shadow-lg shadow-sky-500/10 pointer-events-auto">
      <div
        class="bg-bg-navbar/90 backdrop-blur-xl rounded-full px-3 py-1.5 flex items-center justify-between gap-1 w-full max-w-max border border-white/10">
        <div class="flex items-center gap-1">
          <!-- Home Link -->
          <RouterLink to="/" class="nav-link text-sky-400 hover:text-sky-300 hover:bg-sky-500/10" active-class="active-link" aria-label="Home">
            <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </RouterLink>

          <div class="w-[1px] h-4 bg-gradient-to-b from-transparent via-sky-500/30 to-transparent mx-1"></div>

          <!-- About Link -->
          <RouterLink to="/about" class="nav-link-text hover:text-purple-400" active-class="active-link">
            <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <span class="hidden sm:inline">About</span>
          </RouterLink>

          <!-- Work Link -->
          <RouterLink to="/work" class="nav-link-text hover:text-emerald-400" active-class="active-link">
            <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25V6z" />
            </svg>
            <span class="hidden sm:inline">Work</span>
          </RouterLink>

          <!-- Blogs Link -->
          <RouterLink to="/blogs" class="nav-link-text hover:text-amber-400" active-class="active-link">
            <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <span class="hidden sm:inline">Blogs</span>
          </RouterLink>

          <!-- Resume Link -->
          <a href="/resume.html" target="_blank" class="nav-link-text hover:text-pink-400">
            <svg class="w-3.5 h-3.5 text-pink-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <span class="hidden sm:inline">Resume</span>
          </a>
        </div>

        <div class="w-[1px] h-4 bg-gradient-to-b from-transparent via-pink-500/30 to-transparent mx-1"></div>

        <!-- Theme Toggle -->
        <button @click="toggleTheme"
          class="p-2 rounded-full hover:bg-amber-500/20 text-amber-400 transition-all duration-300 cursor-pointer hover:rotate-12"
          aria-label="Toggle Theme">
          <!-- Sun Icon -->
          <svg v-if="isDark" class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 3v2.25m0 13.5V21M4.305 4.305l1.59 1.59m12.21 12.21l1.59 1.59M3 12h2.25m13.5 0H21M4.305 19.695l1.59-1.59m12.21-12.21l1.59-1.59M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
          </svg>
          <!-- Moon Icon -->
          <svg v-else class="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

