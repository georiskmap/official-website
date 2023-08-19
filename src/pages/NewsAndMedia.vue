<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
// import Card from '../components/Cards/Card.vue'
import "../assets/styles/App.scss"

</script>

<template>
    <Navbar />
    <div style="background-color: #EAF7F3;padding: 135px 120px 50px 120px;min-height: 100vh;">
        <div>
            <div class="row text-center mb-5">
                <div class="C49 text-center">
                    NEWS AND MEDIA
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-6 mb-5">
                        <!-- <div class="our-team"> -->
                        <div class="pic">
                            <img src='../assets/icons/newsAndMedia 1.png' class="img-fluid" alt="Responsive image">
                        </div>
                        <div class="C31 mt-3">
                            Volunteers from across the world come together to digitally map for Flood Risk Resilience in
                            Nigeria
                            in a Mapathon Event
                        </div>
                        <!-- </div> -->
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-6">
                        <!-- <div class="our-team"> -->
                        <div class="pic">
                            <img src='../assets/icons/newsAndMedia 2.png' class="img-fluid" alt="Responsive image">
                        </div>
                        <div class="C31 mt-3">
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
