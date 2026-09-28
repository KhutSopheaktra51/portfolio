<template>
  <figure
    class="bg-card border-3 border-ink shadow-brutal p-3 pb-6 inline-block"
    :style="{ transform: `rotate(${rotate}deg)` }"
  >
    <div
      class="w-36 h-36 sm:w-44 sm:h-44 border-2 border-ink overflow-hidden bg-secondary flex items-center justify-center"
    >
      <img
        v-if="!failed"
        :src="resolvedSrc"
        :alt="alt"
        class="w-full h-full object-cover"
        loading="lazy"
        @error="failed = true"
      />
      <ImageOff v-else class="w-8 h-8 text-ink/40" aria-hidden="true" />
    </div>
    <figcaption v-if="caption" class="text-center font-bold text-sm mt-3">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ImageOff } from 'lucide-vue-next'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  caption: { type: String, default: '' },
  rotate: { type: Number, default: -2 },
})

const failed = ref(false)

// Resolve the path correctly for both local dev and GitHub Pages deployment
const resolvedSrc = computed(() => {
  if (props.src.startsWith('/')) {
    return import.meta.env.BASE_URL + props.src.slice(1)
  }
  return props.src
})
</script>