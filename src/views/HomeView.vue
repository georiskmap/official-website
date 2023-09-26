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

import { useFrameStore } from '../store/store'
import { storeToRefs } from 'pinia'

const store = useFrameStore()
const { iframeSrc, iframeVisible } = storeToRefs(store)
const {closeFrame} = store
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
    <!-- <iframe  src="https://res.cloudinary.com/waleszn/image/upload/v1692393849/bg-2-home-5_n9sj9c.jpg" class="mx-auto w-[60%] h-[80vh] absolute top-[12%] left-[20%] " :style="{ position: 'fixed',  zIndex: 100 }"></iframe> -->
          
  </div>
</template>