<template>
  <article
    :class="project.color"
    class="border-4 border-ink shadow-brutal p-6 flex flex-col h-full hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg transition-all"
  >
    <div class="h-40 border-3 border-ink bg-ink/5 flex items-center justify-center mb-5 overflow-hidden">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="`Screenshot of ${project.title}`"
        class="w-full h-full object-cover"
      />
      <FolderGit2 v-else class="w-14 h-14 text-ink/40" aria-hidden="true" />
    </div>

    <h3 class="font-display text-xl mb-2">{{ project.title }}</h3>
    <p class="text-ink/80 mb-4 flex-1">{{ project.description }}</p>

    <div class="flex flex-wrap gap-2 mb-5">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="bg-ink text-background text-xs font-bold px-2 py-1"
      >
        {{ tag }}
      </span>
    </div>

    <div class="flex flex-wrap gap-3">
      <a
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 bg-card border-2 border-ink px-3 py-2 text-sm font-bold shadow-brutal-sm hover:shadow-brutal transition-all"
      >
        <Github class="w-4 h-4" /> Code
      </a>
      <a
        v-if="project.demo"
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 bg-ink text-background border-2 border-ink px-3 py-2 text-sm font-bold shadow-brutal-sm hover:shadow-brutal transition-all"
      >
        <ExternalLink class="w-4 h-4" /> Live Demo
      </a>
      <span
        v-else
        class="inline-flex items-center gap-2 border-2 border-dashed border-ink/40 text-ink/40 px-3 py-2 text-sm font-bold"
      >
        Demo Coming Soon
      </span>
    </div>
  </article>
</template>

<script setup>
import { Github, ExternalLink, FolderGit2 } from 'lucide-vue-next'

defineProps({
  project: { type: Object, required: true },
})
</script>