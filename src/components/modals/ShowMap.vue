<template>
    <TransitionRoot appear :show="setShow" as="template">
      <Dialog as="div" @close="props.closeModal" class="relative z-10">
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
                class="w-full  max-w-[1200px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
              <div class="">
                <h3 class="text-xl uppercase">{{ slide.state }}</h3>
                <img class="w-full " :src="props.slide.map_url" alt="" srcset="">
              </div>
  
                <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Close
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

  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'
import { computed } from 'vue'
  const props = defineProps({
    // isOpen Boolean,
    slide: Object,
    closeModal: Function,
    openModal: Function,
    show: Boolean,

  })


  const emits = defineEmits(['update:show'])

  const setShow = computed({
    get(){
      return props.show
    },
    set(newValue){
      emits('update:show', newValue)
    }
  })

  const closeModal = ()=>{
    setShow.value = false
  }
 
  </script>
  