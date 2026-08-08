<template>
  <!-- Stands in for ui/videoPlayer.vue until the footage is delivered. Matches its
       container width and height exactly, so swapping it in causes no layout shift. -->
  <div class="w-[95.8%] mx-auto" data-placeholder="video">
    <div
      class="w-full h-[90vh] max-h-[48.5rem] rounded-[0.5rem] overflow-hidden border border-dashed grid place-items-center px-6"
      :class="onLight ? 'bg-[#DCEEE8] border-[#8FB3A6]' : 'bg-[#16281F] border-[#436256]'"
    >
      <div class="text-center">
        <p
          class="font-cabin font-[500] text-[1.5rem] midDesk:text-[1.2rem] leading-[1.8rem]"
          :class="onLight ? 'text-[#0E1C16]' : 'text-[#E9EBF8]'"
        >
          {{ label }}
        </p>
        <p
          class="font-merri text-[1rem] mt-2 midDesk:text-[0.875rem]"
          :class="onLight ? 'text-[#4E695D]' : 'text-[#436256]'"
        >
          {{ note }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, default: 'Video' },
  note: { type: String, default: 'Coming soon' },
  tone: { type: String, default: 'on-dark' } // 'on-dark' | 'on-light'
})

const onLight = computed(() => props.tone === 'on-light')
</script>

<style scoped></style>
