<template>
    <nav>
        <div class="header--nav container">
            <router-link class="header--logo" :to="{name: 'home'}">
                <img src="./../assets/seafly-logo.png" width="78px"/>
            </router-link>
            <div class="header--menu mt-12">
                <div class="align--item pa-0" v-if="is_good_size && !is_search">
                        <span class="menu--item mr-4" v-for="(item, key) in menus" :key="key">
                            <div class="text-center">
                                <v-menu open-on-hover>
                                  <template v-slot:activator="{ on }">
                                    <router-link :to="item.route" class="pa-1" v-if="item.route !== undefined" v-on="on"> {{ item.name }}</router-link>
                                    <a href="#" class="pa-1" v-on="on" v-if="item.route === undefined"> {{ item.name }}</a>
                                  </template>

                                  <div v-if="item.sub !== undefined">
                                      <v-list>
                                        <v-list-item
                                                v-for="(item, index) in item.sub"
                                                :key="index"
                                                color="primary"
                                        >
                                            <v-list-item-title><router-link :to="item.route" style="text-decoration: none">{{ item.name }}</router-link></v-list-item-title>
                                        </v-list-item>
                                      </v-list>
                                  </div>
                                </v-menu>
                              </div>
                        </span>
                </div>
                <transition name="translate">
                    <div class="search--bar" v-if="is_search">
                        <div class="search--elt">
                            <input type="text"
                                   placeholder="Rechercher..."
                                   class="search--input"
                                   v-model="my_search"
                            >
                            <v-btn icon class="btn--item input-btn" @click.prevent="search">
                                <v-icon color="primary" class="mb-2">search</v-icon>
                            </v-btn>
                        </div>
                        <v-btn icon class="btn--item input-btn" @click.prevent="closed">
                            <v-icon color="primary" class="mb-2">close</v-icon>
                        </v-btn>
                    </div>
                </transition>
            </div>
            <div class="header--button mt-6">
                <div class="align--item pt-4" v-if="!is_search">
                    <span class="btn--item">
                        <v-btn color="primary" small class="mr-1" :to="{name: 'devis'}">DEVIS GRATUIT</v-btn>
                    </span>
                    <span v-if="is_good_size" class="align--item">
                        <v-select
                                :items="btns"
                                label="Langues"
                                style="position: relative; bottom: .3rem;margin: 0 .7rem 0 .7rem"
                                dense
                        />
                    </span>
                    <span class="btn--item">
                        <v-btn icon class="btn--item" @click.prevent="search">
                            <v-icon color="primary" class="mb-2">search</v-icon>
                        </v-btn>
                    </span>
                    <!-- BURGER BUTTON -->
                    <span class="btn--item" style="position: relative; bottom: 5px">
                        <v-app-bar-nav-icon color="primary" class="" @click.prevent="drawer = true"
                                            v-if="!is_good_size"/>
                    </span>
                    <!-- END BURGER BUTTON -->
                </div>
            </div>
        </div>
        <v-navigation-drawer v-model="drawer" dark app class="darken-3 py-0" color="primary" style="overflow: paged-x">
            <v-container>
                <v-row>
                    <v-col md="12">
                        <img src="./../assets/seafly-logo.png" width="78"/>
                    </v-col>
                </v-row>
            </v-container>
            <v-list nav>
                <v-list-item v-for="(item, key) in menus" :key="key">
                    <v-list-item-action>
                        <v-icon small>fa fa-tachometer-alt</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <router-link :to="item.route" tag="span" v-if="item.route !== undefined">{{ item.name }}</router-link>
                            <span v-if="item.route === undefined">{{item.name}}</span>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-layout row style="width: 100%" class="mt-10">
                <v-btn color="primary" small class="mb-10" style="margin: auto" :to="{name: 'devis'}">DEVIS GRATUIT</v-btn>
                <div class="align--item drawer--lang">
                    <v-btn outlined fab x-small color="white" v-for="(item, key) in btns" :key="key" class="ma-2 mt-3 mb-3">{{item}}</v-btn>
                </div>
            </v-layout>
        </v-navigation-drawer>
<!--        <router-link :to="{name: 'promos', params: {name: 'about'}}">ok</router-link>-->
    </nav>
</template>

<script>
    import Menu from './../data/data-menu';
    export default {
        name: "Navbar",
        data: () => ({
            drawer: false,
            interval: {},
            value: 0,
            menus: Menu.menus,
            btns: [
                'en',
                'fr',
                'th'
            ],
            is_search: false,
            is_good_size: true,
            my_search: ''
        }),
        methods: {
          search: function() {
              if(!this.is_search) {
                  this.is_search = true;
              } else{
                  if(this.my_search === ''){
                      this.closed();
                  } else {
                      console.log("Search")
                  }
              }
          },
            closed () {
              this.is_search = false
            }
        },
        beforeDestroy() {

        },
        mounted() {
            this.is_good_size = document.documentElement.clientWidth > 997;
            window.addEventListener('resize',() => {
                this.is_good_size = document.documentElement.clientWidth > 997;
            })
        },
        computed: {
            logo_show(){
                return document.documentElement.clientWidth < 300 && this.is_search;
            }
        }
    }
</script>

<style scoped>
    .v-progress-circular {
        margin: 1rem;
    }
    .too---bar{
        box-shadow: none;
    }
    header{
        box-shadow: none;
    }
    .titles .title--item{
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        width: auto;
    }
    .align--item{
        display: inline-flex;
        flex-direction: row;
        justify-content: center;

    }
    .align--item .menu--item a{
        text-decoration: none;
        color: #444444;
        font-size: 0.85em !important;
        font-weight: bold;
        text-align: center;
        height: auto;
    }
    .align--item .menu--item a:hover{
        color: black;
    }
    .align--item .menu--item{
        border-bottom: 0.3em solid #ffffff;
    }
    .align--item .menu--item:hover, .router-link-active{
        border-bottom: 0.3em solid #ed120b;
    }
    .search--container input{
        width: 250px;
        height: 40px;
        background: #fcfcfc;
        border: 1px solid #dbdbdb;
        outline: 0;
        padding: 0px 55px 0px 10px;
        font-size: 16px;
        color: #333333;
    }
    .drawer--lang{
        width: 100%;
        margin: auto;
        justify-content: center;
    }
    .header--nav{
        display: grid;
        grid-template-columns: 1fr 9fr 3fr;
        grid-gap: 0rem;
        width: 100%;
        grid-template-areas: 'logo menu button';
        padding: 0 10px 0 10px!important;
    }
    .header--logo{
        grid-area: logo;
    }
    .header--menu{
        grid-area: menu;
    }
    .header--button{
        grid-area: button;
    }
    .search--bar{
        width: 100%;
        display: grid;
        grid-template-columns: 25fr 1fr;
        position: relative;
        bottom: 20px;
        left: 7%;
    }
    .search--elt{
        border: 1px solid #dddddd;
        display: grid;
        grid-template-columns: 25fr 1fr;
        border-radius: 0.4rem ;
        box-shadow:  0 0 5px 3px #cccccc78;;
    }
    .search--input{
        padding-left: 7px;
        border-right: 1px solid #dddddd;
    }
    .input-btn{
        padding-top: .4rem;
    }
    .translate-enter-active{
        transition: transform .15s;
    }
    .translate-enter{
        transform: translateY(-30px);
    }
    .translate-leave-active{
        display: none;
    }
    .header--logo.router-link-active{
        border: none;
    }
    @media screen and (max-width: 400px) {

        .search--bar{
            left: 3px;
        }
        .header--logo{
            width: 65px;
        }
        .header--logo img{
            width: 100%;
        }
    }
</style>