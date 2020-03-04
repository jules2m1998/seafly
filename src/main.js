import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter);
import vuetify from './plugins/vuetify';
import App from "./App";
import Template from "./components/template/Template";
import Home from "./components/home/Home";
import Promotion from "./components/promotion/Promotion";
import Description from "./components/template/Description";
import Faq from "./components/faq/Faq";
import Contact from "./components/contact/Contact";

Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/',
      name: 'views',
      component: Template,
      children: [
        {
          path: 'shipping-promotions',
          component: Promotion,
          name: 'promos'
        },
        {
          path: 'shipping-faq',
          component: Faq,
          name: 'faq'
        },
        {
          path: 'contact',
          component: Contact,
          name: 'contact'
        },
        {
          path: ':name',
          component: Description,
          name: 'desc'
        },
      ]
    },
    {
      path: '*',
      redirectTo: 'home'
    }
  ]
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
