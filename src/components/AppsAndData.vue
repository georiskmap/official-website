<script setup>
import Carousel from './carousel/Carousel.vue';
</script>

<template>
    <div class="container-section">
        <div class="" style="padding:78px 0;">
            <div class="hero-text flex justify-center items-center w-full ">
                <div class="uppercase font-semibold cabin text-center text-[1.5rem] md:text-[2.8rem] text-tertiary mb-4">
                    APPS AND DATA
                </div>
            </div>

            <div class="w-100 images-container">
                <Carousel />



            </div>





        </div>
    </div>
</template>

<style scoped>
.container-section {
    background-color: #EAF7F3;
}


@media (max-width: 767px) {


    .carousel .carousel-control {
        height: 60px !important;
        width: 60px !important;
        /* opacity: 0.8; */
    }

    .carousel .carousel-control-prev {
        margin-left: 25px;
    }

    .carousel .carousel-control-next {
        margin-right: 25px;
    }


}










.carousel .carousel-control {
    height: 100px;
    width: 100px;
    background: #134A39;
    margin: auto 0;
    border-radius: 100%;
    opacity: 1;
    /* opacity: 0.8; */
}

.carousel .carousel-control:hover {
    background: #164133;
    /* opacity: 1; */
}
</style>