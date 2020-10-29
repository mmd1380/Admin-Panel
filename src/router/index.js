import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/party-page",
    name: "PartyPage",
    component: () => import(/* webpackChunkName: "party-page" */"../pages/party-page")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if(savedPosition) return savedPosition
    else return { x: 0, y: 0}
  }
})

export default router
