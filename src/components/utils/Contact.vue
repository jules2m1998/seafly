<template>
    <div class="template--contact">
        <div class="illustration" :style="{'background-image' : 'url(' + require('./../../assets/img/' + image) + ')'}" v-if="image !== undefined">

        </div>
        <div class="contact mt-3">
            <v-icon color="black" style="font-size: 1.8rem">phone</v-icon>
            <div class="number ml-3">089-666-6575</div>
        </div>
        <div class="description">
            <p>Notre experience de 20 ans a votre disposition pour votre envoi.</p>
        </div>
        <div class="buttons">
            <ButtonRedGreen/>
        </div>
    </div>
</template>

<script>
    import ButtonRedGreen from "./ButtonRedGreen";
    export default {
        name: "Contact",
        components: {ButtonRedGreen},
        props: ['image']
    }
</script>

<style scoped>

    .template--content .template--contact{
        width: 100%;
    }
    .template--contact .contact{
        width: 100%;
        display: flex;
    }
    .template--contact{
        margin-top: 3rem;
    }
    .template--contact .contact{
        color: #d91a31!important;
        font-size: 1.7rem;
    }

    .template--contact .description{
        font-size: 0.9em;
        display: block;
        width: 100%;
        float: left;
        padding: 0.5em 0 0 0;
    }

    .illustration{
        width: 100%;
        height: 14rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>