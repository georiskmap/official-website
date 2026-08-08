<template>
  <section
    class="w-full bg-white pt-[3rem] !pb-[8rem] px-[5rem] midDesk:px-[3rem] mob:px-[1.5rem]"
  >
    <h1
      class="text-[#0E1C16] font-cabin font-[500] text-[2.25rem] leading-[2.7rem] mb-[2rem] uppercase"
    >
      Partners
    </h1>

    <!-- Same typographic credit treatment as KatchaMedia.vue. -->
    <ul class="flex flex-wrap items-start border-t border-[#DCE4DF] pt-[2.5rem]">
      <li
        v-for="partner in Partners"
        :key="partner.id"
        class="border-l border-[#DCE4DF] pl-[3rem] pr-[3rem] first:border-l-0 first:pl-0 mob:!border-l-0 mob:!pl-0 mob:!pr-0 mob:w-full mob:mb-[1.5rem]"
      >
        <component
          :is="partner.href ? 'a' : 'div'"
          :href="partner.href || undefined"
          :target="partner.href ? '_blank' : undefined"
          :rel="partner.href ? 'noopener noreferrer' : undefined"
          class="group block"
        >
          <span class="inline-flex items-baseline gap-[0.6rem]">
            <span
              class="font-cabin font-[600] text-[2rem] leading-[2.4rem] midDesk:text-[1.5rem] midDesk:leading-[1.9rem] uppercase tracking-[0.06em] text-[#0E1C16] transitionAll"
              :class="partner.href ? 'group-hover:text-[#4E695D]' : ''"
            >
              {{ partner.name }}
            </span>
            <span
              v-if="partner.href"
              aria-hidden="true"
              class="font-cabin text-[1.1rem] text-[#8FA79B] group-hover:text-[#4E695D] group-hover:translate-x-[2px] inline-block transitionAll"
            >
              ↗
            </span>
          </span>
          <span
            v-if="partner.sub"
            class="block font-merri text-[0.875rem] leading-[1.3rem] text-[#4E695D] mt-[0.5rem]"
          >
            {{ partner.sub }}
          </span>
        </component>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { Partners } from '@/utils/KatchaData'
</script>

<style scoped></style>
