import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter);
import vuetify from './plugins/vuetify';
import App from "./App";
import router from './router.js'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
