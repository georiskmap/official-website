<template>
  <section class="w-full py-[4.3rem] midDesk:pt-0 mob:pb-0">
    <animatedText :text="text" />

    <!-- Placeholder: press cuttings not yet collected. Slots carry the same offsets as the
         Children & Disaster collage, so real clippings drop straight in. -->
    <div
      class="h-[calc(100vh+4rem)] w-[95.8%] mx-auto relative image-layout mob:h-[70vh] mt-4 window:!w-[80%]"
      data-placeholder="press-scatter"
    >
      <div
        v-for="slot in PressScatterSlots"
        :key="slot.id"
        class="scatter-item absolute h-[16.8rem] w-[12rem] mob:h-[9rem] mob:w-[6.5rem] transitionAll"
        :style="{
          top: slot.top,
          left: slot.left || 'auto',
          right: slot.right || 'auto',
          zIndex: slot.zIndex
        }"
      >
        <div
          class="h-full w-full rounded-[2px] bg-[#16281F] border border-dashed border-[#436256] grid place-items-center p-2"
        >
          <p class="text-[#436256] font-merri text-[0.75rem] text-center leading-[1rem]">
            Press coverage
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import animatedText from '../ui/animatedText.vue'
import { PressScatterSlots } from '@/utils/KatchaData'

const text = `In Katcha Ward, on the floodplain of the River Niger, flooding has stopped being an event and become a season of its own. The 2024 rains put more than 118,000 hectares of Niger State farmland under water and affected over 41,000 people, and a single release from the Jebba Dam in April 2025 swept through more than thirty communities, reached over 5,000 farmers, and took at least ten lives. Rice covers roughly 65 percent of this ward, so when the water comes it takes the harvest, the income, and the seed a household needs in order to plant again.`
</script>

<style scoped>
.image-layout {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.scatter-item {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* The scatter offsets are absolute rem values up to 38rem (608px) from the left edge, so
   on a phone most slots land outside the container and are clipped by overflow:hidden.
   Below 700px the layout drops out of absolute positioning and becomes a plain grid, which
   makes the inline top/left/right styles inert. !important is needed because the utility
   classes and this scoped block have equal specificity and their emitted order is not
   guaranteed. */
@media (max-width: 700px) {
  .image-layout {
    height: auto !important;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    overflow: visible;
  }

  .scatter-item {
    position: static !important;
    width: 100% !important;
    height: 7rem !important;
  }
}
</style>
