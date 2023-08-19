<script setup>
</script>

<template>
    <div class="container-section">
        <div class="container" style="padding:78px 0;">
            <div class="row mt-4">

                <div class="hero-text w-100">
                    <div class="C49 tertiary-900 mb-4">OUR MISSION</div>
                </div>
                
                <div class="w-100 images-container">
                    <div class="col-lg-6 col-md-6 mb-4 mb-md-0" style="display: flex; flex-direction: row;">
                        <div class="text-center">
                            <img src='../assets/icons/our_mission 1.png' class="img-fluid" alt="Responsive image">
                            <div class="M20 primary-900" style="max-width: 354px; margin-top: 34px;">
                                Identify
                                locations
                                in
                                Nigeria
                                and other African
                                countries susceptible to
                                various geohazards.</div>
                        </div>

                        <div class="text-center">
                            <img src='../assets/icons/our_mission 2.png' class="img-fluid" alt="Responsive image">
                            <div class="M20 primary-900" style="max-width: 354px; margin-top: 34px;">
                                Produce Hazard
                                susceptibility
                                and prediction maps
                                at a local scale.</div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6 mb-4 mb-md-0" style="display: flex; flex-direction: row;">
                        <!-- <div class="d-flex w-100 justify-content-between"> -->

                        <div class="text-center">
                            <img src='../assets/icons/our_mission 3.png' class="img-fluid" alt="Responsive image">
                            <div class="M20 primary-900" style="max-width: 354px; margin-top: 34px;">
                                Share with
                                Disaster
                                and
                                Emergency Management
                                Institutions, Government
                                Ministries, Community Leaders and Other
                                Environmental response stakeholders</div>
                        </div>

                        <div class="text-center">
                            <img src='../assets/icons/our_mission 4.png' class="img-fluid" alt="Responsive image">
                            <div class="M20 primary-900" style="max-width: 354px; margin-top: 34px;">
                                Use of maps for
                                efficient
                                disaster preparedness,
                                risk management and early
                                warning planning.</div>
                        </div>
                    </div>
                </div>
                <!-- </div> -->
                <!-- </div> -->
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-section {
    padding: 0 120px 0 120px;
}

.images-container {
    display: flex;
    flex-direction: row;
}

@media (max-width: 767px) {
    .container-section {
        padding: 0 60px 0 60px;
    }

    .images-container {
        display: flex;
        flex-direction: column;
    }

}

.hero-text {
    /* padding: 0 120px 0 120px; */
    /* max-width: 1488px; */
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