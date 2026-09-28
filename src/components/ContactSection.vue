<template>
  <section id="contact" aria-labelledby="contact-heading" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b-4 border-ink">
    <span class="section-tag">05 / CONTACT</span>
    <h2 id="contact-heading" class="section-title mb-4">HAVE A PROJECT IN MIND?</h2>
    <p class="text-ink/70 max-w-2xl mb-12 text-lg">
      I'm open to internship opportunities, collaborations, and interesting projects. Reach out
      through any channel below or send me a message directly.
    </p>

    <div class="grid lg:grid-cols-12 gap-8">
      <div class="lg:col-span-5 flex flex-col gap-4">
        <a
          v-for="c in contacts"
          :key="c.label"
          :href="c.href"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-4 bg-card border-3 border-ink shadow-brutal p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg transition-all"
        >
          <div class="bg-ink text-background p-2 border-2 border-ink">
            <component :is="c.icon" class="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <p class="text-xs font-bold text-ink/50 uppercase">{{ c.label }}</p>
            <p class="font-bold">{{ c.value }}</p>
          </div>
        </a>
      </div>

      <form
        class="lg:col-span-7 bg-secondary border-4 border-ink shadow-brutal p-6 sm:p-8 space-y-5"
        novalidate
        @submit.prevent="handleSubmit"
      >
        <div>
          <label for="name" class="block font-bold mb-1">Name</label>
          <input
            id="name"
            v-model.trim="form.name"
            type="text"
            class="w-full border-3 border-ink px-4 py-3 bg-card focus:outline-none focus:ring-4 focus:ring-accent"
          />
          <p v-if="errors.name" class="text-sm font-bold text-red-600 mt-1">{{ errors.name }}</p>
        </div>

        <div>
          <label for="email" class="block font-bold mb-1">Email</label>
          <input
            id="email"
            v-model.trim="form.email"
            type="email"
            class="w-full border-3 border-ink px-4 py-3 bg-card focus:outline-none focus:ring-4 focus:ring-accent"
          />
          <p v-if="errors.email" class="text-sm font-bold text-red-600 mt-1">{{ errors.email }}</p>
        </div>

        <div>
          <label for="subject" class="block font-bold mb-1">Subject</label>
          <input
            id="subject"
            v-model.trim="form.subject"
            type="text"
            class="w-full border-3 border-ink px-4 py-3 bg-card focus:outline-none focus:ring-4 focus:ring-accent"
          />
          <p v-if="errors.subject" class="text-sm font-bold text-red-600 mt-1">{{ errors.subject }}</p>
        </div>

        <div>
          <label for="message" class="block font-bold mb-1">Message</label>
          <textarea
            id="message"
            v-model.trim="form.message"
            rows="4"
            class="w-full border-3 border-ink px-4 py-3 bg-card focus:outline-none focus:ring-4 focus:ring-accent"
          ></textarea>
          <p v-if="errors.message" class="text-sm font-bold text-red-600 mt-1">{{ errors.message }}</p>
        </div>

        <button
          type="submit"
          class="inline-flex items-center gap-2 bg-ink text-background px-6 py-3 font-bold border-3 border-ink shadow-brutal hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg transition-all"
        >
          Send Message <Send class="w-4 h-4" />
        </button>

        <p class="text-xs text-ink/60">
          * This form opens your default email client with a pre-filled message — no backend is
          connected. To collect messages directly, connect a service like Formspree, EmailJS, or
          your own API endpoint.
        </p>

        <p v-if="submitted" class="font-bold text-green-700">
          Your email client should now be open. Thanks for reaching out!
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Mail, Github, Linkedin, Send, SendHorizontal } from 'lucide-vue-next'

// TODO: replace with your real contact info (keep in sync with FooterSection.vue)
const CONTACT_EMAIL = 'sopheaktrakhut99@gmail.com'
const GITHUB_URL = 'https://github.com/KhutSopheaktra51'
// const LINKEDIN_URL = 'https://linkedin.com/in/your-profile'
const TELEGRAM_URL = 'https://t.me/sopheaktra36'

const contacts = [
  { label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, icon: Mail },
  { label: 'GitHub', value: '@KhutSopheaktra51', href: GITHUB_URL, icon: Github },
  // { label: 'LinkedIn', value: 'your-profile', href: LINKEDIN_URL, icon: Linkedin },
  { label: 'Telegram', value: '@sopheaktra36', href: TELEGRAM_URL, icon: SendHorizontal },
]

const form = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)

function validate() {
  let valid = true
  Object.keys(errors).forEach((k) => (errors[k] = ''))

  if (!form.name) {
    errors.name = 'Please enter your name.'
    valid = false
  }
  if (!form.email) {
    errors.email = 'Please enter your email.'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
    valid = false
  }
  if (!form.subject) {
    errors.subject = 'Please enter a subject.'
    valid = false
  }
  if (!form.message) {
    errors.message = 'Please write a message.'
    valid = false
  }

  return valid
}

function handleSubmit() {
  submitted.value = false
  if (!validate()) return

  const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    form.subject
  )}&body=${encodeURIComponent(body)}`

  window.location.href = mailto
  submitted.value = true
}
</script>