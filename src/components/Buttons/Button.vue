<template>
    <button type="button" class="btn" :class='[computedType, computedOutline, computedSize, computedActive, computeBlock]'
        :style="style">{{ btnText }}</button>
</template>
  
<script>
// import "bootstrap/dist/css/bootstrap.css";

export default {
    name: 'CustomButton',
    props: {
        btnText: {
            type: String,
            default: 'Button',
        },
        size: {
            type: String,
            default: 'md',
        },
        type: {
            type: String,
            default: 'primary',
        },
        outline: {
            type: Boolean,
            default: false,
        },
        active: {
            type: Boolean,
            default: false,
        },
        block: {
            type: Boolean,
            default: false,
        },
        style: {
            type: Object,
            default: () => ({})
        }
        // active: {
        //     type: Function,
        //     default: () => { },
        // },
        // ["btnText", "size", "type", "outline", "active", "block"]
    },
    computed: {
        computedType: function () {
            return "btn-" + this.type;
        },
        computedOutline: function () {
            return "btn-outline-" + this.outline;
        },
        computedSize: function () {
            return "btn-" + this.size;
        },
        computedActive: function () {
            return this.active === "true" ? "active" : "";
        },
        computeBlock: function () {
            return this.block === "true" ? "btn-block" : "";
        },
    }
};
</script>
  