<template>
    <div class="template--content mt-3">
        <div class="template--description">
            <div class="title">{{ page.title }}</div>
            <div class="content">
                <div class="-paragraph" v-for="(items, keys) in spliter(page.paragraph)" :key="keys">
                    <div v-if="Array.isArray(items)">
                        <p v-for="(item, key) in items" :key="key" :class="{'para--title': item.includes('---title---'), 'para--underline': item.includes('---underline---')}">
                            {{ item.replace('---title---', '').replace('---underline---','')}}
                        </p>
                    </div>
                    <div v-if="!Array.isArray(items)">
                            {{ items }}
                    </div>
                </div>
            </div>
        </div>
        <div class="template--contact">
            <div class="illustration" :style="{'background-image' : 'url(' + require('./../../assets/img/' + page.imgSub) + ')'}" v-if="page.imgSub !== undefined">

            </div>
            <div class="contact mt-3">
                <v-icon color="black" style="font-size: 1.8rem">phone</v-icon>
                <div class="number ml-3">02-690-3523</div>
            </div>
            <div class="description">
                <p>Notre experience de 20 ans a votre disposition pour votre envoi.</p>
            </div>
            <div class="buttons">
                <ButtonRedGreen/>
            </div>
        </div>
    </div>
</template>

<script>
    import ButtonRedGreen from "../utils/ButtonRedGreen";
    import data from "../../data/data";
    export default {
        name: "Description",
        components: {
            ButtonRedGreen
        },
        data: () => ({
            page: {}
        }),
        mounted() {
            this.loadPage();
            this.$parent.$data.img = this.page.imgHead;
        },
        methods: {
            spliter (txt) {
                let h = txt.split('\n\n');
                for (let i = 0; i < h.length; i++){
                    h[i] = h[i].split('\n');
                }
                return h;
            },
            loadPage() {

                let route = this.$route.params.name;
                data.description.forEach(value => {
                    if (value.name === route){
                        this.page = value;
                    }
                });
            }
        },
        watch: {
            $route(){
                this.loadPage();
                this.$parent.$data.img = this.page.imgHead;
            }
        }
    }
</script>

<style scoped>

    .template--content{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .template--content .template--image--top{
        width: 80%;
    }
    .template--content .template--description{
        width: 70%;
    }
    .template--content .template--contact{
        width: 30%;
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
    .template--description{
        color: #565656;
        font-size: 0.95em;
        padding: 0 0 2em;
    }
    .template--contact .description{
        font-size: 0.9em;
        display: block;
        width: 100%;
        float: left;
        padding: 0.5em 0 0 0;
    }
    .template--description .title{
        font-size: 1.6em;
        margin: 0.67em 0;
        color: #ed120b;
        font-weight: bold;
    }
    .illustration{
        width: 100%;
        height: 14rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .content{
        margin: 0 0 1em;
        line-height: 1.2em;
    }
    .para--title{
        color: #2a2a2a;
        font-weight: bold;
    }
    .para--underline{
        text-decoration: underline;
    }
</style>