<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
// import Card from '../components/Cards/Card.vue'
import "../assets/styles/App.scss"

function wordsLen(str) { 
    const array = str.trim().split(/\s+/); 
    return array.length; 
}

function truncate(str, no_words) {
    wordsLen(str)
    let lengtofWord = wordsLen(str)
    if (lengtofWord > no_words){
        return str.split(" ").splice(0,no_words).join(" ") + `...`;
    } else {
        return str
    }
}

const events = [
    {
        link: 'https://www.youtube.com/embed/HQ6flMqteBU'+ '?iv_load_policy=3&playsinline=1&rel=0',
        title: truncate(`Taiwo Ogunwunmi Discusses Impact, Recovery, and Mitigation of Flooding in Nigeria on Radio Now`,20),
        src: '',
        id: 1
    },
    {
        link: 'https://www.youtube.com/embed/wSnlIembLZk'+ '?iv_load_policy=3&playsinline=1&rel=0',
        title: truncate(`Flood susceptibility mapping of internally displaced persons camps in Maiduguri, Borno state Nigeria. Presented during the Water@Leeds seminar: Global Flood Risk Assessment, December 8th, 2022`,20),
        src: '',
        id: 2
    },
    {
        link: 'https://www.youtube.com/embed/CkJej36o1vU'+ '?iv_load_policy=3&playsinline=1&rel=0',
        title: truncate(`GRMI GIS DAY 2021`,20),
        src: '',
        id: 3
    },
    {
        link: 'https://www.youtube.com/embed/iUIT_wdx3Qs'+ '?iv_load_policy=3&playsinline=1&rel=0',
        title: truncate(`Taiwo Ogunwumi Talks to TVC on the need for Effective Flood Emergency Response in Nigeria`,20),
        src: '',
        id: 4
    },
    
    
]


</script>

<template>
    <Navbar />
    <div class="py-8 px-8 lg:py-20 lg:px-20 mob:px-4" style="background-color: #EAF7F3;min-height: 100vh;">
        <div>
            <div class="row text-center mb-5">
                <div class="text-[3.08rem] font-extrabold cabin uppercase">
                   Events
                </div>
            </div>

            <div class="">
                <div class="grid grid-cols-temp2 gap-6 midDesk:grid-cols-1">
                    <article v-for="event in events" :key="event.id" id="card" class=" shadow-md shadow-primary500 hover:shadow-brandgreen transition grid grid-rows-row h-full gap-4 p-4 rounded-[0.5rem] cursor-pointer">
                        <div class="pic hover:scale-105 transition mob:basis-6/12">
                            <iframe class="w-full h-full rounded-[0.5rem]" :src="event.link" title="{{ event.title }}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div class="flex flex-col justify-between gap-4">
                            <div class="C31 mt-30 uppercase text-[#134A39] text-[1rem] lg:text-[0.9rem] font-bold w-full mob:text-[0.7rem]">
                               {{ event.title }}
                            </div>
                            <a href="https://youtu.be/CkJej36o1vU?si=iP9_68tBR94u0Znx" class="bg-primary500 p-3 rounded-[0.5rem] text-white hover:text-tertiary  transition font-bold w-[50%] text-center mx-auto cursor-pointer mob:text-[0.7rem]">Watch on Youtube</a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>


<style scoped>


#card {
    box-shadow: 10rem 10rem 10rem var(brandgray);
}

</style>
