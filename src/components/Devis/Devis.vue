<template>
    <div class="devis">
        <div class="devis--title">
            Devis d’envoi
        </div>
        <p>Veuillez utiliser ce formulaire pour votre demande d'envoi.</p>
        <div class="form">
            <div class="top--form">
                <div class="left">
                    <div class="item">
                        <div class="form--subtitle">Départ</div>
                        <div class="depart--form">
                            <v-select
                                    ref="country"
                                    v-model="country"
                                    :items="countries"
                                    label="Pays"
                                    placeholder="--- Sélectionner votre pays ---"
                            />
                            <v-text-field
                                    label="Lieu d'enlèvement"
                                    prepend-inner-icon="place"
                                    outlined
                            />
                        </div>
                    </div>
                    <div class="item">
                        <div class="form--subtitle">Information</div>
                        <v-text-field
                                label="Marchandise"
                                prepend-inner-icon="info"
                                outlined
                        />
                        <div class="grid-51">
                            <v-text-field
                                    label="Poids"
                                    prepend-inner-icon="info"
                                    outlined
                            />
                            <v-select
                                    :items="poids"
                                    label="Unité"
                                    outlined
                            />
                        </div>
                        <div class="grid-51">
                            <v-text-field
                                    label="Volume"
                                    prepend-inner-icon="info"
                                    outlined
                            />
                            <v-select
                                    :items="volumes"
                                    label="Unité"
                                    outlined
                            />
                        </div>
                        <v-select
                                ref="country"
                                v-model="country"
                                :items="countries"
                                label="Type de l'emballage"
                                placeholder="--- Sélectionner votre type d'emballage ---"
                                style="position: relative; top: -7px"
                        />
                        <v-textarea
                                outlined
                                name="input-7-4"
                                label="Dimension"
                                value=""
                                placeholder="Veuillez nous informer les dimensions (si possible)"
                        />
                    </div>
                </div>
                <div class="right">
                    <div class="item">
                        <div class="form--subtitle">Arrivée</div>
                        <div class="item">
                            <v-select
                                    ref="country"
                                    v-model="country"
                                    :items="countries"
                                    label="Pays"
                                    placeholder="--- Sélectionner votre pays ---"
                            />
                            <v-text-field
                                    label="Lieu de livraison"
                                    prepend-inner-icon="place"
                                    outlined
                            />
                        </div>
                    </div>
                    <div class="item">
                        <div class="form--subtitle">Modes de transport</div>
                        <div>
                            <v-checkbox v-for="(check, key) in checks" :key="key" :label="check"/>
                        </div>
                    </div>
                    <div class="item">
                        <div class="form--subtitle">Date d'expédition prévue</div>
                        <v-select
                                ref="country"
                                v-model="country"
                                :items="countries"
                                placeholder="--- Sélectionner ---"
                        />

                        <v-textarea
                                outlined
                                name="input-7-4"
                                value=""
                                placeholder="Information supplémentaire / conditions spéciales (facultatif)"
                        />
                    </div>
                    <p>Merci de nous communiquer un maximum d'informations pour etablir votre devis.</p>
                </div>
            </div>
            <div class="bottom--form">
                <div class="form--subtitle">Contact</div>
                <v-text-field
                        label="Nom"
                        prepend-inner-icon="person"
                        outlined
                />
                <v-text-field
                        label="Email"
                        prepend-inner-icon="mail"
                        outlined
                />
                <v-text-field
                        label="Téléphone (facultatif)"
                        prepend-inner-icon="phone"
                        outlined
                />
            </div>
            <v-btn color="blue" class="mb-5" dark large>Envoyer</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Devis",
        data: () => ({
            countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
            checks: ['via air', 'via maritime', 'via ferroviaire', 'Veillez me conseiller la meuilleur solution'],
            poids: ['KG', 'LB'],
            volumes: ['M3', '20\'F', '40\'F'],
        })
    }
</script>

<style scoped>
    .devis--title{
        font-size: 1.6em;
        margin: 0.67em 0;
        color: #ed120b;
        font-weight: bold;
    }
    .form{
        width: 95%;
        box-shadow: 0 3px 10px -2px rgba(64, 61, 61, 0.6);
        padding: 20px;
        margin: auto;
    }
    .form .top--form{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }
    .form--subtitle{
        font-weight: bold;
        margin-top: 5px;
        margin-bottom: 10px;
    }
    .grid-51{
        display: grid;
        grid-template-columns: 5fr 1fr;
        grid-gap: 0.5rem;
        margin: 0;
        padding: 0;
    }
    .v-input--checkbox{
        margin: 0;
        padding: 0;
    }
    @media screen and (max-width: 822px){

        .form .top--form{
            grid-template-columns: 1fr;
        }
    }
</style>