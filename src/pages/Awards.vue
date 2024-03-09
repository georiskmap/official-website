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

const awards = [
    
    {
        link: 'https://nigerianyouthsdgs.org/world-environment-day-six-young-people-advocating-for-a-sustainable-future-and-healthier-climate-in-nigeria/',
        title: `World Environment Day: Six Young People Advocating for a Sustainable Future and Healthier Climate in Nigeria`,
        formatTitle: truncate(`youth led initiative tackles nigeria's flood crisis`,11),
        src: 'award1.jpeg',
        id: 2
    },
    {
        link: 'https://www.geospatialworld.net/rising-stars/2022/pdf/50-Rising-Star-Booklet.pdf',
        title: `50 rising stars of the Geospatial industry for 2022`,
        formatTitle: truncate(`humanitarian mapping exercise for improvement in hiv aids gnder based violence projects in nigeria`,11),
        src: 'award2.jpeg',
        id: 3
    },
    {
        link: 'https://www.facebook.com/UNVolunteersng/posts/hi-the-race-to-becoming-the-winner-of-unv-nigeria-volunteers-country-award-is-st/185076013835190/',
        title: `UNV Nigeria Volunteers Country Award`,
        formatTitle: truncate(`using geospatial technology in geohazard mapping saves lives`,11),
        src: 'award3.jpeg',
        id: 4
    },
    {
        link: 'https://www.un.org/youthenvoy/youthleadsolutions-climate/',
        title: `Climate Action and Biodiversity Session at #YouthLead Innovation Festival`,
        formatTitle: truncate(`All about GRMI hashnode mapathon`,11),
        src: 'award4.jpeg',
        id: 5
    },  
    {
        link: 'https://drive.google.com/file/d/15xlhc-fDQCWkAzIFMqUfdp9Yz7-VUvmh/view?usp=sharing',
        title: `Recognition Letter from the United Nations Secretary-General’s Envoy on Youth`,
        formatTitle: truncate(`All about GRMI hashnode mapathon`,11),
        src: 'award5.jpeg',
        id: 6
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
                   Awards and Recognition
                </div>
            </div>

            <div class="">
                <div class="">
                    <div class="grid grid-cols-2 mob:grid-cols-1 gap-6">
                        <a :href="card.link" v-for="card in awards" :key="card.id" class=" transition p-4 rounded-[0.5rem] cursor-pointer" target="_blank">
                            <div class="pic hover:scale-105 duration-500">
                                <img :src="getImgUrl(card.src)" class="img-fluid overflow-hidden h-[15rem] w-full object-fill rounded-t-[0.5rem]" alt="Responsive image">
                            </div>
                            <div class="C31 mt-3 uppercase text-[#134A39] text-[1rem] lg:text-[1rem] font-bold mob:text-[0.7rem]">
                                 {{ card.title }}
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
.custom-card {
    margin-bottom: 24px;
}

/* .our-team .pic img {
    width: 100%;
    height: auto;
} */
</style>
