<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" @close="close" class="relative z-[1000]">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-[#0E1C16]/90" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 mob:p-2 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-[1600px] transform overflow-hidden rounded-[0.5rem] bg-white text-left align-middle shadow-xl transition-all"
            >
              <div v-if="map" class="p-[1.5rem] mob:p-[1rem]">
                <div class="flex items-start justify-between gap-6 mb-[1rem]">
                  <div>
                    <p class="font-cabin text-[0.875rem] text-[#4E695D] uppercase tracking-wide">
                      Sheet {{ map.sheet }} · {{ map.theme }}
                    </p>
                    <DialogTitle
                      as="h3"
                      class="font-cabin font-[600] text-[1.5rem] leading-[1.9rem] text-[#0E1C16] midDesk:text-[1.2rem]"
                    >
                      {{ map.title }}
                    </DialogTitle>
                  </div>
                  <button
                    type="button"
                    class="shrink-0 rounded-[100px] border border-[#0E1C16] px-[1.25rem] py-[0.5rem] font-merri text-[0.875rem] text-[#0E1C16] hover:bg-[#0E1C16] hover:text-white transitionAll"
                    @click="close"
                  >
                    Close
                  </button>
                </div>

                <div class="w-full overflow-auto bg-[#F3F5F4] rounded-[4px]">
                  <img
                    :src="`/media/katcha/maps/${map.file}.jpg`"
                    :alt="`${map.title}. ${map.takeaway}`"
                    class="w-full h-auto min-w-[900px]"
                  />
                </div>

                <p
                  class="font-merri text-[0.95rem] leading-[1.5rem] text-[#0E1C16] mt-[1rem] max-w-[70ch]"
                >
                  {{ map.takeaway }}
                </p>

                <div class="mt-[1rem] flex items-center gap-[1rem] flex-wrap">
                  <a
                    :href="`/media/katcha/maps/${map.file}.jpg`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-merri text-[0.875rem] text-[#4E695D] underline underline-offset-4 hover:text-[#0E1C16] transitionAll"
                  >
                    Open full size
                  </a>
                  <a
                    v-if="map.pdf"
                    :href="map.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-merri text-[0.875rem] text-[#4E695D] underline underline-offset-4 hover:text-[#0E1C16] transitionAll"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

defineProps({
  map: { type: Object, default: null },
  show: { type: Boolean, default: false }
})

const emit = defineEmits(['close'])

const close = () => emit('close')
</script>

<style scoped></style>
