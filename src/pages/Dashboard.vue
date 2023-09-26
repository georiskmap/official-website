<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue';
import "../assets/styles/App.scss"

</script>

<template>
    <Navbar />
    <div class="py-4 px-6 -z-0 " style="background-color: #353535;">

        <div class="demo">
            <div class=" md:px-9">
                <div class="row text-center">
                    <div class="C49 text-white text-[3.08rem] font-semibold text-center">
                        Dashboard
                    </div>
                    <!-- <h1 class="heading-title"> Our Team Style </h1> -->
                </div>

              
            </div>
        </div>
    </div>
    <Footer />
</template>


<style scoped>
.our-team {
    /* box-shadow: 0 0 1px 1px rgb(0 0 0 / 15%); */
    text-align: center;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in-out 0s;
    margin-top: 50px;
}

/* .our-team .pic:before {
    content: "";
    background: #716a9e;
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
    opacity: 0.78;
    transform: scale(0);
    transition: all 0.3s ease-in-out 0s;
} */


.our-team .pic img {
    width: 100%;
    height: auto;
}

/* .images-container .item {
    width: 50%;
    height: auto;
    padding-top: 54px;
    display: inline-block;
    background-size: cover;
    background-position: center;
}

.images-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    resize: both;
    overflow: auto;
} */
</style>
