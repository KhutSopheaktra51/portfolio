<template>
  <section id="journey" aria-labelledby="journey-heading" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b-4 border-ink">
    <span class="section-tag">04 / JOURNEY</span>
    <h2 id="journey-heading" class="section-title mb-12">MY JOURNEY.</h2>

    <ol class="relative border-l-4 border-ink ml-3 sm:ml-6 space-y-12">
      <li v-for="(item, i) in timeline" :key="i" class="relative pl-8 sm:pl-10">
        <span
          class="absolute -left-[15px] sm:-left-[19px] top-1 w-7 h-7 border-3 border-ink flex items-center justify-center"
          :class="markerColor(item.type)"
        >
          <component :is="icons[item.type]" class="w-4 h-4" aria-hidden="true" />
        </span>
        <div class="bg-card border-3 border-ink shadow-brutal p-5 sm:p-6">
          <span class="inline-block bg-ink text-background text-xs font-bold px-2 py-1 mb-2">
            {{ item.year }}
          </span>
          <h3 class="font-display text-lg sm:text-xl mb-1">{{ item.title }}</h3>
          <p class="text-sm font-bold text-ink/60 mb-2">{{ item.place }}</p>
          <p class="text-ink/80">{{ item.description }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup>
import { GraduationCap, BookOpen, Code2, Briefcase } from 'lucide-vue-next'
import { timeline } from '../data/experience.js'

const icons = { education: GraduationCap, learning: BookOpen, project: Code2, work: Briefcase }
const colors = { education: 'bg-secondary', learning: 'bg-primary', project: 'bg-accent', work: 'bg-card' }

function markerColor(type) {
  return colors[type] || 'bg-card'
}
</script>