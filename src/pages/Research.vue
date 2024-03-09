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

const researchs = [
    {
        link: 'https://www.graphyonline.com/archives/archivedownload.php?pid=IJEES-187',
        title: `Where would be Flooded in 2021: A Geospatial Analysis of Flood Susceptibility in Amuwo Odofin, Lagos State, Nigeria`,
        formatTitle: truncate(`sambus news letter`,11),
        src: 'paper4.jpeg',
        id: 1
    },
    {
        link: 'https://www.researchgate.net/publication/366634874_I_lost_all_I_had_to_the_flood_A_Post-Disaster_Assessment_of_the_2018_Kogi_State_Flood_in_Nigeria?enrichId=rgreq-75e721bb7a21c9f65223340874132830-XXX&enrichSource=Y292ZXJQYWdlOzM2NjYzNDg3NDtBUzoxMTQzMTI4MTEwOTgyMjk1OUAxNjcyMjIyNjg0MzMy&el=1_x_3&_esc=publicationCoverPdf',
        title: `A Post-Disaster Assessment of the 2018 Kogi State Flood in Nigeria`,
        formatTitle: truncate(`sambus news letter`,11),
        src: 'paper5.jpeg',
        id: 2
    },
    {
        link: 'https://www.researchsquare.com/article/rs-1721944/v1',
        title: `Flood Susceptibility Mapping of Internally Displaced Persons Camps in Maiduguri, Borno State Nigeria`,
        formatTitle: truncate(`sambus news letter`,11),
        src: 'paper3.jpeg',
        id: 3
    },
    {
        link: 'https://drive.google.com/file/d/19S1gZ97LBZ4BtP5sh8A3LVW-Q_2afiW2/view?usp=sharing',
        title: `GEOSPATIAL MAPPING OF FLOOD HAZARD USING MULTI-CRITERIA APPROACH IN FUFORE LOCAL GOVERNMENT AREA, NORTH EASTERN NIGERIA`,
        formatTitle: truncate(`sambus news letter`,11),
        src: 'paper2.jpeg',
        id: 5
    },
    {
        link: 'https://link.springer.com/article/10.1007/s40808-021-01197-2',
        title: `Multi-criteria modelling of drought: a study of Brandenburg Federal State, Germany`,
        formatTitle: truncate(`sambus news letter`,11),
        src: 'paper1.jpeg',
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
                   Research Papers
                </div>
            </div>

            <div class="">
                <div class="">
                    <div class="grid grid-cols-2 mob:grid-cols-1 gap-6">
                        <a :href="card.link" v-for="card in researchs" :key="card.id" class=" transition p-4 rounded-[0.5rem] cursor-pointer" target="_blank">
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
