<template>
    <div class="template">
        <div class="template--image--top">

        </div>
        <div class="template--content mt-3">
            <div class="template--description">
                <div class="title">Expédition DOM TOM</div>
                <div class="content">
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam commodi consectetur dolorem,
                        expedita inventore iste mollitia perspiciatis quia unde. Doloribus excepturi fugiat hic iusto
                        laborum minima quaerat tenetur velit!
                    </div>
                    <div>Accusamus accusantium cum, deserunt dolor dolore, esse id, iure molestias mollitia natus nemo
                        placeat quis ullam! Aliquam, atque consectetur cumque dolor dolores dolorum enim ex mollitia placeat
                        praesentium quasi tenetur.
                    </div>
                    <div>Ab alias delectus dignissimos repudiandae sequi sint! Amet cupiditate eius fugiat nostrum officia
                        quos rerum. Consequuntur dolores ducimus excepturi facere iste odit officiis qui quisquam, ut vero?
                        Dignissimos praesentium, sit.
                    </div>
                    <div>Ab amet architecto aut culpa dolore eaque facere illo, in iste labore maiores nihil numquam odit
                        perferendis quaerat quam quibusdam quisquam repellat sapiente voluptas. Dolore explicabo placeat
                        recusandae tempore veniam?
                    </div>
                    <div>Asperiores commodi dolor in inventore quo? Ad, aperiam atque culpa distinctio ducimus est
                        exercitationem explicabo inventore magni nemo nulla officia omnis quisquam reiciendis repellat sequi
                        sint soluta totam ut voluptate.
                    </div>
                </div>
            </div>
            <div class="template--contact">
                <div class="contact">
                    <v-icon color="black" style="font-size: 1.8rem">phone</v-icon>
                    <div class="number ml-3">690981056</div>
                </div>
                <div class="description">
                    <p>Notre experience de 20 ans a votre disposition pour votre envoi.</p>
                </div>
                <div class="buttons">
                    <ButtonRedGreen/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ButtonRedGreen from "../utils/ButtonRedGreen";
    export default {
        name: "Template",
        components: {ButtonRedGreen}
    }
</script>

<style scoped>
    .template{
        width: 100%;
        display: block;
    }
    .template--image--top{
        width: 100%;
        height: 16rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('./../../assets/img/international.jpg')
    }
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
</style>