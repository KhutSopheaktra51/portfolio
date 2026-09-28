<template>
  <section id="skills" aria-labelledby="skills-heading" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b-4 border-ink">
    <span class="section-tag">02 / SKILLS</span>
    <h2 id="skills-heading" class="section-title mb-12">TOOLS I USE.</h2>

    <div class="grid md:grid-cols-2 gap-8">
      <div
        v-for="cat in skillCategories"
        :key="cat.id"
        :class="cat.color"
        class="border-4 border-ink shadow-brutal p-6"
      >
        <div class="flex items-center gap-3 mb-5">
          <div class="bg-ink text-background p-2 border-2 border-ink">
            <component :is="icons[cat.icon]" class="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 class="font-display text-xl">{{ cat.title }}</h3>
        </div>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="skill in cat.skills"
            :key="skill"
            class="bg-card border-3 border-ink px-4 py-2 font-bold text-sm shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all cursor-default"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Layout, Server, Database, Wrench } from 'lucide-vue-next'
import { skillCategories } from '../data/skills.js'

const icons = { Layout, Server, Database, Wrench }
</script>