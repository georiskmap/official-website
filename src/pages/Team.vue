<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import "../assets/styles/App.scss"

</script>

<template>
    <Navbar />
    <div style="background-color: #EAF7F3;padding: 135px 120px;">

        <div class="demo">
            <div class="container">
                <div class="row text-center">
                    <div class="C49 text-center">
                        Our Team
                    </div>
                    <!-- <h1 class="heading-title"> Our Team Style </h1> -->
                </div>

                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src='../assets/icons/teams1.png' alt="">
                            </div>
                            <div class="C31 mt-3">
                                Taiwo Ogunwumi
                            </div>
                            <div class="M16 mt-2">
                                PRESIDENT
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src='../assets/icons/teams2.png' alt="">
                            </div>
                            <div class="C31 mt-3">
                                Opeyemi Olatunde
                            </div>
                            <div class="M16 mt-2">
                                CHIEF OPERATING OFFICER
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer > </Footer>
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
