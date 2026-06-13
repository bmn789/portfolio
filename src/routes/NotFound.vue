<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const copied = ref(false);
const terminalCommand = ref('');
const targetCommand = `npx resolve-route --path "${route.path}"`;

// Simulating a typing effect in the console
onMounted(() => {
  let index = 0;
  const timer = setInterval(() => {
    if (index < targetCommand.length) {
      terminalCommand.value += targetCommand.charAt(index);
      index++;
    } else {
      clearInterval(timer);
    }
  }, 40);
});

async function copyErrorLog() {
  const logContent = {
    status: 404,
    error: 'ROUTE_NOT_FOUND',
    timestamp: new Date().toISOString(),
    requestedPath: route.path,
    client: 'portfolio-router',
    suggestion: 'Navigate back to "/" or check route configuration.'
  };

  try {
    await navigator.clipboard.writeText(JSON.stringify(logContent, null, 2));
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}
</script>

<template>
  <div class="relative min-h-[75vh] flex flex-col justify-center items-center py-12 px-4 overflow-hidden w-full">
    <!-- Ambient backgrounds -->
    <div class="bg-dot-grid absolute inset-0 w-full h-full pointer-events-none z-0"></div>
    <div class="glow-blob w-72 h-72 bg-brand/10 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"></div>
    <div class="glow-blob w-72 h-72 bg-accent/10 bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2"></div>

    <div class="relative z-10 flex flex-col items-center max-w-2xl w-full text-center gap-8">
      
      <!-- Big animated 404 Number -->
      <div class="relative group cursor-default">
        <h1 class="text-8xl sm:text-9xl font-extrabold font-display leading-none bg-gradient-to-r from-brand via-accent to-brand bg-[length:200%_auto] animate-[lightning-sweep_6s_linear_infinite] bg-clip-text text-transparent select-none drop-shadow-sm">
          404
        </h1>
        <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-brand to-accent opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>
      </div>

      <!-- Heading & Explainer -->
      <div class="flex flex-col gap-3">
        <h2 class="text-2xl sm:text-3xl font-extrabold font-display text-text-primary tracking-tight">
          Route Not Found
        </h2>
        <p class="text-sm sm:text-base text-text-secondary leading-relaxed max-w-lg mx-auto">
          The requested resource at <code class="px-1.5 py-0.5 rounded bg-brand-weak border border-brand-strong/20 text-brand-text font-mono text-xs font-semibold">{{ route.path }}</code> was not found in this portpolio.
        </p>
      </div>

      <!-- Interactive IDE / Console Container -->
      <div class="w-full bg-bg-card/75 border border-border-weak rounded-2xl overflow-hidden shadow-lg backdrop-blur-md text-left flex flex-col hover:border-brand-strong/45 transition-colors duration-300">
        <!-- Terminal Header -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-border-weak/50 bg-bg-navbar/30">
          <div class="flex items-center gap-1.5">
            <span class="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
            <span class="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
            <span class="w-3 h-3 rounded-full bg-[#27c93f]"></span>
            <span class="text-xs text-text-muted font-mono ml-2 font-medium">debug-console.sh</span>
          </div>
          <button 
            @click="copyErrorLog"
            class="text-[11px] font-semibold font-sans px-2.5 py-1 rounded-md bg-neutral-weak border border-neutral-strong/10 text-text-secondary hover:text-brand hover:border-brand-strong/40 hover:bg-brand-weak transition-all duration-200 cursor-pointer flex items-center gap-1 shrink-0"
          >
            <svg v-if="!copied" class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
            </svg>
            <svg v-else class="w-3 h-3 text-brand" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {{ copied ? 'Copied JSON!' : 'Copy Log' }}
          </button>
        </div>

        <!-- Terminal Body -->
        <div class="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto select-text flex flex-col gap-3">
          <!-- Live Input Command -->
          <div class="flex items-center gap-1.5 text-brand-text">
            <span class="text-text-muted select-none">$</span>
            <span>{{ terminalCommand }}</span>
            <span class="w-2 h-4 bg-brand animate-pulse select-none" v-if="terminalCommand.length < targetCommand.length"></span>
          </div>

          <!-- Console JSON Output -->
          <div class="text-text-secondary mt-1 flex flex-col gap-1">
            <p class="text-accent-text font-semibold select-none">✖ ERR_ROUTE_NOT_FOUND (status 404)</p>
            <pre class="text-text-muted mt-1 leading-normal">
<span class="text-accent">{</span>
  <span class="text-brand">"status"</span>: <span class="text-accent">404</span>,
  <span class="text-brand">"error"</span>: <span class="text-accent">"ROUTE_NOT_FOUND"</span>,
  <span class="text-brand">"requestedPath"</span>: <span class="text-brand-text">"{{ route.path }}"</span>,
  <span class="text-brand">"timestamp"</span>: <span class="text-brand-text">"{{ new Date().toISOString().slice(0, 19) }}Z"</span>,
  <span class="text-brand">"suggestion"</span>: <span class="text-text-secondary">"Redirecting user to safe zone..."</span>
<span class="text-accent">}</span></pre>
          </div>
        </div>
      </div>

      <!-- Action Navigation Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-2">
        <!-- Home Button -->
        <RouterLink 
          to="/"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand text-bg-page hover:bg-brand/90 font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-brand-strong/30 hover:-translate-y-0.5"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Nav Home
        </RouterLink>

        <!-- Quick Links -->
        <div class="flex items-center gap-3 w-full sm:w-auto justify-center">
          <RouterLink 
            to="/work"
            class="px-5 py-3 bg-bg-card hover:bg-bg-card/90 border border-border-weak hover:border-brand-strong/40 text-text-primary hover:text-brand font-bold rounded-full transition-all duration-200 text-xs sm:text-sm shadow-xs flex-1 sm:flex-initial text-center"
          >
            Projects
          </RouterLink>

          <RouterLink 
            to="/blogs"
            class="px-5 py-3 bg-bg-card hover:bg-bg-card/90 border border-border-weak hover:border-brand-strong/40 text-text-primary hover:text-brand font-bold rounded-full transition-all duration-200 text-xs sm:text-sm shadow-xs flex-1 sm:flex-initial text-center"
          >
            Blogs
          </RouterLink>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Scoped overrides to support seamless transition styling if needed */
</style>
