<template>
    <footer>
        <v-container>
            <div class="footer--items align--item">
                <div class="footer--item" :style="{width: item.width + '%'}" v-for="(item, key) in footers" :key="key">
                    <div class="footer--item--title">
                        <h3>{{ item.name }}</h3>
                    </div>
                    <div class="footer--item--content">
                        <ul>
                            <li v-for="(subitem , key) in item.links" :key="key"><router-link :to="subitem.to">{{ subitem.name }}</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="footer--item" style="width: 23%">
                    <div class="footer--item--title">
                        <h3>Nous Contacter</h3>
                    </div>
                    <div class="footer--item--content">
                        <div class="footer--item--subtitle">
                            Sea Fly Services Co., Ltd.
                        </div>
                        <div class="align--item">
                            <ul style="width: 65%">
                                <li v-for="contact in contacts" :key="contact"><a href="#">{{ contact }}</a></li>
                                <li>
                                    <v-btn class="ma-2 white--text" x-small fab color="facebook">
                                        <v-icon>fab fa-facebook-f</v-icon>
                                    </v-btn>
                                    <v-btn class="ma-2 white--text" x-small fab color="linkedin">
                                        <v-icon>fab fa-linkedin-in</v-icon>
                                    </v-btn>
                                </li>
                            </ul>
                            <div class="map pr-3" style="width: 35%">
                                <img src="./../assets/img/bottom-map.jpg" alt="" style="width: 100%">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer--item" style="width: 25%; border-right: 1px solid #dddddd;">
                    <div class="footer--item--title">
                        <h3>Nos réseaux</h3>
                    </div>
                    <div class="footer--item--content">
                        <div class="footer--item--content">
                            <div class="align--item">
                                <img src="./../assets/img/ftcc-logo.png">
                                <img src="./../assets/img/east-west.jpg">
                                <img src="./../assets/img/5star-logo.jpg">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer--bar"><div class="footer--copy">©Sea Fly Services - 2018 tous droits réservés.</div><div class="footer--dev">Developper par
                    <a href="#">CkikDev.cm</a></div></div>
            </div>
        </v-container>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data: () => ({
            footers: [
                {
                    name: 'Notre société',
                    links: [
                        {
                            name: 'Notre Société',
                            to: 'about'
                        }
                        ,
                        {
                            name: 'Promotions',
                            to: {name: 'promos'}
                        }
                        ,
                        {
                            name: 'Carrière',
                            to: {name: 'desc', params: {name: 'career'}}
                        }
                        ,
                        {
                            name: 'Nous Contacter',
                            to: {name: 'contact'}
                        }
                    ],
                    width: 12
                },
                {
                    name: 'Nos Services',
                    links: [
                        {
                            name: 'Fret Maritime',
                            to: {name: 'desc', params: {name: 'fret-maritime'}}
                        },
                        {
                            name: 'Fret Aérien',
                            to: {name: 'desc', params: {name: 'fret-aerien'}}
                        },
                        {
                            name: 'Service lettre, petit colis express',
                            to: {name: 'desc', params: {name: 'colis-express'}}
                        },
                        {
                            name: 'Déménagements',
                            to: {name: 'desc', params: {name: 'demenagements-internationaux'}}
                        },
                        {
                            name: 'Formalités Douanières',
                            to: {name: 'desc', params: {name: 'formalites-douanieres'}}
                        },
                        {
                            name: 'Transport Frontalier',
                            to: {name: 'desc', params: {name: 'transports-frontaliers'}}
                        },
                    ],
                    width: 20
                },
                {
                    name: 'Outils & Ressourcesfo',
                    links: [
                        {
                            name: 'Conversions Volumétriques',
                            to: 'transports-frontaliers'
                        },
                        {
                            name: 'Incoterms',
                            to: 'transports-frontaliers'
                        },
                        {
                            name: 'Spécifications sur les Conteneurs',
                            to: 'transports-frontaliers'
                        },
                    ],
                    width: 20
                }
            ],
            contacts: [
                '93/1 Soi Suntornsiri, Huaikwang,',
                'Bangkok,Thailand 10310',
                'Tel: +66(0) 26903523 - 7'
            ]
        })
    }
</script>

<style scoped>
    .align--item{
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .footer--items{
        padding: 0 0 0;
        border-bottom: 6px solid #ed120b;
        width: 100%;
    }
    li a:hover{
        color: blue;
        /*696245709*/
    }
    .footer--item{
        font-size: 0.85em;
        min-height: 200px;
        color: #d6d6d6;
        border-left: 1px solid #dddddd;
        border-top: 3px solid #bbbbbb;
    }
    .footer--item--title h3{
        font-size: 1em;
        color: #444444;
        margin: 0 0 0.5em;
        padding: 1em 0.5em;
        border-bottom: 1px solid #dddddd;
        background: #f9f9f9;
        font-weight: bold;
    }
    .footer--item .footer--item--content ul{
        padding: 0 0.5em 0 0.5em!important;
    }
    .footer--item .footer--item--content ul li{
        list-style: none;color: #ed120b;
        text-decoration: none;
        padding: 0
    }
    .footer--item .footer--item--content ul li a{
        color: #ed120b;
        text-decoration: none;
    }
    .footer--item--subtitle{
        font-size: 1em;
        color: #555555;
        margin: 0 0 0.5em;
        padding: 0.2em 0.5em;
        font-weight: bold;
    }
    .footer--copy{
        font-size: 0.8em;
        padding: 0.8em 0 0.8em 0.5em;
        color: #9899ac;
    }
    .footer--bar{
        border: 1px solid #dddddd;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        box-sizing: border-box;
        text-align: center;
    }
    .footer--item--content img{
        width: 50%;
    }
    .footer--dev{
        font-size: 0.8em;
        padding: 0.8em .5em 0.8em 0.5em;
        text-align: center;
    }
    @media screen and (max-width: 839px){
        .footer--item{
            width: 50%!important;
            border-bottom: 1px solid #dddddd;
        }
    }
    @media screen and (max-width: 460px){

        .footer--dev{
            width: 100%;
            text-align: center;
            padding-top: 0!important;
        }

        .footer--copy{
            width: 100%;
            text-align: center;
            padding-bottom: 1px!important;
        }
    }
    @media screen and (max-width: 450px){
        .footer--item{
            width: 100%!important;
            border-bottom: 1px solid #dddddd;
        }
    }
</style>