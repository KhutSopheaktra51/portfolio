<template>
  <section id="projects" aria-labelledby="projects-heading" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b-4 border-ink">
    <span class="section-tag">03 / PROJECTS</span>
    <h2 id="projects-heading" class="section-title mb-4">THINGS I'VE BUILT.</h2>
    <p class="text-ink/70 max-w-2xl mb-12 text-lg">
      A selection of projects from coursework and self-directed learning. Repository and demo
      links will be added as projects are published.
    </p>

    <div class="grid md:grid-cols-2 gap-8">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects.js'
</script>