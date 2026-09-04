<script setup lang="ts">
import { experiences } from '../data/experiences'
</script>

<template>
  <section class="flex flex-col gap-6 relative z-10">
    <div class="flex flex-col items-center text-center gap-2">
      <h2 class="text-xs font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text uppercase tracking-widest font-display">Work Experience</h2>
      <div class="w-12 h-[3px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
    </div>

    <div class="flex flex-col gap-6">
      <div v-for="exp in experiences" :key="exp.company" :class="[
        'bg-bg-card/85 backdrop-blur-md border border-border-weak rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 group/card hover:-translate-y-1 hover:shadow-xl',
        exp.border, exp.shadow
      ]">
        <div class="flex items-start justify-between gap-4 flex-wrap">
          <div class="flex items-center gap-3">
            <div :class="[
              'w-10 h-10 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-extrabold text-sm shadow-md transition-all duration-300 group-hover/card:scale-110',
              exp.gradient
            ]">
              {{ exp.index }}
            </div>
            <div class="flex flex-col">
              <h3 class="font-bold font-display text-text-primary text-base sm:text-lg leading-tight group-hover/card:text-sky-400 transition-colors duration-300">
                {{ exp.company }}
              </h3>
              <span class="text-xs text-text-secondary font-semibold">{{ exp.role }}</span>
            </div>
          </div>
          <span
            class="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs rounded-full font-medium">
            {{ exp.period }}
          </span>
        </div>

        <ul class="list-disc pl-5 text-xs sm:text-sm text-text-secondary flex flex-col gap-2">
          <li v-for="(bullet, bidx) in exp.bullets" :key="bidx" class="leading-relaxed">
            {{ bullet }}
          </li>
        </ul>

        <div class="flex flex-wrap gap-2 pt-3 border-t border-border-weak/40">
          <span v-for="tag in exp.tags" :key="tag.text" :class="[
            'px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg border',
            tag.color
          ]">
            {{ tag.text }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
