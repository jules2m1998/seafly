<template>
  <v-app>
    <Navbar/>
    <v-content class="container" style="margin-top: 0px; padding-top: 0">
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  name: 'App',

  components: {
    Footer,
    Navbar
  },

  data: () => ({
    //
  })
};
</script>
