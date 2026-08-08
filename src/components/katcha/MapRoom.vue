<template>
  <section class="pt-[4.3rem] pb-[3.19rem]">
    <animatedText :text="text" />

    <div class="w-[95.8%] mx-auto mt-[3.5rem] midDesk:mt-[2rem]">
      <div class="grid grid-cols-customGrid2 gap-[1.5rem]">
        <button
          v-for="map in MapSheets"
          :key="map.id"
          type="button"
          class="text-left bg-[#16281F] rounded-[6px] overflow-hidden border border-[#284536] hover:border-[#4E695D] transitionAll group"
          @click="openMap(map)"
        >
          <div class="w-full aspect-[4962/3506] overflow-hidden bg-[#0E1C16]">
            <img
              :src="`/media/katcha/maps/thumb/${map.file}.jpg`"
              :alt="`${map.title} — map sheet ${map.sheet}`"
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-[1.03] transitionAll"
            />
          </div>
          <div class="p-[1.25rem]">
            <p class="font-cabin text-[0.8rem] text-[#4E695D] uppercase tracking-wide">
              Sheet {{ map.sheet }} · {{ map.theme }}
            </p>
            <h4
              class="font-cabin font-[600] text-[1.15rem] leading-[1.5rem] text-[#FFFFFF] mt-[0.4rem]"
            >
              {{ map.title }}
            </h4>
            <p class="font-merri text-[0.875rem] leading-[1.35rem] text-[#8FA79B] mt-[0.6rem]">
              {{ map.takeaway }}
            </p>
          </div>
        </button>
      </div>
    </div>

    <div class="w-full grid place-items-center mt-[3rem]">
      <a
        href="/media/katcha/maps/MAP_01_regional_setting.jpg"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-[white] rounded-[100px] p-[1.5rem] midDesk:py-4 flex items-center gap-[0.75rem]"
      >
        <importIcon />
        <h4
          class="text-[#0E1C16] font-merri text-[1.25rem] leading-[1.5rem] midDesk:text-[1rem]"
        >
          Open the map series
        </h4>
      </a>
    </div>

    <MapViewer :map="selectedMap" :show="isOpen" @close="closeMap" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import animatedText from '../ui/animatedText.vue'
import importIcon from '@/components/icons/importIcon.vue'
import MapViewer from './MapViewer.vue'
import { MapSheets } from '@/utils/KatchaData'

const text = `The other half of the work is quieter and harder to see, and it is the part that tells the team where the seed is most needed. Using radar imagery from the European Union's Copernicus programme and its Sentinel-1 satellites, which see through cloud by day or by night, GRMI reconstructed how the floods in Katcha behaved in every year from 2020 to 2025, and set that record beside a land cover analysis of the ward and an inundation model built on terrain. The sheets below carry that analysis, each one stating its method, its key result, and the limits of what it can claim.`

const selectedMap = ref(null)
const isOpen = ref(false)

const openMap = (map) => {
  selectedMap.value = map
  isOpen.value = true
}

const closeMap = () => {
  isOpen.value = false
}
</script>

<style scoped></style>
