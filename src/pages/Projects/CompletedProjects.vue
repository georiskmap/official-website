<script setup>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import Card from '../../components/Cards/Card.vue'
import "../../assets/styles/App.scss"

</script>

<template>
    <Navbar />
    <div style="background-color: #EAF7F3;padding: 135px 120px 50px 120px;min-height: 100vh;">
        <div>
            <div class="row text-center mb-5">
                <div class="C49 text-center">
                    COMPLETED
                </div>
            </div>

            <div class="row justify-content-center" style="min-width: 300px;">
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
