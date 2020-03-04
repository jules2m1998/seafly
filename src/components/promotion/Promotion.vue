<template>
    <div class="mb-4">
        <div class="promos--title">Promotions actuelles</div>
        <div class="promos--content">
            <div class="promo-item" v-for="(item,key) in promos" :key="key">
                <router-link :to="item.img.to" class="promo--img--link" :style="{'background-image' : 'url(' + require('./../../assets/img/promos/' + item.img.directory) + ')'}"/>
                <router-link :to="item.title.link" class="promo--title">{{ item.title.text }}</router-link>
                <router-link :to="item.more.link" class="promo--more"><v-icon color="primary">arrow_right</v-icon> Plus d'informations</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import promotions from './../../data/data-promotion';
    export default {
        name: "Promotion",
        data: () => ({
            promos: promotions.promotions
        }),
        mounted() {
            this.$parent.$data.img = 'hamburg-3021820_640.jpg'
        }
    }
</script>

<style scoped>
    .promos--title{
        font-size: 1.6em;
        margin: 0.67em 0;
        color: #ed120b;
        font-weight: bold;
    }
    .promos--content{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: left;
        box-sizing: border-box;
        padding-top: 5px;
    }
    .promo-item{
        width: 327px;
        display: flex;
        flex-direction: column;
        height: 280px;
        box-shadow: 0 0 4px 1px #00000029;
        border-radius: 0.2rem;
        margin: 6px;
    }
    .promo--img--link{
        width: 100%;
        height: 250px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .promo--title{
        color: #ed120b;
        font-weight: bold;
        font-size: 0.9rem;
        margin: 5px 5px 5px 6px;
        text-align: center;
    }
    .promo--more{
        margin: 5px 0 5px 6px;
        font-size: 0.8rem;
        text-decoration: none;
    }
</style>