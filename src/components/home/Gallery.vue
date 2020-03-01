<template>
    <nav>
        <div class="image--gallery mt-1">
            <div class="img img--left" v-for="item1 in gallery.left" :key="item1.name" :class="'img-' + item1.position">
                <div class="title ml-1 mt-1">{{ item1.name }}</div>
                <div class="img--hover">
                    <div class="title ml-1 mt-1">{{ item1.name }}</div>
                    <div class="description-item ml-2 mt-1">{{ item1.description }}</div>
                    <v-btn outlined color="white" class="ml-3 mt-1" x-small>Plus d'information</v-btn>
                </div>
            </div>
            <div class="img img--right" v-for="item2 in gallery.right" :key="item2.name" :class="'img-1' + item2.position">
                <div class="hover--head">
                    <div class="ml-1 subtitle" v-if="item2.is_expd">Expédition</div>
                    <div class="title ml-1">{{ item2.name }}</div>
                </div>
                <div class="img--hover">
                    <div class="description-item ml-3 mt-3">{{ item2.description }}</div>
                    <v-btn outlined color="white" class="ml-3 mt-1" x-small>Plus d'information</v-btn>
                </div>
            </div>
        </div>
</nav>
</template>

<script>
    export default {
        name: "Gallery",
        data: () => ({
            gallery: {
                left: [
                    {
                        name: 'Fret Maritime',
                        description: 'Envoyez votre marchandise par Conteneur (Conteneur complet/groupage). Groupage vers toutes les destinations.',
                        route: '',
                        position: 1,
                    },
                    {
                        name: 'Fret Aérien',
                        description: 'Besoin d\'un service rapide, nous nous occupons de tout Aéroports commerciaux dans le monde pour un service rapide.',
                        route: '',
                        position: 2,
                    },
                    {
                        name: 'Service lettre, petit colis express',
                        description: '3-5 jours de transport, service porte à porte par service courrier vers toutes destinations.',
                        route: '',
                        position: 3,
                    },
                    {
                        name: 'Déménagements',
                        description: 'Nous pouvons vous aider dans toutes vos démarches de l\'emballage à l\'envoi, documents jusqu\'à votre nouvelle destination.',
                        route: '',
                        position: 4,
                    }
                ],
                right: [
                    {
                        name: 'Formalités Douanières',
                        description: 'Nous vous conseillons sur les formalités douanières, et le processus d\'import/export.',
                        route: '',
                        position: 1,
                    },
                    {
                        name: 'Transport Frontalier',
                        description: 'Grâce à notre réseau, nous organisons des transports frontaliers avec la Birmanie, Laos, Vietnam, Cambodge.',
                        route: '',
                        position: 2,
                    },
                    {
                        name: 'FRANCE',
                        is_expd: true,
                        description: 'Equipe francophone, un service d\'expéditon plus simple et efficace.',
                        route: '',
                        position: 3,
                    },
                    {
                        name: 'DOM TOM',
                        is_expd: true,
                        description: 'Nouvelle Calédonie (Nouméa), La Réunion, Martinique, Guadeloupe, nous déservons toutes ces destinations.',
                        route: '',
                        position: 4,
                    },
                    {
                        name: 'CHINE',
                        is_expd: true,
                        description: 'Un envoi de Chine, nous organisons chacun des aspects du transport à des prix compétitifs.',
                        route: '',
                        position: 5,
                    },
                    {
                        name: 'Expédition à l\'International',
                        description: '',
                        route: '',
                        position: 6,
                    }
                ],
            },
        })
    }
</script>

<style scoped>
    .image--gallery{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        width: 100%;
        grid-gap: 0.2rem;
        grid-template-areas:
                'img-1 img-1 img-2 img-2 img-11 img-12'
                'img-1 img-1 img-2 img-2 img-11 img-12'
                'img-1 img-1 img-2 img-2 img-13 img-14'
                'img-3 img-3 img-4 img-4 img-13 img-14'
                'img-3 img-3 img-4 img-4 img-15 img-16'
                'img-3 img-3 img-4 img-4 img-15 img-16'
    ;
        box-sizing: border-box;
    }

    .image--gallery .img{
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }
    .img--left{
        height: 15rem;
    }
    .image--gallery .img--left .title{
        color: #ffffff!important;
        font-size: 1rem;
        padding: 2px!important;
        -webkit-appearance: none!important;
        text-shadow: 0px 2px 2px rgba(100, 100, 100, 0.9);
        z-index: 2;
    }

    .image--gallery .img .img--hover .description-item{
        font-size: 1rem;
        line-height: 1.3em;
        color: rgba(255,255,255,.7);
        margin-bottom: 0.6rem;
        padding-right: 1rem;
        width: 100%;
        text-shadow: 1px 0 14px black;
    }

    .image--gallery .img--right .img--hover .description-item{
        color: rgba(255,255,255,.9);
        font-size: 0.85rem;
        line-height: 1.3em;
        margin-bottom: 0.3rem;
    }

    .image--gallery .img--right .hover--head .title{
        color: #ffffff!important;
        font-size: 0.5rem;
        padding: 2px!important;
        text-shadow: 0px 2px 2px rgba(100, 100, 100, 0.9);
    }

    .image--gallery .img--right .hover--head .subtitle{
        color: #ffffff!important;
        font-size: 0.8rem;
        padding: 2px!important;
        -webkit-appearance: none!important;
        text-shadow: 0px 2px 2px rgba(100, 100, 100, 0.9);
    }

    .image--gallery .img .img--hover{
        position: absolute;
        top: 0;
        left: 100%;
        background-color: #2b548a;
        height: 100%;
        opacity: .95;
        transition: .1s ease;
        z-index: 1;
        width: 100%;
    }
    .image--gallery .img:hover .img--hover{
        left: 0;
    }

    .img-1{
        grid-area: img-1;
        background-image: url("./../../assets/img/seashipment.jpg");
    }
    .img-2{
        grid-area: img-2;
        background-image: url("./../../assets/img/airshipment.jpg");
    }
    .img-3{
        grid-area: img-3;
        background-image: url("./../../assets/img/doortodoor.jpg");
    }
    .img-4{
        grid-area: img-4;
        background-image: url("./../../assets/img/removal.jpg");
    }
    .img-11{
        grid-area: img-11;
        background-image: url("./../../assets/img/customs.jpg");
    }
    .img-12{
        grid-area: img-12;
        background-image: url("./../../assets/img/crossborder.jpg");
    }
    .img-13{
        grid-area: img-13;
        background-image: url("./../../assets/img/france.jpg");
    }
    .img-14{
        grid-area: img-14;
        background-image: url("./../../assets/img/domtom.jpg");
    }
    .img-15{
        grid-area: img-15;
        background-image: url("./../../assets/img/china.jpg");
    }
    .img-16{
        grid-area: img-16;
        background-image: url("./../../assets/img/international.jpg");
    }



    @media screen and (max-width: 700px){

        .image--gallery{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            width: 100%;
            grid-gap: 0.2rem;
            grid-template-areas:
                    'img-1'
                    'img-2'
                    'img-3'
                    'img-4'
                    'img-16'
        ;
        }

        .img-11{
            display: none;
        }
        .img-12{
            display: none;
        }
        .img-13{
            display: none;
        }
        .img-13{
            display: none;
        }
        .img-14{
            display: none;
        }
        .img-15{
            display: none;
        }
        .img-16{
            height: 15rem;
        }

    }
</style>