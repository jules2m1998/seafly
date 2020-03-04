<template>
    <v-btn class="white--text mt-3 img--code--bar" large/>
</template>

<script>
    export default {
        name: "GreenButtonCodeBar"
    }
</script>

<style scoped>
    .img--code--bar{
        background-image: url("./../../assets/img/seafly-line.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 196px;
        box-shadow: 1px 1px 1px white!important;
    }
</style>