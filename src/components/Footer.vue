<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import ContactCard from './ContactCard.vue';

const route = useRoute();

const breadcrumbs = computed(() => {
  const path = route.path;
  if (!path || path === '/') {
    return [
      { label: 'Home', to: '/' }
    ];
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
  <div class="mt-16">
    <ContactCard />
    <footer class="mt-12 pt-8 border-t border-purple-500/20 flex flex-col gap-6 pb-8 relative z-10 w-full">

      <!-- Bottom Links Row -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
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
        <div class="flex items-center gap-5 font-semibold">
          <a href="https://github.com/bmn789" target="_blank" rel="noopener noreferrer"
            class="hover:text-sky-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/bmn789" target="_blank" rel="noopener noreferrer"
            class="hover:text-purple-400 transition-colors">LinkedIn</a>
          <a href="mailto:bmn7892@gmail.com" class="hover:text-pink-400 transition-colors">Email</a>
        </div>
      </div>

      <!-- Copyright and Contact Info -->
      <div class="text-[11px] font-mono text-text-muted/60 mt-1 flex justify-center sm:justify-start">
        <span>© 2026 / <span class="text-sky-400">Bharath M N</span> / <a href="mailto:bmn7892@gmail.com"
            class="hover:text-purple-400 transition-colors">bmn7892@gmail.com</a></span>
      </div>
    </footer>
  </div>
</template>

