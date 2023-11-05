<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import "../assets/styles/App.scss"

</script>

<template>
    <Navbar />
    <div class="py-4 px-6 cursor-pointer" style="background-color: #EAF7F3;">

        <div class="demo">
            <div class=" md:px-9">
                <div class="row text-center">
                    <div class="C49 text-[#0E0E0E] text-[3.08rem] font-semibold text-center">
                        Our Team
                    </div>
                    <!-- <h1 class="heading-title"> Our Team Style </h1> -->
                </div>

                <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    <div class="">
                        <div class="our-team">
                            <div class="pic">
                                <img src='https://res.cloudinary.com/waleszn/image/upload/q_30/v1695971771/teams1_tegln8.png' alt="">
                            </div>
                            <div class="font-bold cabin text-xl mt-3">
                                Taiwo Ogunwumi
                            </div>
                            <div class="M16 merri tracking-wide mt-2">
                                PRESIDENT
                            </div>
                        </div>
                    </div>

                    
                    <div class="col-md-3 col-sm-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src='https://res.cloudinary.com/waleszn/image/upload/q_30/v1695971835/teams2_fodjrw.png' alt="">
                            </div>
                            <div class="font-bold text-xl mt-3">
                                Opeyemi Olatunde
                            </div>
                            <div class="M16 tracking-wide mt-2">
                                CHIEF OPERATING OFFICER
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src='https://res.cloudinary.com/waleszn/image/upload/v1695971901/teams3_ijaaee.png' alt="">
                            </div>
                            <div class="font-bold text-xl mt-3">
                                Opeyemi Olatunde
                            </div>
                            <div class="M16 tracking-wide mt-2">
                                CHIEF OPERATING OFFICER
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src='https://res.cloudinary.com/waleszn/image/upload/v1695971984/teams6_vnjvqc.png' alt="">
                            </div>
                            <div class="font-bold text-xl mt-3">
                                Opeyemi Olatunde
                            </div>
                            <div class="M16 tracking-wide mt-2">
                                CHIEF OPERATING OFFICER
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src='https://res.cloudinary.com/waleszn/image/upload/v1695971910/teams4_l9nfjd.png' alt="">
                            </div>
                            <div class="font-bold text-xl mt-3">
                                Opeyemi Olatunde
                            </div>
                            <div class="M16 tracking-wide mt-2">
                                CHIEF OPERATING OFFICER
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src='https://res.cloudinary.com/waleszn/image/upload/v1695971910/teams4_l9nfjd.png' alt="">
                            </div>
                            <div class="font-bold text-xl mt-3">
                                Opeyemi Olatunde
                            </div>
                            <div class="M16 tracking-wide mt-2">
                                CHIEF OPERATING OFFICER
                            </div>
                        </div>
                    </div>

                  
                    <div class="col-md-3 col-sm-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src='https://res.cloudinary.com/waleszn/raw/upload/v1695972050/teams7_l7bbii.png' alt="">
                            </div>
                            <div class="font-bold text-xl mt-3">
                                Opeyemi Olatunde
                            </div>
                            <div class="M16 tracking-wide mt-2">
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

/* .raws-container .item {
    width: 50%;
    height: auto;
    padding-top: 54px;
    display: inline-block;
    background-size: cover;
    background-position: center;
}

.raws-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    resize: both;
    overflow: auto;
} */
</style>
