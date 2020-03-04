<template>
    <div class="template--content mt-3">
        <div class="template--description pr-7">
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
        <div class="left">
            <Contact :image="page.imgSub" v-if="page.showContact === undefined"/>
        </div>
    </div>
</template>

<script>
    import data from "../../data/data";
    import Contact from "../utils/Contact";
    export default {
        name: "Description",
        components: {
            Contact

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
    .template--content .template--description{
        width: 70%;
    }
    .template--description{
        color: #565656;
        font-size: 0.95em;
        padding: 0 0 2em;
    }
    .template--description .title{
        font-size: 1.6em;
        margin: 0.67em 0;
        color: #ed120b;
        font-weight: bold;
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
    .left{
        width: 30%;
    }
    @media screen and (max-width: 798px){

        .template--content{
            flex-direction: column;
            flex-wrap: wrap;
        }
        .template--content .template--description{
            width: 100%;
        }
        .left{
            width: 100%;
        }

    }
</style>