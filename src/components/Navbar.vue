<template>
  <header class="sticky top-0 z-50 bg-background border-b-4 border-ink">
    <nav
      class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20"
      aria-label="Main navigation"
    >
      <a href="#home" class="font-display text-xl sm:text-2xl tracking-tight">
        KHUT SOPHEAKTRA<span class="text-accent">.</span>
      </a>

      <ul class="hidden md:flex items-center gap-8 font-semibold">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="relative pb-1 hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[3px] after:w-0 after:bg-accent after:transition-all hover:after:w-full"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>

      <a
        href="#contact"
        class="hidden md:inline-flex items-center gap-2 bg-primary border-3 border-ink px-5 py-2 font-bold shadow-brutal hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg transition-all"
      >
        Let's Talk <ArrowUpRight class="w-4 h-4" />
      </a>

      <button
        class="md:hidden border-3 border-ink p-2 bg-card"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation menu"
      >
        <component :is="isOpen ? X : Menu" class="w-6 h-6" />
      </button>
    </nav>

    <transition name="slide">
      <div
        v-if="isOpen"
        class="md:hidden border-t-4 border-ink bg-background px-4 py-6 flex flex-col gap-4"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="font-bold text-lg"
          @click="isOpen = false"
        >
          {{ link.name }}
        </a>
        <a
          href="#contact"
          class="inline-flex items-center justify-center gap-2 bg-primary border-3 border-ink px-5 py-3 font-bold shadow-brutal"
          @click="isOpen = false"
        >
          Let's Talk
        </a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X, ArrowUpRight } from 'lucide-vue-next'

const isOpen = ref(false)

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>