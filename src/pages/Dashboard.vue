<script setup>
import {ref, onMounted} from "vue"
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue';
import Spinner from '../components/Spinner.vue';
import "../assets/styles/App.scss"

const isLoading = ref(true)

onMounted(() => {
    setTimeout(()=>{
        isLoading.value = false
    },3000)
})


</script>

<template>
    <Navbar />
    
    <div class="py-4 px-6 -z-0 mob:px-4" style="background-color: #353535;">
        <div class="h-[100vh] w-full grid place-items-center" v-if="isLoading">

            <Spinner/>
        </div>
        <div class="demo" v-if="!isLoading">
            <div class="">
                <div class="row text-center">
                    <!-- <div class="C49 text-white text-[3.08rem] font-semibold text-center">
                        Dashboard
                    </div> -->
                    <iframe src="https://www.arcgis.com/apps/dashboards/ed0c475906484b50b2e6afbccabb6fa7" frameborder="0" class="w-full min-h-screen my-4" ></iframe>
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
