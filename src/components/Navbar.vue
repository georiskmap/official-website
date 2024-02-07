<script setup>
import {ref} from "vue"
import Drop from './Dropdowns/Drop.vue'
import NavData from "../utils/NavConstants"
import MobileNav from './MobileNav.vue';
const showMenu = ref(false);

</script>

<template>
  <nav class=" lg:h-28 bg-brandgray/50 text-white">
<div class="flex mx-auto w-[95%] md:w-[90%] tab2:w-[95%] items-center justify-between py-4 h-full">
  
<div class="flex gap-32">
  <router-link to="/">
      <img src='../assets/icons/GRMI_logo.png' alt="Responsive image" width="183" style="color: green;">
    </router-link>
    <div class=" w-full flex items-center">
      <div v-for="link in NavData" :key="link.id" class="lg:flex justify-between items-center hidden"> 
        <Drop :model="link" />
      </div>
    </div>
</div>
<div @click="showMenu = !showMenu" class="flex hover:scale-105 rounded-lg lg:hidden cursor-pointer transition z-[999999] items-center">
  <img class="h-12 w-12 transition" src="../assets/icons/menu.svg" alt="burger" v-if="!showMenu">
  <div class="">
    <span class="material-icons text-[3rem] transition" v-if="showMenu">close</span>
  </div>
</div>

    <div class="lg:flex hidden transition">
      <button class=" transition px-6 py-4 text-[1rem] bg-brandgreen text-white hover:text-brandgreen hover:bg-white hover:outline-2 shadow-md  merri rounded-[0.25rem]">View Water Level</button>
    </div>
</div>




  </nav>
  <mobile-nav v-if="showMenu" />
</template>

<style scoped>

</style>
