import { defineStore } from 'pinia'

import { ref, computed} from 'vue'
export const useFrameStore = defineStore('frames', () => {
    const iframeVisible = ref(false);
    const selectedSlide = ref(null);
    const iframeSrc = ref(null);
   

    function showIframe(slide) {
        iframeVisible.value = true;
        selectedSlide.value = slide;
        iframeSrc.value = 'https://res.cloudinary.com/waleszn/image/upload/v1692393849/bg-2-home-5_n9sj9c.jpg'
      }
      
      function closeIframe() {
        iframeVisible.value = false;
      }
  
    return { iframeSrc, selectedSlide, iframeVisible, showIframe, closeIframe }
  })