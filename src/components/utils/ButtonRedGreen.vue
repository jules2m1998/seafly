<template>
    <div>
        <div class="button--contact mr-4 mt-4">
            <v-btn color="primary" class="mb-2" large>DEVIS GRATUIT</v-btn>
            <v-btn style="background: #47d037" class="white--text" large><img src="./../../assets/img/line-square.png" width="109px" alt=""></v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ButtonRedGreen"
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