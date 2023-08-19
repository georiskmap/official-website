<template>
    <div class="container-section">
        <div class="container" style="padding:78px 0;">
            <div class="row mt-4">

                <div class="hero-text w-100">
                    <div class="C49 white">Who are we?</div>
                    <p class="M25 white" style="margin: 40px 0 64px 0;">In line with the Sustainable Development Goal 11
                        (Sustainable Cities and Communities), Goal
                        13
                        (Climate
                        Action), and in line with one of the seven global targets for Sendai Framework for Disaster Risk
                        Reduction
                        which is to substantially increase the availability and access to multi-hazard early warning system
                        and
                        disaster risk information and assessment to people by 2030.
                        We decided to support the global objectives through the creation of “Geohazards Risk Mapping
                        Initiative”
                    </p>
                    <!-- <button>Hire me</button> -->
                </div>
                <div class="d-flex flex-row">
                    <div>
                        <img src="../assets/icons/who_are_we 1.png" class="img-fluid" alt="Responsive image">
                    </div>
                    <div style="margin: 0 34px 0 34px;">
                        <img src="../assets/icons/who_are_we 2.png" class="img-fluid" alt="Responsive image">
                    </div>
                    <div>
                        <img src="../assets/icons/who_are_we 3.png" class="img-fluid" alt="Responsive image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-section {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('../assets/icons/who_we_are_bg_image.png');
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
    /* height: 94vh; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0 120px 0 120px;

    /* position: relative; */
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

@media (max-width: 767px) {
    .container-section {
        padding: 0 60px 0 60px;
    }

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