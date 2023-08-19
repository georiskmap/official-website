<script setup>
import Card from './Cards/Card.vue'
</script>

<template>
    <div class="container-section">
        <div class="container" style="padding:78px 0;">
            <div class="row">
                <div class="hero-text w-100">
                    <div class="C49 tertiary-900 mb-4">
                        APPS AND DATA
                    </div>
                </div>

                <div class="w-100 images-container">
                    <div class="col-12">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-interval="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <!-- MAKE THIS DIV FLEX IN DESKTOP AND BLOCK IN MOBILE -->
                                    <div class="card-container">
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="card-container">
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                </div>
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
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-section {
    background-color: #EAF7F3;
}


@media (max-width: 767px) {
    .images-container {
        padding: 0;
    }

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

.hero-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: white;
}


.carousel {
    padding: 0 60px;
}

.card-container {
    display: flex;
    gap: 1%;
}

@media only screen and (max-width:800px) {
    .card-container {
        display: block;
        gap: 0%;

    }

    .carousel {
        margin: 0;
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