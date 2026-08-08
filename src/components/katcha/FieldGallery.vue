<template>
  <section class="w-full bg-[#FFFFFF]">
    <div class="mb-[2.56rem]">
      <div class="w-full pl-[5rem] my-[2.56rem] midDesk:pl-[3rem]">
        <h3 class="text-[#0E1C16] font-cabin font-[500] text-[1.5rem] leading-[1.8rem] uppercase">
          The workshop and the handover
        </h3>
      </div>
      <!-- Fixed six columns rather than the auto-fit customGrid, so "two rows" is exactly
           two rows on desktop instead of varying with the viewport width. -->
      <div
        class="w-[98%] mx-auto grid grid-cols-6 tab2:!grid-cols-4 midDesk:!grid-cols-2 mob:!w-[95%]"
      >
        <article
          v-for="photo in WorkshopGallery"
          :key="photo.id"
          class="mb-[0.5rem] shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-2xl w-full h-full"
        >
          <img
            :src="photo.thumb"
            :alt="photo.alt"
            loading="lazy"
            class="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
          />
        </article>
      </div>

      <figure class="w-[98%] mx-auto mt-[1.5rem] mob:!w-[95%]">
        <img
          :src="GroupPhoto.src"
          :alt="GroupPhoto.alt"
          loading="lazy"
          class="w-full h-auto shadow-md"
        />
        <figcaption
          class="font-merri text-[0.875rem] leading-[1.3rem] text-[#4E695D] mt-[0.75rem]"
        >
          The twenty farmers of the Katcha Ward Farmers' Association with their 10 kg FARO 67
          starter packs, after the handover.
        </figcaption>
      </figure>
    </div>

    <div>
      <div class="w-full pl-[5rem] my-[2.56rem] midDesk:pl-[3rem]">
        <h3 class="text-[#0E1C16] font-cabin font-[500] text-[1.5rem] leading-[1.8rem] uppercase">
          On the floodplain
        </h3>
      </div>
      <div class="w-[98%] mx-auto grid grid-cols-customGrid mob:!grid-cols-2 mob:!w-[95%]">
        <article
          v-for="photo in FloodplainGallery"
          :key="photo.id"
          class="mb-[0.5rem] shadow-md overflow-hidden transition-transform duration-300 hover:shadow-2xl w-full h-full"
        >
          <img
            :src="photo.thumb"
            :alt="photo.alt"
            loading="lazy"
            class="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
          />
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { WorkshopGallery, GroupPhoto, FloodplainGallery } from '@/utils/KatchaData'
</script>

<style scoped></style>
