<script setup>
import CustomButton from '../Buttons/Button.vue'

</script>

<template>
    <div class="connection-card">
        <div class="col-lg-12 col-sm-3 w-100">
            <div class="card text-white card-has-bg click-col" style="background-image:url('https://hdwallpaperim.com/wp-content/uploads/2017/08/25/128936-Turkey-Istanbul-building.jpg');
        background-size: cover; background-repeat: no-repeat;background-position: center;border-radius: 16px;">
                <img class="card-img d-none"
                    src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/128936-Turkey-Istanbul-building.jpg"
                    alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?">
                <div class="card-img-overlay d-flex flex-column">
                    <div class="card-body">
                    </div>
                    <div class="card-footer" style="padding: 0;">
                        <div class="media d-flex flex-column" style="padding: 0;">
                            <div class="media-body d-flex flex-column" style="align-items: flex-start;">
                                <div class="M20 white d-block" style="margin-bottom: 4px;">
                                    Benue
                                </div>
                                <div class="M10 white" style="margin-bottom: 8px;">
                                    Nigeria
                                </div>
                            </div>
                            <CustomButton class="M16 white btn-secondary" btn-text="View Maps" type="success" size="lg"
                                style="width: 100%;min-width: 100px;" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.connection-card {
    width: 354px;
    height: 480px;
}


@media only screen and (max-width:800px) {
    .connection-card {
        width: 100%;
        height: 250px;
        margin-bottom: 150px;
    }
}
</style>