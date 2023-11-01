<script setup>
import { ref } from "vue";
import GetInvolvedModal from "./modals/GetInvolvedModal.vue";
const isOpen = ref(false)
const openModal = ()=>{
    isOpen.value=true;
}
const closeModal = ()=>{
    isOpen.value = false
  }
</script>

<template>
    <div class="hero-image flex justify-center items-center">
        <div class="hero-text w-full flex justify-center items-center">
                    <div class="flex max-w-[700px] items-center justify-center mb-4 ">
                        <h5 class="text-[1.5rem] cabin md:text-[1.8rem] font-semibold  lg:text-[2.4rem] white">We are always looking to expand our team. If you are a GIS Specialist we would love to work with
                        you.</h5>
                    </div>

                    <p class="M20 max-w-[900px] merri  lg:text-[1rem] leading-12 text-center" >
                        Join us in this vital endeavor as we work together to promote a sustainable environment, 
                        
                        safeguarding present and future generations from the adverse effects of climate change. 
                        
                        Your skills and knowledge could be the linchpin in shaping a resilient Africa, fortified 
                        
                        against the trials of geohazards.
                    </p>

                    <button @click="openModal" class="btn shadow-sm merri  bg-brandgreen hover:text-brandgreen hover:bg-white  mt-8">
                    Get Involved
                </button>
                </div>
             
    </div>
    <GetInvolvedModal :isOpen="isOpen" :closeModal="closeModal" :opneModal="openModal" />
    <!-- <get-involved-modal :isOpen="isOpen" /> -->
</template>

<style scoped>
.hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('https://res.cloudinary.com/waleszn/image/upload/q_30/v1695971112/get_involved_o72npf.png');
    background-position: center;
    background-repeat: no-repeat;
    height: 70vh;
    background-size: cover;
    padding: 0 40px 0 40px;
}

.hero-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: white;
}

.btn {
   
    display: inline-block;
    padding: 15px 60px;
  transition-delay: 100ms;
  
    border-radius: 3px;
    
    text-align: center;
    cursor: pointer;
}


</style>