<template>
    <span>
        <div>
            <Gallery/>
        </div>
        <div class="table--col mt-1">
            <div class="item" v-for="item2 in table" :key="item2.name">
                <h3 class="title">{{ item2.name }}</h3>
                <div class="content" :class="{separed: item2.img !== false}">
                    <div :class="{left: item2.img !== false}">
                        {{ item2.text }}
                    </div>
                    <div class="right" v-if="item2.img !== false">
                        <img src="../../assets/img/homepromotion.jpg" alt="">
                    </div>
                    <div class="button mt-4" v-if="item2.buttons">
                        <v-btn color="primary" :to="{name: 'devis'}">DEVIS GRATUIT</v-btn>
                        <v-btn style="background: #47d037" class="white--text ml-3" width="150px"><img src="./../../assets/img/line-square.png" width="90px" alt=""></v-btn>
                    </div>
                </div>
                <div class="footer">
                    <router-link :to="item2.link"><v-icon color="primary">arrow_right</v-icon>{{ item2.bottomTitle}}</router-link>
                </div>
            </div>
        </div>
    </span>
</template>

<script>
    import Gallery from "./Gallery";
    export default {
        name: "Home",
        components: {Gallery},
        data: () => ({
            table: [
                {
                    name: 'Promotions',
                    text: 'Découvrez les promotions actuelles pour les expéditions ou services pour profiter des meilleures offres.',
                    img: true,
                    link: {name: 'promos'},
                    bottomTitle: 'Tout afficher'
                },
                {
                    name: 'Expédition Dom Tom',
                    text: 'Nouvelle Calédonie (Nouméa), La Réunion, Martinique, Guadeloupe, nous déservons toutes ces destinations.',
                    img: false,
                    link: {name: 'desc', params: {name: 'expedition-dom-tom'}},
                    bottomTitle: 'Plus d\'informations'
                },
                {
                    name: 'Obtenez votre cotation\n',
                    text: 'Utilisez notre formulaire pour nous fournir les détails de votre demande nous reviendrons vers vous le plus tôt possible pour vous accompagner.\n',
                    img: false,
                    link: {name: 'contact'},
                    buttons: true,
                    bottomTitle: 'Nous contacter'
                }
            ]
        })
    }
</script>

<style scoped>
    .separed{
        display: grid!important;
        grid-template-columns: 2fr 1fr;
        margin-right: 1rem;
    }
    .separed .right img{
        width: 100%;
    }
    .image--gallery .img .img--hover, .image--gallery2 .img .img--hover{
        position: absolute;
        left: 100%;
        background-color: #2b548a;
        height: 100%;
        opacity: .95;
        transition: .1s ease;
        z-index: 1;
        width: 100%;
    }
    .table--col{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        box-sizing: border-box;
        color: #565656;
    }
    .table--col .item{
        width: 100%;
        height: 18rem;
        border-left: 1px solid #dddddd;
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
    }
    .table--col .item .title{
        display: block;
        font-size: 1.1em;
        padding: 1em 0 1em 1em;
        font-weight: bold;
    }
    .table--col .item .content{
        display: block;
        padding: 0.5em 0 1.5em 1em;
        height: 10rem;
    }
    .table--col .item .footer{
        display: block;
        border-top: 1px solid #dddddd;
        text-indent: 1.5em;
        padding: 1em 0 1em;
        border-top: 1px solid #dddddd;
    }
    .table--col .item .footer a{
        text-decoration: none;
        font-weight: normal;
    }
    .table--col .item:last-child{
        border-right: 1px solid #dddddd;
    }
    .button{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    @media screen and (max-width: 1297px){

        .table--col{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media screen and (max-width: 625px){

        .table--col{
            grid-template-columns: 1fr;
        }
    }
    @media screen and (max-width: 680px){

        .button{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
    @media screen and (max-width: 400px){

        .button{
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin-right: 2rem;
            margin-bottom: 1rem;
        }
        .button button{
            font-size: 0.6rem;
        }
    }
</style>