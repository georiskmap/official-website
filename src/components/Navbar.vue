<script setup>
import {ref} from "vue"
import Drop from './Dropdowns/Drop.vue';
import NavData from "../utils/NavConstants"
import MobileNav from './MobileNav.vue';
const showMenu = ref(false);

</script>

<template>
  <nav class="h-28 bg-brandgray text-white">
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
      <button class="px-6 py-4 text-lg bg-brandgreen">View Water Level</button>
      
   
    </div>
</div>




  </nav>
  <mobile-nav v-if="showMenu" />
</template>

<style scoped>
/* .navbar {
  padding: 28px 120px 28px 120px;
}

.navbar-nav a {
  color: #9EDBC8;
  display: block;
  margin-top: 16px;
}

.navbar-nav a:hover {
  color: #2DB187;
}

.nav-dropdown-heading {
  margin-bottom: 32px;
}

a {
  color: inherit;
  text-decoration: none;
}


@media (max-width: 767px) {
  .navbar {
    padding: 40px 0px 40px 0px;
  }
} */
</style>
