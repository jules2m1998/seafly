<template>
    <div class="FormContact">
        <form action="">
            <h2 class="form--contact--title">Nous contacter</h2>
            <v-text-field
                    solo
                    label="Nom"
                    prepend-inner-icon="person"
            />
            <v-text-field
                    solo
                    label="Email"
                    prepend-inner-icon="email"
            />
            <v-text-field
                    solo
                    label="Téléphone"
                    prepend-inner-icon="phone"
            />
            <v-text-field
                    solo
                    label="Société"
                    prepend-inner-icon="folder"
            />
            <v-textarea
                    outlined
                    name="input-7-4"
                    label="Votre message"
                    value=""
            />
            <v-btn color="blue" class="mb-5" dark large>Envoyer</v-btn>
        </form>
    </div>
</template>

<script>
    export default {
        name: "FormContact"
    }
</script>

<style scoped>
    .FormContact{
        width: 100%;
        margin: 35px 10px;
        box-shadow: 0px 3px 10px -2px rgba(64, 61, 61, 0.6);
        padding: 10px;
    }
    .form--contact--title{
        margin-top: 10px;
        margin-bottom: 15px;
    }
</style>