<template>
  <div class="carousel-container py-4 mx-auto w-[96%]">
    <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in Partnersdata" :key="slide.id">
  <div class="item">
        <img :src='slide.src' class="img-fluid" :alt="slide.company"/>
      </div>
</Slide>

    <template #addons>
      
    </template>
  </Carousel>
  </div>
</template>
<style scoped>
.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__track{
  display: flex !important;
  justify-content: center !important;
  
}



.carousel__slide {
  height: 100px;
  width: 80px;
}
@media (max-width: 767px) {
  .carousel__slide {
  height: 40px;
  width: 50px;
}
} 

   
</style>
<script>
import { defineComponent, ref } from 'vue'
import { Carousel,  Slide } from 'vue3-carousel'
import PartnersLogo from "../../utils/data"
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
   
  },
  data: () => ({
   Partnersdata: PartnersLogo,
    // carousel settings
    
    settings: {
      itemsToShow: 3,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: 'center',
      },
    },
  }),
})
</script>

