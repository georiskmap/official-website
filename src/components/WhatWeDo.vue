<script setup>

</script>

<template>
    <div>
        <div class="container-section">
            <div class="container" style="padding:78px 0;">
                <div class="row mt-4">

                    <div class="hero-text w-100">
                        <div class="C49 white" style="margin-bottom: 55px;">What we do</div>
                        <p class="M31 white">
                            GeoHazards Risk Mapping Initiative is focused on deploying volunteer youths who are skilled at
                            using
                            Geographic
                            Information Systems and satellite imagery analysis to create susceptibility and emergency
                            mapping of
                            actual
                            or
                            expected natural, biological, and technological hazards being experienced in Nigeria and other
                            African
                            countries
                            as a result of Climate Change.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* .wrapper {
    max-height: 100px;
} */

.container-section {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('../assets/icons/what_we_do.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 0 120px;

}

@media (max-width: 767px) {
    .container-section {
        padding: 0 60px 0 60px;
    }

}


.hero-text {
    max-width: 1488px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    /* position: absolute; */
    /* top: 50%; */
    /* left: 50%; */
    /* transform: translate(-50%, -50%); */
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