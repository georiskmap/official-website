<template>
  <section class="py-[7.44rem] mob:pb-[5rem]">
    <div class="text-center w-full mb-[10.9rem] midDesk:mb-[5rem] mob:w-[90%] mx-auto">
      <h1
        class="text-[#FFFFFF] font-cabin font-[600] text-[3.8rem] mb-4 midDesk:text-[2.5rem] midDesk:mb-0"
      >
        <span>{{ titleText }}</span><span class="cursor"></span>
      </h1>
      <p
        class="text-[#E9EBF8] font-merri font-[400] text-[1.9rem] midDesk:text-[1.2rem] leading-[2.3rem] mob:text-[1rem]"
      >
        <span>{{ subtitleText }}</span><span class="cursor"></span>
      </p>
    </div>

    <!-- Placeholder: field film not yet delivered. Swap for <videoPlayer imgSource vidSource /> -->
    <VideoPlaceholder label="Field film" note="Coming soon" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import VideoPlaceholder from './VideoPlaceholder.vue'

const titleText = ref('')
const subtitleText = ref('')

const typeWriterEffect = (text, targetRef, speed, callback) => {
  let i = 0

  const type = () => {
    if (i < text.length) {
      targetRef.value += text.charAt(i)
      i++
      setTimeout(type, speed)
    } else if (callback) {
      callback()
    }
  }

  type()
}

onMounted(() => {
  typeWriterEffect('Outlast the Flood', titleText, 100, () => {
    typeWriterEffect(
      'Satellite flood mapping and a rice that survives the water, in Katcha Ward, Niger State',
      subtitleText,
      50
    )
  })
})
</script>

<style scoped>
.cursor {
  display: inline-block;
  width: 2px;
  background-color: rgba(255, 255, 255, 0.75);
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
