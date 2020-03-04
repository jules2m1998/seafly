<template>
    <div class="contact">
        <div class="left">
            <div class="contact--title">
                <h3>Contactez Nous</h3>
            </div>
            <div class="contact--content" v-for="(item, key) in contacts" :key="key">
                <div class="contact--sub--title">{{ item.title }}</div>
                <div class="contact--para" v-for="(subitem, subkey) in item.content" :key="subkey">
                    {{ subitem}}
                </div>
                <div class="link" v-if="key === 0"> Lien Google Maps : <router-link to="home">Sea Fly Services Co., Ltd.</router-link> </div>
            </div>
            <GreenButtonCodeBar/>
            <Map/>
        </div>
        <div class="right pr-3">
            <FormContact/>
        </div>
    </div>
</template>

<script>

    import GreenButtonCodeBar from "../utils/GreenButtonCodeBar";
    import Map from "../utils/Map";
    import FormContact from "./FormContact";
    export default {
        name: "Contact",
        components: {FormContact, Map, GreenButtonCodeBar},
        data: () => ({
            contacts: [
                {
                    title: 'Sea Fly Services Co., Ltd.',
                    content: '93/1 Soi Pracharat Bamphen 6 (Soi Suntornsiri)\n' +
                        'Huaikwang, Bangkok\n' +
                        'Thailand 10310\n' +
                        'Tel: +66(0) 26903523 - 7'
                },
                {
                    title: 'Département commercial\n',
                    content: 'Tel: 66(0) 26903523 - 7\n' +
                        'Email: sales@seafly-services.com\n'
                },
                {
                    title: 'Heures d\'ouvertures',
                    content: 'Du Lundi au Vendredi\n' +
                        '09:00 - 17:30'
                },
            ]
        }),
        mounted() {
            this.contact_spliter();
            this.$parent.$data.img = 'seashipment.jpg'
        },
        methods: {
            contact_spliter () {
                for (let i = 0; i < this.contacts.length; i++) {
                    this.contacts[i].content = this.contacts[i].content.split('\n')
                }
            }
        }
    }
</script>

<style scoped>
    .contact--title{
        font-size: 1.6em;
        margin: 0.67em 0;
        color: #ed120b;
        font-weight: bold;
    }
    .contact--sub--title{
        font-size: 1em;
        margin: 0.4em 0;
        color: #ed120b;
        font-weight: bold;
    }
    .contact--para{
        font-size: 0.85rem;
    }
    .contact{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .contact .left{
        width: 65%;
    }
    .contact .right{
        width: 35%;
    }

    @media screen and (max-width: 700px){

        .template--content{
            flex-direction: column;
            flex-wrap: wrap;
        }
        .contact .left{
            width: 100%;
        }
        .contact .right{
            width: 100%;
        }

    }
</style>