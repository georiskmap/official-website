<template>
  <section class="w-full bg-[#FFFFFF] px-[5rem] midDesk:px-[1.5rem] py-[6.38rem]">
    <h1
      aria-label="katcha articles"
      class="text-[#0E1C16] font-cabin text-[2.25rem] leading-[2.7rem] mb-[3.5rem]"
    >
      ARTICLES
    </h1>

    <div class="grid grid-cols-customGrid gap-[1.5rem]">
      <template v-for="article in Articles" :key="article.id">
        <!-- Published -->
        <a
          v-if="!article.pending"
          :href="article.href"
          target="_blank"
          rel="noopener noreferrer"
          class="cursor-pointer group"
        >
          <article class="flex flex-col gap-[1.8125rem]">
            <div class="w-full h-full max-h-[10.625rem] rounded-[6px] overflow-hidden">
              <img
                :src="article.image"
                :alt="article.imageAlt"
                loading="lazy"
                class="flex-grow object-cover h-full w-full max-h-[10.625rem] group-hover:scale-[1.03] transitionAll"
              />
            </div>
            <div>
              <p
                v-if="article.publication"
                class="font-cabin text-[0.8rem] text-[#4E695D] uppercase tracking-wide mb-[0.4rem]"
              >
                {{ article.publication }}
              </p>
              <h3 class="text-[#0E1C16] font-merri text-[1rem] leading-[1.2rem]">
                {{ article.text }}
              </h3>
            </div>
          </article>
        </a>

        <!-- Placeholder: further coverage pending -->
        <article v-else class="flex flex-col gap-[1.8125rem]" data-placeholder="article">
          <div
            class="w-full h-[10.625rem] rounded-[6px] bg-[#F3F5F4] border border-dashed border-[#C4D2CB] grid place-items-center"
          >
            <p class="font-merri text-[0.875rem] text-[#8FA79B]">{{ article.label }}</p>
          </div>
          <h3 class="text-[#8FA79B] font-merri text-[1rem] leading-[1.2rem]">
            {{ article.note }}
          </h3>
        </article>
      </template>
    </div>
  </section>
</template>

<script setup>
import { Articles } from '@/utils/KatchaData'
</script>

<style scoped></style>
