<template>
    <nav class="flex flex-col merri w-fit border border-[red] text-[13px] rounded-md items-center justify-between">
        <div id="overlay" class="fixed top-0 backdrop-blur-sm bg-[rgba(0,0,0,0.5)] w-screen h-full">
        </div>
        <ul
            class="flex flex-col z-50 fixed h-screen  top-0 right-0 bottom-0 w-[600px] max-w-[90%] space-y-4 bg-brandgreen text-black p-4 lg:hidden pt-20">
            <li v-for="navlink in NavData" :key="navlink.name">
                <div>
                    <h3 class="text-primary500 font-bold ">
                        {{ navlink.name }}
                    </h3>
                    <p class="ml-4 text-white " v-for="single in navlink.links" :key="single.id">
                        <router-link :to="single.to">
                            {{ single.desc }}
                        </router-link>

                    </p>
                </div>
            </li>
        </ul>
    </nav>
</template>
  
<script setup>
import NavData from "../utils/NavConstants"



</script>