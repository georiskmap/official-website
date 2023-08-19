<script setup>
import CustomButton from './Buttons/Button.vue'

</script>

<template>
    <div class="hero-image">
        <div class="container" style="padding:78px 0;">
            <div class="row mt-4 d-flex justify-content-center">
                <div class="hero-text w-100">
                    <div class="C49 white" style="margin-bottom: 16px;max-width: 880px;">
                        We are always looking to expand our team. If you are a GIS Specialist we would love to work with
                        you.
                    </div>

                    <p class="M20 white" style="max-width: 1166px; margin-bottom: 32px;">
                        Promoting a sustainable environment through GEO Hazard Mapping Initiative is focused on deploying
                        volunteer
                        youths who are skilled at using Geographic Information Systems and satellite imagery analysis to
                        create
                        susceptibility and emergency mapping of actual or expected natural, biological, and technological
                        hazards
                        being experienced in Nigeria and other African countries as a result of Climate change.
                    </p>
                </div>
                <CustomButton class="M16 btn-success" btn-text="Get Involved" type="success" size="lg" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('../assets/icons/get_involved.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0 40px 0 40px;
}

.hero-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: white;
}

.hero-text button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 10px 25px;
    color: black;
    background-color: #ddd;
    text-align: center;
    cursor: pointer;
}

.hero-text button:hover {
    background-color: #555;
    color: white;
}
</style>