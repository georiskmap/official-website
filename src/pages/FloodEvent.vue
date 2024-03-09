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
    if (lengtofWord > 12){
        return str.split(" ").splice(0,no_words).join(" ") + `...`;
    } else {
        return str
    }
}

const floodEvents = [
    {
        link: 'https://www.arcgis.com/apps/webappviewer/index.html?id=2b0fa66b05534e7780e7396234b7c6f3',
        title: 'Flood Susceptibility Map of Ikorodu',
        formatTitle: truncate(`Global Flood Risk Assessment - Regional Realities`,11),
        src: 'floodmap3.jpeg',
        id: 1,
        tag: 'map'
    },
    {
        link: 'https://africageoportal.maps.arcgis.com/apps/webappviewer/index.html?id=d07dba63dbd84fbbb555d6c6087759f3',
        title: `Flood Susceptibility Map of Ilorin`,
        formatTitle: truncate(`using geospatial technology in geohazard mapping saves lives`,11),
        src: 'floodmap2.jpeg',
        id: 3,
        tag: 'map'
    },
    {
        link: 'https://africageoportal.maps.arcgis.com/apps/webappviewer/index.html?id=7cba8204d65c4ceda63c7c89e632606b',
        title: `Flood Susceptibility Map of Maiduguri City`,
        formatTitle: truncate(`All about GRMI hashnode mapathon`,11),
        src: 'floodmap1.jpeg',
        id: 4,
        tag: 'map'
    },
    {
        link: 'https://africageoportal.maps.arcgis.com/apps/webappviewer/index.html?id=1205a4ecde984a55841f93e837828a70',
        title: `Flood Susceptibility Map of Ilorin`,
        src: 'ins20.png',
        id: 2,
        tag: 'map'
    },
    {
        link: 'https://storymaps.arcgis.com/stories/39d5b1d1e2114b74aebdf8fe73ecb993',
        title: `Strengthening Community Resilience through Collaborative Geo-Hazard Risk Mapping in Jos North, Nigeria`,
        formatTitle: truncate(`Strengthening Community Resilience through Collaborative Geo-Hazard Risk Mapping in Jos North, Nigeria`,11),
        src: 'ins7.png',
        tag: 'storymap',
        id: 7
    },
    {
        link: 'https://storymaps.arcgis.com/stories/528572dd623141589a03bbba059df683',
        title: `Mapping of Flood-Prone Areas in Kogi State Nigeria`,
        formatTitle: truncate(`Strengthening Community Resilience through Collaborative Geo-Hazard Risk Mapping in Jos North, Nigeria`,11),
        src: 'ins21.png',
        tag: 'storymap',
        id: 7
    },
    
]

    const getImgUrl = (path) => {
        return new URL(`../../public/${path}`, import.meta.url).href;
    };
</script>

<template>
    <Navbar />
    <div class="py-8 px-8 lg:py-20 lg:px-20 mob:px-4" style="background-color: #EAF7F3;min-height: 100vh;">
        <div>
            <div class="row text-center mb-5">
                <div class="text-[2.8rem] md:text-[3.08rem] font-extrabold cabin uppercase">
                   flood maps
                </div>
            </div>

            <div class="">
                <div class="">
                    <div class="grid grid-cols-2 mob:grid-cols-1 gap-6">
                        <a :href="card.link" v-for="card in floodEvents" :key="card.id" class=" transition p-4 rounded-[0.5rem] cursor-pointer" target="_blank">
                            <div class="pic hover:scale-105 duration-500">
                                <img :src="getImgUrl(card.src)" class="img-fluid overflow-hidden h-[15rem] w-full object-fill rounded-t-[0.5rem]" alt="Responsive image">
                            </div>
                            <div class="C31 mt-3 uppercase text-[#134A39] text-[1rem] lg:text-[1rem] font-bold mob:text-[0.7rem]">
                                 {{ card.title }}
                            </div>
                            <div class="bg-brandgreen text-white px-4 py-4 rounded-md font-bold hover:bg-primary500  transition w-[40%] text-center mx-auto cursor-pointer text-[0.7rem] uppercase mt-4">
                                view {{ card.tag }}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>


<style scoped>

</style>
