<script setup>
</script>

<template>
    <div class="container-section">
        <div class="" style="padding:78px 0;">
            <div class="hero-text w-full">
                    <div class="text-tertiary font-semibold text-[1.5rem] md:text-[2.4rem] cabin text-center mb-8">OUR MISSION</div>
                </div>
                
                <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                    <div  class="text-center flex justify-center items-center flex-col">
                            <img src='../assets/icons/our_mission1.png' class="img-fluid" alt="Responsive image">
                            <div class="text-textgreen merri text-[1.2rem]" style="max-width: 354px; margin-top: 34px;">
                                Identify
                                locations
                                in
                                Nigeria
                                and other African
                                countries susceptible to
                                various geohazards.</div>
                        </div>

                        <div class="text-center flex justify-center items-center flex-col">
                            <img src='../assets/icons/our_mission2.png' class="img-fluid" alt="Responsive image">
                            <div class="M20 merri text-textgreen text-[1.2rem]" style="max-width: 354px; margin-top: 34px;">
                                Produce Hazard
                                susceptibility
                                and prediction maps
                                at a local scale.</div>
                        </div>

                    <div  class="text-center flex justify-center items-center flex-col">
                            <img src='../assets/icons/our_mission3.png' class="img-fluid" alt="Responsive image">
                            <div class="M20 merri text-textgreen text-[1.2rem]" style="max-width: 354px; margin-top: 34px;">
                                Share with
                                Disaster
                                and
                                Emergency Management
                                Institutions, Government
                                Ministries, Community Leaders and Other
                                Environmental response stakeholders</div>
                        </div>

                        <div  class="text-center flex justify-center items-center flex-col">
                            <img src='../assets/icons/our_mission4.png' class="img-fluid" alt="Responsive image">
                            <div class="M20 merri text-textgreen text-[1.2rem]" style="max-width: 354px; margin-top: 34px;">
                                Use of maps for
                                efficient
                                disaster preparedness,
                                risk management and early
                                warning planning.</div>
                        </div>
                    </div>
              
        </div>
    </div>
</template>

<style scoped>
.container-section {
    padding: 0 120px 0 120px;
}



@media (max-width: 767px) {
    .container-section {
        padding: 0 20px 0 20px;
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