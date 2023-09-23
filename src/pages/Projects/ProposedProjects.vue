<script setup>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import Card from '../../components/Cards/Card.vue'
import "../../assets/styles/App.scss"

</script>

<template>
    <Navbar />
    <div class="py-12 px-8 md:px-20 md" style="background-color: #EAF7F3;min-height: 100vh;">
        <div>
            <div class="row text-center mb-5">
                <div class="C49 cabin text-[3rem] uppercase font-bold text-center">
                    Proposed PROJECTS
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" >
                <Card class="custom-card" />
                <Card class="custom-card" />
                <Card class="custom-card" />
                <Card class="custom-card" />
                <Card class="custom-card" />
                <Card class="custom-card" />
                <Card class="custom-card" />
                <Card class="custom-card" />
                <Card class="custom-card" />
                <Card class="custom-card" />

            </div>

        </div>
    </div>
    <Footer />
</template>


<style scoped>
.custom-card {
    margin-bottom: 24px;
}
</style>
