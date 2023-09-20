<script setup>
import Card from './Cards/Card.vue'
import Carousel from './carousel/Carousel.vue';
</script>

<template>
    <div class="container-section">
        <div class="" style="padding:78px 0;">
            <div class="hero-text flex justify-center items-center w-full ">
                    <div class="uppercase font-semibold  text-center text-[1.5rem] md:text-[3rem] text-tertiary mb-4">
                        APPS AND DATA
                    </div>
                </div>

                <div class="w-100 images-container">
                    <Carousel />
                    
                    
                        <div id="carouselExampleControls" class="carousel slide" data-bs-interval="false">
                        
                            </div>
                            <a class="carousel-control carousel-control-prev" data-bs-target="#carouselExampleControls"
                                href="#slideCarousel" data-bs-slide="prev">
                                <img src='../assets/icons/arrow-left.png' class="img-fluid" alt="Responsive image">
                            </a>

                            <a href="#slideCarousel" class="carousel-control  carousel-control-next" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="next">

                                <img src='../assets/icons/arrow-right.png' class="img-fluid" alt="Responsive image">
                            </a>
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