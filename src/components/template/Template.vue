<template>
    <div class="template">
        <div class="template--image--top" :style="{'background-image' : 'url(' + require('./../../assets/img/' + img) + ')'}">

        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Template",
        data: () => ({
            img: 'seashipment.jpg'
        })
    }
</script>

<style scoped>
    .template{
        width: 100%;
        display: block;
    }
    .template--image--top{
        width: 100%;
        height: 16rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>