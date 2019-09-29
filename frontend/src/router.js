import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Page01 from './components/Page01.vue';
import Page02 from './components/Page02.vue';

const routes = [
    {path: '/page01', component: Page01},
    {path: '/page02', component: Page02},
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
