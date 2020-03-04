<template>
    <div>
        <div class="button--contact mr-4 mt-4">
            <RedButton/>
            <GreenButton/>
        </div>
    </div>
</template>

<script>
    import GreenButton from "./GreenButton";
    import RedButton from "./RedButton";
    export default {
        name: "ButtonRedGreen",
        components: {RedButton, GreenButton}
    }
</script>

<style scoped>
    .button--contact{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 100%;
    }
    .button--contact .v-btn{
        width: 190px;
    }
</style>