<template>
    <div class="faq">
        <div class="left">
            <div class="faq--title">
                FAQ – Foire aux questions
            </div>
            <div class="faq--content">
                <div class="faq--question-item mb-7" v-for="(question, key) in links" :key="key">
                    <h3 style="font-weight: normal" class="mb-1"><router-link to="home" class="faq--question">{{ question.name}}</router-link></h3>
                    <router-link to="home" class="faq--question-more">Plus d'information ></router-link>
                </div>
            </div>
        </div>
        <div class="right">
            <Contact/>
        </div>
    </div>
</template>

<script>
    import data from "../../data/data-faq";
    import Contact from "../utils/Contact";
    export default {
        name: "Faq",
        components: {Contact},
        data: () => ({
            links: data.faqs
        })
    }
</script>

<style scoped>
    .faq{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .left{
        width: 70%;
    }
    .right{
        width: 30%;
    }
    .faq--title{

        font-size: 1.6em;
        margin: 0.67em 0;
        color: #ed120b;
        font-weight: bold;
    }
    .faq--question-item{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .faq--question-item a{
        display: block;
        border: red;
        text-decoration: none;
    }
    .faq--question-item a:hover{
        text-decoration: underline;
    }
    .faq--question-more{
        font-size: 0.87rem;
    }

    @media screen and (max-width: 798px){

        .faq{
            flex-direction: column;
            flex-wrap: wrap;
        }
        .left{
            width: 100%;
        }
        .right{
            width: 100%;
        }

    }
</style>