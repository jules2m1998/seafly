import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/home/Home";
import Template from "./components/template/Template";
import Promotion from "./components/promotion/Promotion";
import Faq from "./components/faq/Faq";
import Contact from "./components/contact/Contact";
import Devis from "./components/Devis/Devis";
import Description from "./components/template/Description";
import Specification from "./components/specification/Specification";
import Conversion from "./components/conversion/Conversion";

Vue.use(VueRouter);
export default new VueRouter({
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
                    path: 'devis-denvoi',
                    component: Devis,
                    name: 'devis'
                },
                {
                    path: 'container-size',
                    component: Specification,
                    name: 'specification'
                },
                {
                    path: 'volumetric-convert',
                    component: Conversion,
                    name: 'convert'
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