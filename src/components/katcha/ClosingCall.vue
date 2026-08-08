<template>
  <section class="w-full bg-[#FFFFFF] py-[3.75rem]">
    <div class="w-[83.47%] mx-auto">
      <figure class="mb-[2.5rem]">
        <blockquote
          class="text-[#0E1C16] font-merri font-[400] text-[1.35rem] leading-[2.1rem] midDesk:text-[1.1rem] midDesk:leading-[1.7rem] text-center max-w-[75ch] mx-auto"
        >
          “{{ quote.text }}”
        </blockquote>
        <figcaption class="mt-[1rem] font-cabin text-[1rem] text-[#4E695D] text-center">
          {{ quote.name }} <span class="opacity-70">— {{ quote.role }}</span>
        </figcaption>
      </figure>

      <h3
        class="text-[#0E1C16] font-merri font-[700] text-[1.94rem] leading-[2.3rem] mb-[2rem] midDesk:text-[1.5rem] text-center"
      >
        This work sits inside the
        <a
          href="https://www.undrr.org/implementing-sendai-framework/what-sendai-framework"
          target="_blank"
          rel="noopener noreferrer"
          class="rotate-link bg-[#4E695D] rounded-[100px] border border-[#0E1C16] py-[0.63rem] px-[1.25rem] text-[#FFFFFF] inline-block transitionAll hover:rotate-[-5deg]"
          >Sendai Framework</a
        >
        that Nigeria has signed, which asks that communities both understand disaster risk and
        invest in resilience. In Katcha that comes down to one local hope: that when the river
        rises again, as everyone knows it will, a great deal more of the rice is still standing
        once the water has gone back down. To support the next season of monitoring, seed
        multiplication, and mapping, get in touch with the team.
      </h3>

      <div class="w-full grid place-items-center">
        <!-- Plain anchor, not router-link: the router has no scrollBehavior, so a hash
             route would navigate without scrolling to the form. -->
        <a
          href="/#get-involved"
          class="bg-[#0E1C16] rounded-[100px] py-[1rem] px-[2.5rem] midDesk:px-[3rem] inline-block"
        >
          <h4 class="text-[#FFFFFF] font-merri text-[1.25rem] leading-[1.5rem]">
            Support this work
          </h4>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Quotes } from '@/utils/KatchaData'

const quote = Quotes[2]
</script>

<style scoped></style>
