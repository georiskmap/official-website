<script setup>
import CustomButton from './Buttons/Button.vue'

</script>

<template>
    <div class="hero-image flex justify-center items-center">
        <div class="hero-text w-full flex justify-center items-center">
                    <div class="flex max-w-[700px] items-center justify-center mb-4 ">
                        <h5 class="text-[1.5rem] md:text-[1.8rem] font-semibold  lg:text-[2.4rem] white">We are always looking to expand our team. If you are a GIS Specialist we would love to work with
                        you.</h5>
                    </div>

                    <p class="M20 max-w-[900px]  lg:text-[1rem] leading-12 text-center" >
                        Join us in this vital endeavor as we work together to promote a sustainable environment, 
                        
                        safeguarding present and future generations from the adverse effects of climate change. 
                        
                        Your skills and knowledge could be the linchpin in shaping a resilient Africa, fortified 
                        
                        against the trials of geohazards.
                    </p>

                    <button class="btn shadow-sm  bg-brandgreen  mt-8">
                    Get Involved
                </button>
                </div>
             
    </div>
</template>

<style scoped>
.hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('../assets/icons/get_involved.png');
    background-position: center;
    background-repeat: no-repeat;
    height: 70vh;
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

.btn {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 12px 30px;
    color:white;
    
    text-align: center;
    cursor: pointer;
}

.hero-text .btn:hover {
    background-color: #555;
    color: white;
}
</style>