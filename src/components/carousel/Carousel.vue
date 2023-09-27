<template>
  <Carousel :transition="300" v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in AppsData" :key="slide.id">
      <div  class="connection-card">
        <div class="card m-3 text-white h-[450px] w-[300px] md:w-[350px] rounded-lg flex items-end" :style="{'background-image':`url(${slide.map_url})`,
        'background-size': 'cover', 'background-repeat': 'no-repeat','background-position': 'center'}">

          <div class="flex flex-col p-3 w-full">
            <div class="flex flex-col merri" style="padding: 0;">
              <div class="media-body flex flex-col" style="align-items: flex-start;">
                <div class="M20 text-brandgreen font-normal text-[1.4rem] d-block" style="margin-bottom: 4px;">
                 {{ slide.state }}
                </div>
                <div class=" text-brandgreen font-bold" style="margin-bottom: 8px;">
                 {{ slide.country }}
                </div>
              </div>

              <button @click="showIframe(slide)"
                class="w-full hover:bg-brandgreen hover:text-white bg-[#FFF] font-semibold text-[1.1rem] rounded-md text-tertiary py-4 px-5 min-w-[100px]">
                View Maps
              </button>



            </div>
          </div>
        </div>
      </div>
    </Slide>


    <template #addons>
      <Navigation />
    </template>
  </Carousel>

  <ShowMap  v-if="isOpen" :slide="selectedSlide"    v-model:show="isOpen" :closeFrame="closeModal" />

</template>
<style  >
.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel {
  width: 95%;
  margin: 0 auto;
}

.carousel__prev,
.carousel__next {
  height: 60px !important;
  width: 60px !important;
  background: #134A39 !important;
  color: white;
  border-radius: 100%;
  padding: 10px;
}



.carousel__slide {
  height: 480px;
  width: 290px;
  padding: 5px;
}


.carousel .carousel-control-prev {
  margin-left: 25px;
}

.carousel .carousel-control-next {
  margin-right: 25px;
}

.carousel .carousel-control:hover {
  background: #164133;
  /* opacity: 1; */
}
</style>
  
<script >
import { defineComponent, ref } from 'vue'
// import {useFrameStore} from "../../store/store"
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import AppsData from "../../utils/AppsData"
import ShowMap from '../modals/ShowMap.vue';
import 'vue3-carousel/dist/carousel.css'


// const store = useFrameStore()
const iframeVisible = ref(false);
const selectedSlide = ref(null);
const iframeSrc = ref(null);
const isOpen = ref(false)

const sel = (slide) => {
  selectedSlide.value = slide
}

function showIframe(slide) {
  selectedSlide.value = slide
 if(selectedSlide.value.id){
   isOpen.value = true
 } 
}

function closeIframe() {
  isOpen.value = false;
  iframeVisible.value = false;
}

function closeModal() {
  isOpen.value = false
  iframeVisible.value = false
}
function openModal() {

  isOpen.value = true
}

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
    ShowMap,
  },
  data: () => ({
    showIframe: showIframe,
    selectedSlide: selectedSlide,
    iframeSrc: iframeSrc,
    iframeVisible: iframeVisible,
    closeIframe: closeIframe,
    openModal: openModal,
    closeModal: closeModal,
    sel: sel,
    AppsData: AppsData,
    isOpen: isOpen,
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
      1260: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
    },
  }),
})
</script>
  