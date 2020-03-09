<template>
    <div class="convertion">
        <div class="convertion--title">
            Spécifications sur les Conteneurs
        </div>
        <p>Le terme "poids volumétrique", parfois appelé "dim" ou encore poids dimensionnel, est employé par rapport à l'espace que prend un colis dans l’avion. Il peut coûter plus cher que le poids réel ( ou brut ) du paquet.
            Vous devrez calculer le poids dimensionnel sur chaque expédition, et comparer cela à son poids brut.
            Enfin le poids le plus conséquent des deux déterminera le poids taxable ou chargeable, donc votre coût d'expédition
        </p>
        <p class="mt-12">
            Utilisez ces tableaux si vous devez convertir des livres en kilogramme ou encore pieds et pouces en cm.
        </p>
        <div class="conversion--kg-cm">
            <div class="conversion--header grey lighten-3">
                <h2 class="ma-2">Conversion en kilogramme</h2>
                <h2 class="ma-2">Conversion en cm</h2>
            </div>
            <div class="conversion--content mt-4">
                <div class="item">
                    <v-text-field
                            label="Ibs"
                            outlined
                            class="mr-2"
                    />
                    <div class="egal" style="font-size: 2rem">=</div>
                    <v-text-field
                            label="Kg"
                            outlined
                            class="ml-2"
                    />
                </div>
                <div class="item">
                    <v-text-field
                            label="ft"
                            outlined
                            class="mr-2"
                    />
                    <v-text-field
                            label="in"
                            outlined
                            class="mr-2"
                    />
                    <div class="egal" style="font-size: 2rem">=</div>
                    <v-text-field
                            label="Centimètre"
                            outlined
                            class="ml-2"
                    />
                </div>
            </div>
            <p>Pour les expéditions légères le poids volumétrique sera utilisé si celui-ci excède le poids réel (en kilogrammes).
                Pour calculer le poids volumétrique, il faut entrer la largeur, la longueur et la hauteur de votre colis (en centimètres) dans les champs ci-dessous et appuyer sur le bouton calcul.</p>
        </div>
        <div class="conversion--kg-cm">
            <div class="conversion--header grey lighten-3">
                <h2 class="ma-2">Conversion du Poids volumétrique</h2>
            </div>
            <div class="conversion--content mt-4">
                <div class="item">
                    <v-text-field
                            label="Longueur (cm)"
                            outlined
                            class="mr-2"
                    />
                    <v-text-field
                            label="Largeur (cm)"
                            outlined
                            class="mr-2"
                    />
                    <v-text-field
                            label="Longueur (cm)"
                            outlined
                            class="mr-2"
                    />
                    <div class="egal" style="font-size: 2rem">=</div>
                    <v-text-field
                            label="Volume (cm3)"
                            outlined
                            class="ml-2"
                    />
                </div>
                <div class="item">
                    <v-text-field
                            label="Poids volumique (Kg)"
                            outlined
                            class="mr-2"
                    />
                </div>
            </div>
            <h2 class="mt-4">CALCUL DU POIDS DE VOLUME SUR LE FRET AÉRIEN :</h2>

            <h3 class="mt-4 mb-3">- Exemple :</h3>
            <p>
                40 x 48 x 60 cm, poids brut = 5 kilogrammes
                Le poids volume est : 40 x 48 x 60 = 115.200 volumes (cm³)
                Le volume kilogramme est de 115.200 / 6.000 = 19.2
                Votre poids de volume est plus élevé que le poids réel (19.2 kilogrammes contre 5 kilogrammes), donc, votre poids imputable sera de 19.5 kilogrammes.
                Le poids de chargement de la compagnie aérienne est calculé en fonction des deux poids réel et volume, c'est-à-dire  : 6m³ = 1000 kg (poids de volume).
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Conversion"
    }
</script>

<style scoped>
    .convertion--title{
        font-size: 1.6em;
        margin: 0.67em 0;
        color: #ed120b;
        font-weight: bold;
    }
    .conversion--kg-cm .conversion--header,.conversion--kg-cm .conversion--content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        box-sizing: border-box;
        grid-gap: 1rem;
    }
    .conversion--kg-cm .conversion--content .item{
        display: flex;
        flex-direction: row;
    }
</style>