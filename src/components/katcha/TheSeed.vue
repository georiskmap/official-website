<template>
  <section class="w-full pt-[5rem]">
    <animatedText :text="text" />

    <div class="w-[83.47%] mx-auto mt-[5.5rem] midDesk:mt-[3rem]">
      <div class="grid grid-cols-temp4 tab:!grid-cols-2 mob:!grid-cols-1 gap-[1.5rem]">
        <div
          v-for="figure in KeyFigures"
          :key="figure.id"
          class="border-t border-[#436256] pt-[1.25rem]"
        >
          <p
            class="text-[#FFFFFF] font-cabin font-[600] text-[2.6rem] leading-[3rem] midDesk:text-[2rem] midDesk:leading-[2.4rem]"
          >
            {{ figure.value }}
          </p>
          <p
            class="text-[#436256] font-merri text-[1rem] leading-[1.4rem] mt-2 midDesk:text-[0.875rem]"
          >
            {{ figure.label }}
          </p>
        </div>
      </div>
    </div>

    <div class="w-[83.47%] mx-auto mt-[5rem] midDesk:mt-[3rem]">
      <figure
        v-for="quote in Quotes.slice(0, 2)"
        :key="quote.id"
        class="mb-[3rem] last:mb-0 border-l-2 border-[#4E695D] pl-[1.5rem] mob:pl-[1rem]"
      >
        <blockquote
          class="text-[#E9EBF8] font-merri font-[400] text-[1.35rem] leading-[2rem] midDesk:text-[1.1rem] midDesk:leading-[1.7rem]"
        >
          “{{ quote.text }}”
        </blockquote>
        <figcaption class="mt-[1rem] font-cabin text-[1rem] text-[#436256] midDesk:text-[0.875rem]">
          {{ quote.name }} <span class="opacity-70">— {{ quote.role }}</span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
import animatedText from '../ui/animatedText.vue'
import { KeyFigures, Quotes } from '@/utils/KatchaData'

const text = `In July 2026 the Geohazards Risk Mapping Initiative travelled to Katcha carrying two things: two hundred kilograms of FARO 67 rice seed, and six years of satellite imagery of the very floods that keep washing the harvest away. FARO 67 carries a gene called SUB1A that lets the plant survive one to two weeks of complete submergence and then resume growing once the water recedes. It was released in Nigeria in 2017 through a breeding effort led by the International Rice Research Institute and the Africa Rice Center, with the National Cereals Research Institute at Badeggi as the national partner, and because it came from conventional breeding, farmers can save and replant it like any other rice. For most of the eight years since release it has stayed out of reach of the farmers who need it most, and closing that last mile is why GRMI came to Katcha.`
</script>

<style scoped></style>
