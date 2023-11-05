<script setup>

import { ref } from "vue";
import SubscribeNewsletterModal from "./modals/SubscribeNewsletterModal.vue";

const isOpen = ref(false)
const emailRef = ref("")
const openModal = ()=>{
    isOpen.value=true;
}
const closeModal = ()=>{
    isOpen.value = false
  }

const scrollToTop = () =>{
    window.scrollTo(0, 0);


}
console.log(emailRef.value);

</script>

<template>
    <footer class="text-white text-center text-lg-start footer-container">

        <div class="container m-auto w-[90%]  md:w-[93%] grid-cols-1 sm:grid-cols-2   grid md:grid-cols-3 lg:grid-cols-4">
         
            <div class="flex flex-col">
                <router-link @click="scrollToTop" to="/">
                    <img src='../assets/icons/GRMI_logo.png' alt="Responsive image" width="183">
                </router-link>

                <div class="flex gap-4 mt-4 ml-2">
                <div>
                    <a href="https://www.linkedin.com/company/geohazards-risk-mapping-initiative/">
                        <img src='../assets/icons/Linkedin.png' alt="GRMI LINKEDIN">
                    </a>
                </div>
                <div>
                    <a href=https://twitter.com/GeohazardMaps>
                        <img src='../assets/icons/Twitter.png' alt="GRMI TWITTER">
                    </a>
                </div>
            </div>
            </div>
           

            <div class="flex flex-col merri items-start justify-start" >
                <div class="M20 white cabin" style="font-weight: 700;margin-bottom: 24px;">QUICKLINKS</div>

                <router-link class="M16 white links" @click="scrollToTop" to="/about" style="margin-bottom: 12px; font-weight: 300;">
                    About GRMI
                </router-link>

                <!-- <router-link class="M16  white links" @click="scrollToTop" to="/team" style="margin-bottom: 12px;">
                    <span>
                        Team
                    </span>
                </router-link> -->

                <router-link class="M16 white links text-nowrap" @click="scrollToTop" to="/news-and-media"
                    style="margin-bottom: 12px;">
                    <span>
                        News and Media
                    </span>
                </router-link>

                <router-link class="M16 white links" @click="scrollToTop" to="/completed-projects"
                    style="margin-bottom: 12px;">
                    <span>
                        Projects
                    </span>
                </router-link>

                <router-link class="M16 white links" @click="scrollToTop" to="/" style="margin-bottom: 12px;">
                    <span>
                        Portal
                    </span>
                </router-link>

                <router-link class="M16 white links" @click="scrollToTop" to="/">
                    <span style="font-weight: 300;">
                        Events
                    </span>
                </router-link>
            </div>

            <div class="flex flex-col justify-start items-start" >
                <div class="M20 white cabin" style="font-weight: 700;margin-bottom: 24px">CONTACT</div>
                <span class="M16 white merri">mails@georiskmap.org</span>
            </div>

            <section class="newsletter">
                
                            <div class="content" style="text-align: left;">
                                <div class="w-full white cabin text-[1.7rem] font-semibold" style="margin-bottom: 24px;">
                                    Subscribe to our Newsletter
                                </div>
                                <div class="input-group">
                                    <input v-model="emailRef"  type="email" class="form-control w-full p-3 text-black" placeholder="Enter your email">
                                </div>
                                
                                    <button @click="openModal" class="btn hover:opacity-70 font-semibold py-2 px-4" type="submit">
                                       
                                            Subscribe
                                        
                                        </button>
                               
                            </div>
                       
            </section>
        </div>

            <div class="flex merri text-center flex-col w-full justify-center items-center" style="margin-top: 114px;">
                <div class="M13 white d-flex justify-content-center mb-3">
                    2020 - 2023 georiskmap.org © ALL RIGHTS RESERVED
                    <!-- <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a> -->
                </div>
                <div class="M10 white d-flex justify-content-center">
                    Website designed by GRMI Technologies
                </div>
            </div>


       
    </footer>
    <SubscribeNewsletterModal :openModal="openModal" :emailAdd="emailRef.value" :isOpen="isOpen" :closeModal="closeModal" />
    
</template>
<style scoped>
.footer-container {
    background-color: #134A39;
    padding: 78px 0;
}

.newsletter-text {
    white-space: nowrap;
}

.newsletter .content {
    max-width: 650px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
}

.newsletter .content .form-control {
    height: 50px;
    border-color: #ffffff;
    border-radius: 6px;
}

.newsletter .content.form-control:focus {
    box-shadow: none;
    border: 2px solid #ffffff;
}

.btn {
    min-height: 52px;
    border-radius: 6px;
    background: #1A1A1A;
    margin-top: 16px;

}

.links-container .links {
    color: inherit;
    text-decoration: none;
}

@media (max-width: 1500px) {
    .newsletter-text {
        white-space: normal;
    }
}
</style>