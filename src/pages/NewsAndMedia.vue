<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
// import Card from '../components/Cards/Card.vue'
import "../assets/styles/App.scss"

</script>

<template>
    <Navbar />
    <div class="py-8 px-8 lg:py-20 lg:px-20" style="background-color: #EAF7F3;min-height: 100vh;">
        <div>
            <div class="row text-center mb-5">
                <div class="text-[3.08rem] font-extrabold cabin ">
                    NEWS AND MEDIA
                </div>
            </div>

            <div class="">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="col-lg-6 col-md-12 col-sm-6 mb-5">
                        <!-- <div class="our-team"> -->
                        <div class="pic hover:scale-105 duration-500">
                            <img src='../assets/icons/newsAndMedia1.png' class="img-fluid" alt="Responsive image">
                        </div>
                        <div class="C31 mt-3 uppercase text-[#134A39] text-[1.6rem] lg:text-[2rem] font-bold">
                            Volunteers from across the world come together to digitally map for Flood Risk Resilience in
                            Nigeria
                            in a Mapathon Event
                        </div>
                        <!-- </div> -->
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-6">
                        <!-- <div class="our-team"> -->
                        <div class="pic hover:scale-105 duration-500">
                            <img src='../assets/icons/newsAndMedia2.png' class="img-fluid" alt="Responsive image">
                        </div>
                        <div class="C31 mt-3 uppercase text-[#134A39] max-w-[800px] text-[1.6rem] lg:text-[2rem] font-bold">
                            IMPROVING FLOOD PREPAREDNESS FOR COMMUNITIES IN NIGERIA THROUGH THE PROVISION OF FLOOD EARLY
                            WARNING
                            MAPS
                        </div>
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>


<style scoped>
.custom-card {
    margin-bottom: 24px;
}

/* .our-team .pic img {
    width: 100%;
    height: auto;
} */
</style>
