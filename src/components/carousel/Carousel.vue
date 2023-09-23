<template>
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide   v-for="slide in 10" :key="slide">
        <div  class="connection-card">
        <div class="card text-white h-[450px] w-[300px] md:w-[350px] rounded-lg flex items-end" style="background-image:url('https://hdwallpaperim.com/wp-content/uploads/2017/08/25/128936-Turkey-Istanbul-building.jpg');
        background-size: cover; background-repeat: no-repeat;background-position: center;">
               
                <div class="flex flex-col p-3 w-full">
                  <div class="flex flex-col merri" style="padding: 0;">
                            <div class="media-body flex flex-col" style="align-items: flex-start;">
                                <div class="M20 white font-normal text-[1.4rem] d-block" style="margin-bottom: 4px;">
                                    Benue
                                </div>
                                <div class=" text-[#fff]" style="margin-bottom: 8px;">
                                    Nigeria
                                </div>
                            </div>
                            
                            <button @click="showIframe(slide)" class="w-full hover:bg-brandgreen hover:text-white bg-[#FFF] font-semibold text-[1.1rem] rounded-md text-tertiary py-4 px-5 min-w-[100px]">
                View Maps
              </button>
                           
            
                   
    <iframe v-if="iframeVisible && slide === selectedSlide" :src="iframeSrc" class="w-[800px] h-[800px]" :style="{ position: 'absolute', top: 0, left: 0, zIndex: 100 }"></iframe>
                           
                        </div>
                </div>
            </div>
    </div>
      </Slide>
      
  
      <template #addons>
        <Navigation />
      </template>
    </Carousel>

  </template>
  <style  >
.carousel__slide--sliding {
  transition: 0.5s;
}
.carousel{
  width: 95%;
  margin: 0 auto;
}
.carousel__prev,
.carousel__next{
  height: 60px !important;
    width: 60px !important;
    background: #134A39 !important;
    color: white;
    border-radius: 100%;
    padding: 10px;
}



.carousel__slide{
  height: 480px;
  width: 300px;
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
  
  
  import 'vue3-carousel/dist/carousel.css'


  // const store = useFrameStore()
  const iframeVisible = ref(false);
const selectedSlide = ref(null);
const iframeSrc = ref(null);
// console.log(store.iframeVisible)


function showIframe(slide) {
  iframeVisible.value = true;
  selectedSlide.value = slide;
  iframeSrc.value = 'https://res.cloudinary.com/waleszn/image/upload/v1692393849/bg-2-home-5_n9sj9c.jpg'
}

function closeIframe() {
  iframeVisible.value = false;
}


  export default defineComponent({
    name: 'Breakpoints',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data: () => ({
     showIframe: showIframe,
     selectedSlide: selectedSlide,
     iframeSrc: iframeSrc,
     iframeVisible : iframeVisible ,
     closeIframe: closeIframe,
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
  