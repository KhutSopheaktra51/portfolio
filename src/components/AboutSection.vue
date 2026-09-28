<template>
  <section id="about" aria-labelledby="about-heading" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b-4 border-ink">
    <span class="section-tag">01 / ABOUT</span>
    <h2 id="about-heading" class="section-title mb-12">A LITTLE ABOUT ME.</h2>

    <div class="grid lg:grid-cols-12 gap-8 mb-14">
      <div class="lg:col-span-7 bg-card border-4 border-ink shadow-brutal p-6 sm:p-10">
        <p class="text-lg sm:text-xl leading-relaxed mb-6">
          I'm a university <strong>Computer Science student</strong> based in
          <strong>Phnom Penh, Cambodia</strong>, passionate about turning ideas into working
          software.
        </p>
        <p class="text-base sm:text-lg text-ink/80 leading-relaxed mb-6">
          I enjoy building real-world applications — whether it's a system to manage attendance,
          rentals, or online stores. I'm a continuous learner who likes solving problems from
          first principles, and I'm especially drawn to <strong>backend development</strong> and
          modern <strong>frontend technologies</strong>.
        </p>
        <p class="text-base sm:text-lg text-ink/80 leading-relaxed">
          Outside of coursework, I like experimenting with new frameworks and tools to sharpen my
          craft and build a strong foundation as a software developer.
        </p>
      </div>

      <div class="lg:col-span-5 flex flex-col gap-6">
        <div class="bg-secondary border-4 border-ink shadow-brutal p-6 flex-1">
          <h3 class="font-display text-xl mb-4">QUICK FACTS</h3>
          <ul class="space-y-3 font-semibold">
            <li class="flex items-center gap-2"><MapPin class="w-5 h-5" aria-hidden="true" /> Phnom Penh, Cambodia</li>
            <li class="flex items-center gap-2"><GraduationCap class="w-5 h-5" aria-hidden="true" /> Computer Science Student</li>
            <li class="flex items-center gap-2"><Code2 class="w-5 h-5" aria-hidden="true" /> Backend & Frontend Development</li>
            <li class="flex items-center gap-2"><Sparkles class="w-5 h-5" aria-hidden="true" /> Always Learning Something New</li>
          </ul>
        </div>

        <div class="bg-primary border-4 border-ink shadow-brutal p-6">
          <h3 class="font-display text-lg mb-3">CURRENTLY LEARNING</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in currentlyLearning"
              :key="item"
              class="bg-card border-2 border-ink px-3 py-1 text-sm font-bold"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Photo strip -->
    <div v-if="gallery.length" class="border-t-4 border-ink pt-10">
      <h3 class="font-display text-lg mb-6 text-ink/70">A FEW SNAPSHOTS</h3>
      <div class="flex flex-wrap gap-8 justify-center sm:justify-start">
        <PolaroidPhoto
          v-for="(photo, i) in gallery"
          :key="i"
          :src="photo.src"
          :alt="photo.alt"
          :caption="photo.caption"
          :rotate="photo.rotate"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin, GraduationCap, Code2, Sparkles } from 'lucide-vue-next'
import PolaroidPhoto from './PolaroidPhoto.vue'
import { gallery } from '../data/gallery.js'

const currentlyLearning = [
  'Spring Boot',
  'Vue 3 Composition API',
  'System Design Basics',
  'Clean Code Practices',
]
</script>