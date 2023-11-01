<template>
  <TransitionRoot appear :show="props.isOpen" as="template">
    <Dialog as="div" @close="props.closeModal" class="relative z-10 ">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-10" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
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
              class="w-full  max-w-[700px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
            
            <div class="flex w-full flex-col space-y-4">
              <h3 class="font-semibold text-sm">
                Join us in this vital endeavor as we work together to promote a sustainable environment, safeguarding present and future generations from the adverse effects of climate change. Your skills and knowledge could be the linchpin in shaping a resilient Africa, fortified against the trials of geohazards. 
              </h3>

              <div class="flex flex-col space-y-3">
                <input type="text" class="border border-brandgreen w-full p-3 rounded-md" placeholder="Enter your name">
                <input type="text" class="border border-brandgreen w-full p-3 rounded-md" placeholder="What do you do?">
                <textarea placeholder="Enter your message here" class="border border-brandgreen w-full p-3 rounded-md" rows="5" />

              </div>
            </div>

              <div class="mt-4 flex gap-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Close
                </button>

                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Submit
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  <script setup>
    import { ref } from 'vue'
    import {
      TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    } from '@headlessui/vue'
    const props = defineProps({
    isOpen: Boolean,
    closeModal: Function,
    openModal: Function,

  })
  
  </script>