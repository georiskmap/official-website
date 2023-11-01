<template>
    <nav class="flex flex-col merri w-fit text-[13px] rounded-md items-center justify-between">
        <ul
            class="flex flex-col z-50 absolute  top-[10.5%] right-1 bottom-0 w-fit space-y-4 bg-brandgreen text-black p-4 lg:hidden">
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