<script setup>
</script>

<template>
    <div class="container-section">
        <div class="container" style="padding:78px 0;">
            <div class="row mt-4">
                <div class="hero-text w-100">
                    <div class="C49 tertiary-900"> Our Vision</div>
                    <p class="M31 tertiary-900" style="margin-top: 27px;">
                        To promote a sustainable environment through the development, generating applications, and
                        dissemination of
                        Geohazard maps using advanced Geospatial Technology.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-section {
    background-color: #EAF7F3;
    padding: 0 120px 0 120px;

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
    /* position: absolute;
    top: 50%;
    left: 50%; */
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