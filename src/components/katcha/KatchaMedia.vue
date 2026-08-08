<template>
  <section class="w-full bg-white pt-[6rem] px-[5rem] midDesk:px-[1.5rem]">
    <h1
      class="text-[#0E1C16] font-cabin font-[500] text-[2.25rem] leading-[2.7rem] mb-[2rem] uppercase"
    >
      Media Appearances
    </h1>

    <!-- Typographic credit row: the outlet names set in the page's display face, rather
         than logo tiles. See the note in utils/KatchaData.js. -->
    <ul class="flex flex-wrap items-center border-t border-[#DCE4DF] pt-[2.5rem] pb-[1rem]">
      <li
        v-for="item in MediaAppearances"
        :key="item.id"
        class="border-l border-[#DCE4DF] pl-[3rem] pr-[3rem] first:border-l-0 first:pl-0 mob:!border-l-0 mob:!pl-0 mob:!pr-0 mob:w-full mob:mb-[1.5rem]"
      >
        <a
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-baseline gap-[0.6rem]"
        >
          <span
            class="font-cabin font-[600] text-[2rem] leading-[2.4rem] midDesk:text-[1.5rem] midDesk:leading-[1.9rem] uppercase tracking-[0.06em] text-[#0E1C16] group-hover:text-[#4E695D] transitionAll"
          >
            {{ item.name }}
          </span>
          <span
            aria-hidden="true"
            class="font-cabin text-[1.1rem] text-[#8FA79B] group-hover:text-[#4E695D] group-hover:translate-x-[2px] inline-block transitionAll"
          >
            ↗
          </span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { MediaAppearances } from '@/utils/KatchaData'
</script>

<style scoped></style>
