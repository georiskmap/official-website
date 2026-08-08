<template>
  <section class="bg-white pt-[3rem] !pb-[8rem]">
    <h1
      class="text-[#0E1C16] font-cabin font-[500] text-[2.25rem] leading-[2.7rem] ml-[5rem] midDesk:ml-[3rem] mb-[2rem] uppercase"
    >
      Partners
    </h1>

    <div
      class="w-full mx-auto flex gap-8 overflow-x-auto items-center no-scrollbar px-[5rem] midDesk:px-[3rem]"
    >
      <component
        v-for="partner in Partners"
        :key="partner.id"
        :is="partner.href ? 'a' : 'div'"
        :href="partner.href || undefined"
        :target="partner.href ? '_blank' : undefined"
        :rel="partner.href ? 'noopener noreferrer' : undefined"
        class="flex justify-center items-center shrink-0 basis-[22%] tab2:basis-[35%] mob:basis-[70%] h-[6rem] rounded-[4px] px-[1rem]"
        :class="
          partner.pending
            ? 'bg-[#F3F5F4] border border-dashed border-[#C4D2CB]'
            : 'bg-[#F3F5F4] border border-[#DCE4DF]'
        "
        :data-placeholder="partner.pending ? 'partner-logo' : undefined"
      >
        <!-- Real partner, artwork supplied -->
        <img
          v-if="!partner.pending && partner.logo"
          :src="partner.logo"
          :alt="partner.name"
          loading="lazy"
          class="h-full w-full object-contain py-[0.75rem] grayscale hover:grayscale-0 transitionEffect"
        />

        <!-- Real partner, artwork pending: name set in type rather than an empty tile -->
        <div v-else-if="!partner.pending" class="text-center">
          <p
            class="font-cabin font-[600] text-[0.95rem] leading-[1.2rem] text-[#0E1C16] uppercase tracking-wide"
          >
            {{ partner.name }}
          </p>
          <p v-if="partner.sub" class="font-merri text-[0.75rem] text-[#4E695D] mt-[0.25rem]">
            {{ partner.sub }}
          </p>
        </div>

        <!-- Slot still to be filled -->
        <p v-else class="font-merri text-[0.875rem] text-[#8FA79B]">{{ partner.label }}</p>
      </component>
    </div>
  </section>
</template>

<script setup>
import { Partners } from '@/utils/KatchaData'
</script>

<style scoped></style>
