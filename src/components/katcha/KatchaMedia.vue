<template>
  <section class="bg-white pt-[6rem]">
    <h1
      class="text-[#0E1C16] font-cabin font-[500] text-[2.25rem] leading-[2.7rem] ml-[5rem] midDesk:ml-[3rem] mb-[2rem] uppercase"
    >
      Media Appearances
    </h1>

    <div
      class="w-full mx-auto flex gap-8 overflow-x-auto items-center no-scrollbar px-[5rem] midDesk:px-[3rem]"
    >
      <component
        v-for="item in MediaAppearances"
        :key="item.id"
        :is="item.href ? 'a' : 'div'"
        :href="item.href || undefined"
        :target="item.href ? '_blank' : undefined"
        :rel="item.href ? 'noopener noreferrer' : undefined"
        class="flex justify-center items-center shrink-0 basis-[22%] tab2:basis-[35%] mob:basis-[70%] h-[6rem] rounded-[4px] px-[1rem]"
        :class="
          item.pending
            ? 'bg-[#F3F5F4] border border-dashed border-[#C4D2CB]'
            : 'bg-[#F3F5F4] border border-[#DCE4DF] hover:border-[#4E695D] transitionAll'
        "
        :data-placeholder="item.pending ? 'media-logo' : undefined"
      >
        <img
          v-if="!item.pending && item.logo"
          :src="item.logo"
          :alt="item.name"
          loading="lazy"
          class="h-full w-full object-contain py-[0.75rem] grayscale hover:grayscale-0 transitionEffect"
        />

        <p
          v-else-if="!item.pending"
          class="font-cabin font-[600] text-[1.1rem] text-[#0E1C16] uppercase tracking-wide text-center"
        >
          {{ item.name }}
        </p>

        <p v-else class="font-merri text-[0.875rem] text-[#8FA79B]">{{ item.label }}</p>
      </component>
    </div>
  </section>
</template>

<script setup>
import { MediaAppearances } from '@/utils/KatchaData'
</script>

<style scoped></style>
