<script>

</script>
<template>
    <div class="spin"></div>
</template>
<style scoped>
    .spin {
        display: block;
        width: 70px;
        height: 70px;
        margin: 30px auto;
        border: 5px solid transparent;
        border-radius: 50%;
        border-top-color: white;
        animation: spin 1s ease-in-out infinite;
    }

    @keyframes spin {
        to { transform: rotateZ(360deg)}
    }
</style>