<template>
  <form class=" bg-white w-[90%] mx-auto absolute top-[20%] left-[50%] translate-x-[-50%] h-[90%] rounded-[0.5rem]">
        <div class="flex flex-col min-h-full items-center justify-center p-4 text-center">
            
            <div class="flex w-full flex-col space-y-4">
              <h3 class="font-semibold text-sm">
                Join us in this vital endeavor as we work together to promote a sustainable environment, safeguarding present and future generations from the adverse effects of climate change. Your skills and knowledge could be the linchpin in shaping a resilient Africa, fortified against the trials of geohazards. 
              </h3>

              <div class="flex flex-col space-y-3">
                <input type="text" class="border border-brandgreen w-full p-3 rounded-md" placeholder="Enter your name" v-model="name">
                <input type="email" class="border border-brandgreen w-full p-3 rounded-md" placeholder="Enter Your Email" v-model="mail">
                <input type="text" class="border border-brandgreen w-full p-3 rounded-md" placeholder="What do you do?" v-model="occupation">
                <textarea placeholder="Enter your message here" class="border border-brandgreen w-full p-3 rounded-md" rows="5"  v-model="message"/>

              </div>
            </div>

              <div class="mt-4 flex gap-4">
                <a
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Close
                </a>

                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="sendMail"
                >
                  Submit
                </button>
              </div>
      </div>
  </form>
</template>
<script setup>
import emailjs from 'emailjs-com'
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

  const message = ref('')
  const name = ref('')
  const occupation = ref('')
  const mail = ref('')

  function sendMail(e){
    try {
      emailjs.sendForm('service_8r4m70n', 'template_f7qkatb', '#myForm',  {
        name: name.value,
        message: message.value,
        'to_name': 'Abdultawab',
        'reply_to': mail.value

      })
    } catch (error) {
      console.log(error)
    }
  }

</script>