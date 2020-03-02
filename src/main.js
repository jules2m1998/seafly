import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter);
import vuetify from './plugins/vuetify';
// import Home from "./components/home/Home";
import App from "./App";
import Template from "./components/template/Template";
import Home from "./components/home/Home";

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
      path: '/:name',
      name: 'views',
      component: Template,
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
