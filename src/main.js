import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter);
import vuetify from './plugins/vuetify';
// import Home from "./components/home/Home";
import App from "./App";
import Template from "./components/template/Template";

Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Template
    }
  ]
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
