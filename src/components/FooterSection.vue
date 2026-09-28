<template>
  <footer class="bg-ink text-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="text-center sm:text-left">
        <p class="font-display text-xl">SOPHEAKTRA<span class="text-primary">.</span></p>
        <p class="text-sm text-background/60 mt-1">Designed & built with Vue.js</p>
      </div>

      <div class="flex items-center gap-4">
        <a
          v-for="s in socials"
          :key="s.label"
          :href="s.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="s.label"
          class="p-2 border-2 border-background/30 hover:border-primary hover:text-primary transition-colors"
        >
          <component :is="s.icon" class="w-5 h-5" />
        </a>
      </div>

      <p class="text-sm text-background/60">&copy; {{ year }} Sopheaktra. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { Github, Linkedin, Mail, SendHorizontal } from 'lucide-vue-next'

const year = new Date().getFullYear()

// TODO: keep in sync with ContactSection.vue
const socials = [
  { label: 'Email', href: 'mailto:sopheaktrakhut99@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/KhutSopheaktra51', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', icon: Linkedin },
  { label: 'Telegram', href: 'https://t.me/sopheaktra36', icon: SendHorizontal },
]
</script>