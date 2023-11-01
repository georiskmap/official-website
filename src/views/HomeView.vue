<script setup>
// import { RouterView } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Partners from '../components/Partners.vue'
import WhoAreWe from '../components/WhoAreWe.vue'
import WhatWeDo from '../components/WhatWeDo.vue'
import OurVision from '../components/OurVision.vue'
import OurMission from '../components/OurMission.vue'
import AppsAndData from '../components/AppsAndData.vue'
import GetInvolved from '../components/GetInvolved.vue'
import Footer from '../components/Footer.vue'
// import "../assets/styles/main.scss"
import "../assets/styles/App.scss"


</script>


<template>
  <div id="app">
   
    <Navbar />
 
    <Hero />
    <Partners />
    <WhoAreWe />
    <WhatWeDo />
    <OurVision />
    <OurMission />
    <AppsAndData />
    <GetInvolved />
    <Footer />
              
  </div>
</template>