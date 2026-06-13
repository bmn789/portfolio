<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const subscribed = ref(false);
const error = ref('');

const handleSubscribe = (e: Event) => {
  e.preventDefault();
  if (!email.value) {
    error.value = 'Please enter your email address.';
    return;
  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    error.value = 'Please enter a valid email address.';
    return;
  }
  
  error.value = '';
  subscribed.value = true;
  email.value = '';
};
</script>

<template>
  <div class="flex flex-col gap-12 w-full mt-6 max-w-xl mx-auto relative z-10">
    <!-- Header Title -->
    <section class="flex flex-col gap-4 text-center items-center py-6">
      <div class="px-2.5 py-0.5 bg-brand-weak border border-brand-strong/20 text-brand-text text-[10px] uppercase font-bold tracking-wider rounded-full w-fit">
        Writing & Notes
      </div>
      <h1 class="text-3xl md:text-4xl font-extrabold font-display leading-tight text-text-primary bg-gradient-to-b from-text-primary via-text-primary to-text-secondary bg-clip-text text-transparent">
        Coming soon
      </h1>
      <p class="text-sm text-text-secondary leading-relaxed max-w-sm px-2">
        Bharath's writing, logs, and development notes covering frontend engineering, system design, and AI agents.
      </p>
    </section>

    <!-- Newsletter Card -->
    <section class="mb-8">
      <div class="bg-bg-card border border-border-weak rounded-2xl p-8 flex flex-col gap-6 shadow-xs">
        <div class="flex flex-col gap-1.5 text-center items-center">
          <h2 class="text-base sm:text-lg font-bold font-display text-text-primary">
            Subscribe to Bharath's Newsletter
          </h2>
          <p class="text-xs text-text-secondary">
            A newsletter exploring frontend craftsmanship, creative engineering, and AI developments.
          </p>
        </div>

        <transition name="fade" mode="out-in">
          <!-- Subscription Form -->
          <form v-if="!subscribed" @submit="handleSubscribe" class="flex flex-col gap-3">
            <div class="flex flex-col sm:flex-row gap-2.5 w-full">
              <input 
                type="email" 
                v-model="email"
                placeholder="you@example.com" 
                class="flex-1 px-4 py-2.5 rounded-full bg-bg-page/50 border border-border-strong text-text-primary placeholder-text-muted text-xs focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all duration-200"
                required
              />
              <button 
                type="submit" 
                class="px-5 py-2.5 bg-brand hover:opacity-95 text-bg-page font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-200 shadow-sm shrink-0 cursor-pointer text-center"
              >
                Subscribe
              </button>
            </div>
            
            <!-- Error message -->
            <transition name="fade">
              <span v-if="error" class="text-xs text-accent-text font-bold text-center">
                {{ error }}
              </span>
            </transition>
          </form>

          <!-- Success Alert -->
          <div v-else class="flex flex-col items-center text-center gap-3 p-5 bg-brand-weak border border-brand-strong/20 rounded-xl">
            <div class="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="flex flex-col gap-0.5">
              <h4 class="text-sm font-bold text-text-primary font-display">Subscription Confirmed!</h4>
              <p class="text-xs text-text-secondary leading-relaxed">Thanks for subscribing. I'll notify you as soon as the first articles go live.</p>
            </div>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>
