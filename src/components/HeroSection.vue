<template>
  <section id="home" class="relative overflow-hidden border-b-4 border-ink">
    <!-- Decorative geometric shapes -->
    <div
      class="absolute -top-10 -right-10 w-40 h-40 sm:w-64 sm:h-64 bg-secondary border-4 border-ink rounded-full hidden sm:block"
      aria-hidden="true"
    ></div>
    <div
      class="absolute bottom-10 right-1/4 w-16 h-16 bg-accent border-4 border-ink rotate-12 hidden md:block"
      aria-hidden="true"
    ></div>
    <div
      class="absolute top-1/3 left-4 w-10 h-10 bg-primary border-4 border-ink -rotate-12 hidden lg:block"
      aria-hidden="true"
    ></div>

    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-12 gap-10 items-center relative z-10"
    >
      <div class="lg:col-span-8">
        <span
          class="inline-flex items-center gap-2 bg-card border-3 border-ink px-4 py-2 text-sm font-bold shadow-brutal-sm mb-6"
        >
          <span
            class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"
          ></span>
          Available for Opportunities
        </span>

        <h1
          class="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6"
        >
          HI, I'M
          <span
            class="bg-primary px-2 inline-block border-3 border-ink -rotate-1"
            >SOPHEAKTRA.</span
          >
        </h1>

        <h2 class="text-xl sm:text-2xl font-bold mb-4">
          Computer Science Student & Aspiring Software Developer.
        </h2>

        <p class="text-base sm:text-lg max-w-xl mb-8 text-ink/80">
          I build practical digital experiences, explore new technologies, and
          turn ideas into real-world applications.
        </p>

        <div class="flex flex-wrap gap-4">
          <a
            href="#projects"
            class="inline-flex items-center gap-2 bg-ink text-background px-6 py-3 font-bold border-3 border-ink shadow-brutal hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg transition-all"
          >
            Explore My Work <ArrowRight class="w-5 h-5" />
          </a>
          <a
            :href="cvUrl"
            download
            class="inline-flex items-center gap-2 bg-card px-6 py-3 font-bold border-3 border-ink shadow-brutal hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg transition-all"
          >
            Download CV <Download class="w-5 h-5" />
          </a>
        </div>
      </div>

      <div class="lg:col-span-4 flex justify-center">
        <div class="relative">
          <!-- offset background shape -->
          <div
            class="absolute inset-0 translate-x-4 translate-y-4 bg-accent border-4 border-ink"
            aria-hidden="true"
          ></div>

          <!-- photo frame -->
          <div
            class="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 border-4 border-ink shadow-brutal-lg overflow-hidden bg-secondary rotate-2"
          >
            <img
              v-if="!photoFailed"
              :src="profileImage"
              alt="Portrait photo of Sopheaktra"
              class="w-full h-full object-cover"
              @error="photoFailed = true"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <Terminal class="w-24 h-24 sm:w-32 sm:h-32" aria-hidden="true" />
            </div>
          </div>

          <div
            class="absolute -bottom-5 -left-5 bg-primary border-3 border-ink px-3 py-1 font-bold text-sm -rotate-3 shadow-brutal-sm z-10"
          >
            &lt;/&gt; code
          </div>
        </div>
      </div>
    </div>

    <a
      href="#about"
      class="hidden sm:flex flex-col items-center gap-1 mx-auto mb-8 w-fit relative z-10 animate-bounce"
      aria-label="Scroll to About section"
    >
      <span class="text-xs font-bold tracking-widest">SCROLL</span>
      <ChevronDown class="w-5 h-5" />
    </a>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { ArrowRight, Download, ChevronDown, Terminal } from "lucide-vue-next";

// Put your photo at public/images/profile.jpg (a square crop works best)
const profileImage = import.meta.env.BASE_URL + "images/profile.jpg";
const cvUrl = import.meta.env.BASE_URL + 'resume.pdf'
const photoFailed = ref(false);
</script>
