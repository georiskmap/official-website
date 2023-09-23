<script setup>
import CustomButton from '../Buttons/Button.vue'

</script>

<template>
     <div  class="connection-card">
        <div class="card text-white h-[450px] w-[280px] md:w-[350px] rounded-lg flex items-end" style="background-image:url('https://hdwallpaperim.com/wp-content/uploads/2017/08/25/128936-Turkey-Istanbul-building.jpg');
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
                           
            
                    
                        </div>
                </div>
            </div>
    </div>
</template>

<style scoped>
/* .connection-card {
    width: 354px;
    height: 480px;
} */


@media only screen and (max-width:800px) {
    /* .connection-card {
        width: 100%;
        height: 450px;
        margin-bottom: 150px;
    } */
}
</style>