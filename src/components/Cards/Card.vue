<script setup>
import CustomButton from '../Buttons/Button.vue'

</script>

<template>
    <div class="connection-card  w-full rounded-md mb-8">
        <div class="card text-white card-has-bg click-col" style="background-image:url('https://hdwallpaperim.com/wp-content/uploads/2017/08/25/128936-Turkey-Istanbul-building.jpg');
        background-size: cover; background-repeat: no-repeat;background-position: center;">
               
                <div class="flex flex-col">
                    <div class="card-footer" style="padding: 0;">
                        <div class="flex flex-col" style="padding: 0;">
                            <div class="media-body flex flex-col" style="align-items: flex-start;">
                                <div class="M20 white d-block" style="margin-bottom: 4px;">
                                    Benue
                                </div>
                                <div class="M10 white" style="margin-bottom: 8px;">
                                    Nigeria
                                </div>
                            </div>
                            <button class="w-full bg-[#FFF] text-brandgreen py-4 px-5 min-w-[100px]">
                                View Maps
                            </button>
                           
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<style scoped>
.connection-card {
    width: 354px;
    height: 480px;
}


@media only screen and (max-width:800px) {
    /* .connection-card {
        width: 100%;
        height: 450px;
        margin-bottom: 150px;
    } */
}
</style>