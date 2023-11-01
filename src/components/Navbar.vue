<script setup>
import {ref} from "vue"
import Drop from './Dropdowns/Drop.vue';
import NavData from "../utils/NavConstants"
import MobileNav from './MobileNav.vue';
const showMenu = ref(false);

</script>

<template>
  <nav class=" lg:h-28 bg-brandgray/50 text-white">
<div class="flex mx-auto w-[95%] md:w-[90%] items-center justify-between py-4 ">
  
<div class="flex   ">
  <router-link to="/">
      <img src='../assets/icons/GRMI_logo.png' alt="Responsive image" width="183" style="color: green;">

    </router-link>
    <div v-for="link in NavData" :key="link.id" class="lg:flex justify-between items-center hidden"> 
      <Drop :model="link" />
    </div>
</div>
<div @click="showMenu = !showMenu" class="flex hover:border-2  border-blue-900 rounded-lg lg:hidden cursor-pointer">
  <img class="h-12 w-12 " src="../assets/icons/menu.svg" alt="burger">
</div>

<div class="lg:flex hidden">
      <button class="px-6 py-4 text-lg bg-brandgreen text-white hover:text-brandgreen hover:bg-white hover:outline-2 shadow-md  merri">View Water Level</button>
      
   
    </div>
</div>




  </nav>
  <mobile-nav v-if="showMenu" />
</template>

<style scoped>

</style>
