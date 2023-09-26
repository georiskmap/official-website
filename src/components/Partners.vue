

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="text-brandgreen cabin mb-4 md:mb-[65px] font-semibold text-[2.2rem] flex justify-content-center" style="padding-top: 14px;">
      Partners
    </div>
<AutoPlayCarousel />
    

    <!-- <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000" style="margin-bottom: 54px;">
      <div class="carousel-inner flex">
        <div class="carousel-item active">
          <div class="row">
            <div class="col">
              <img src='../assets/icons/partner1.png' class="img-fluid" alt="Responsive image">
            </div>
            <div class="col">
              <img src="../assets/icons/partner2.png" class="img-fluid" alt="Responsive image">
            </div>
            <div class="col d-flex align-items-center">
              <img src="../assets/icons/partner3.png" class="img-fluid" alt="Responsive image">
            </div>
            <div class="col">
              <img src="../assets/icons/partner4.png" class="img-fluid" alt="Responsive image">
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <img src='../assets/icons/partner1.png' class="img-fluid" alt="Responsive image">
            </div>
            <div class="col">
              <img src="../assets/icons/partner2.png" class="img-fluid" alt="Responsive image">
            </div>
            <div class="col d-flex align-items-center">
              <img src="../assets/icons/partner3.png" class="img-fluid" alt="Responsive image">
            </div>
            <div class="col">
              <img src="../assets/icons/partner4.png" class="img-fluid" alt="Responsive image">
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script >
import AutoPlayCarousel from './carousel/AutoPlayCarousel.vue';
import Carousel from './carousel/Carousel.vue';
import {defineComponent} from 'vue'

export default defineComponent({
  components: { AutoPlayCarousel }
})
</script>

<style scoped></style>
