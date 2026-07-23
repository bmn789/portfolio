<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="bg-bg-page text-text-primary transition-colors duration-300 flex flex-col items-center relative min-h-screen overflow-x-clip">

    <!-- Ambient Colorful Background Glows -->
    <div class="fixed top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-sky-500/20 via-cyan-400/15 to-transparent rounded-full blur-[120px] pointer-events-none z-0"></div>
    <div class="fixed top-1/3 right-10 w-[450px] h-[450px] bg-gradient-to-tl from-purple-600/20 via-fuchsia-500/15 to-transparent rounded-full blur-[130px] pointer-events-none z-0"></div>
    <div class="fixed bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/15 via-pink-500/15 to-transparent rounded-full blur-[140px] pointer-events-none z-0"></div>

    <!-- Dot Grid Pattern Overlay -->
    <div class="fixed inset-0 bg-dot-grid pointer-events-none z-0"></div>

    <!-- Floating Header Capsule -->
    <Header />

    <!-- Main Container -->
    <main class="w-full max-w-5xl px-4 pt-20 sm:pt-24 pb-8 flex-1 flex flex-col justify-start z-10 relative">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

      <!-- Common Footer -->
      <Footer />
    </main>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
