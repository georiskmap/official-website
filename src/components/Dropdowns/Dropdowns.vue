<template>
    <li class="nav-item dropdown">
        <a class="nav-link white rotate-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            {{ buttonText }}
            <img src="../../assets/icons/arrow-down.png" class="img-fluid bi-arrow-down arrow-default"
                alt="Responsive image">
            <img src="../../assets/icons/arrow-up.png" class="img-fluid bi-arrow-up arrow-open" alt="Responsive image">
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"
            style="padding: 48px;margin:0;background-color: white;white-space: nowrap;">
            <slot></slot>
        </ul>
    </li>
</template>
  
<script>
export default {
    props: {
        buttonText: {
            type: String,
            required: true
        },
    },
}
</script>
  
<style scoped>
.arrow-open {
    display: none;
}

.rotate-arrow.show .arrow-open {
    display: inline;
}

.rotate-arrow.show .arrow-default {
    display: none;
}
</style>