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
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="col-lg-6 col-md-12 col-sm-6 mb-5">
                        <!-- <div class="our-team"> -->
                        <div class="pic hover:scale-105  duration-500">
                            <img src='https://upcdn.io/12a1yd9/image/mapanthon.png' class="img-fluid h-[26rem] w-[26rem]" alt="Responsive image">
                        </div>
                        <div class="C31 mt-3 max-w-[700px] uppercase text-[#134A39] text-[1rem] lg:text-[1.2rem] font-bold">
                            Volunteers from across the world come together to digitally map for Flood Risk Resilience in
                            Nigeria
                            in a Mapathon Event
                        </div>
                        <button class="bg-brandgreen text-white px-4 py-4 rounded-md font-bold">
                            View Publication
                        </button>
                        <!-- </div> -->
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-6">
                        <!-- <div class="our-team"> -->
                        <div class="pic hover:scale-105 duration-500">
                            <img  src='https://upcdn.io/12a1yd9/image/gis-day.png' class="img-fluid h-[26rem] w-[26rem]" alt="Responsive image">
                        </div>
                        <div class="C31 mt-3  uppercase text-[#134A39] max-w-[800px] text-[1rem] lg:text-[1.2rem] font-bold">
                            In commensuration of the GIS day, we decided to join the International Geospatial Community to celebrate by hosting a virtual event that brings together young scientists, GIS experts, DRR Experts and universities student.
                        </div>
                        <a href="https://storymaps.arcgis.com/stories/a34fab4b205048e6af22ec8df1f83e8e" target="_blank" >

                            <button  class="bg-brandgreen text-white px-4 py-4 rounded-md font-bold">
                                
                                Go to Story Map
                            </button>
                        </a>
                        <!-- </div> -->
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-6">
                        <!-- <div class="our-team"> -->
                        <div class="pic hover:scale-105 duration-500">
                            <img src='https://upcdn.io/12a1yd9/image/awareness.JPG' class="img-fluid h-[26rem] w-[26rem]" alt="Responsive image">
                        </div>
                        <div class="C31 mt-3  uppercase text-[#134A39]  text-[1rem] lg:text-[1.2rem] font-bold">
                            Improving flood preparedness for communities in Nigeria through the provision of flood early warning maps
                        </div>
                        <a href="https://globalplatform.undrr.org/conference-event/improving-flood-preparedness-communities-nigeria-through-provision-flood-early" target="_blank">
                            <button class="bg-brandgreen text-white px-4 py-4 rounded-md font-bold">
                            View Publication
                        </button>
                        </a>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-6">
                        <!-- <div class="our-team"> -->
                        <div class="pic hover:scale-105 duration-500">
                            <img src='https://upcdn.io/12a1yd9/image/pub-2.jpg' class="img-fluid h-[26rem] w-[26rem]" alt="Responsive image">
                        </div>
                        <div class="C31 mt-3  uppercase text-[#134A39]  text-[1rem] lg:text-[1.2rem] font-bold">
                            Humanitarian mapping exercise for improvement in HIV/AIDS & Gender-Based Violence (GBV) Projects in Nigeria
                        </div>
                        <a href="https://precisegis.com.ng/humanitarian-mapping-exercise-for-improvement-in-hiv-aids-gender-based-violence-gbv-projects-in-nigeria" target="_blank">
                            <button class="bg-brandgreen text-white px-4 py-4 rounded-md font-bold">
                            View Publication
                        </button>
                        </a>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-6">
                        <!-- <div class="our-team"> -->
                        <div class="pic hover:scale-105 duration-500">
                            <img src='https://upcdn.io/12a1yd9/raw/flood-risk.JPG' class="img-fluid h-[26rem] w-[26rem]" alt="Responsive image">
                        </div>
                        <div class="C31 mt-3  uppercase text-[#134A39]  text-[1rem] lg:text-[1.2rem] font-bold">
                            Mapping Flood Risk for Nigeria’s Internally Displaced People
                        </div>
                        <a href="https://precisegis.com.ng/humanitarian-mapping-exercise-for-improvement-in-hiv-aids-gender-based-violence-gbv-projects-in-nigeria" target="_blank">
                            <button class="bg-brandgreen text-white px-4 py-4 rounded-md font-bold">
                            View Publication
                        </button>
                        </a>
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
