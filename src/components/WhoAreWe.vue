<template>
    <div class="container-section flex justify-center items-center flex-col">
        <div class="hero-text text-white pt-12 py-6 md:py-8 mx-auto w-full md:w-[90%]">
                    <div class="text-[1.9rem] uppercase cabin text-center md:text-[3.06rem] font-semibold ">Who are we?</div>
                    <p class=" leading-8 text-center  merri md:leading-18 w-full text-[1rem] md:text-[1.32rem]" style="margin: 40px 0 64px 0;">In line with the Sustainable Development Goal 11
                        (Sustainable Cities and Communities), Goal
                        13
                        (Climate
                        Action), and in line with one of the seven global targets for Sendai Framework for Disaster Risk
                        Reduction
                        which is to substantially increase the availability and access to multi-hazard early warning system
                        and
                        disaster risk information and assessment to people by 2030. <br />
                        We decided to support the global objectives through the creation of “Geohazards Risk Mapping
                        Initiative”
                    </p>
                    <!-- <button>Hire me</button> -->
                </div>
                <div class="flex py-8 items-center justify-center  mb-20 w-full flex-col md:flex-row ">
                    <div class="flex   items-center justify-center">   
                        <div>
                        <img src="../assets/icons/who_are_we1.png" class="img-fluid" alt="Responsive image">
                    </div>
                    <div style="margin: 0 34px 0 34px;">
                        <img src="../assets/icons/who_are_we2.png" class="img-fluid" alt="Responsive image">
                    </div>
                    </div>
                    <div class="py-4">
                        <img src="../assets/icons/who_are_we3.png" class="img-fluid" alt="Responsive image">
                    </div>
                </div>
    </div>
</template>

<style scoped>
.container-section {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('https://res.cloudinary.com/waleszn/image/upload/v1695971150/HeroImage_zzqmhi.png');
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0 10px 0 10px;


}

.hero-text {
    max-width: 1488px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
 
    color: white;
}

@media (max-width: 767px) {
    .container-section {
        padding: 0 20px 0 20px;
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