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
  },
  {
    path: "/add-party",
    name: "AddParty",
    component: () => import(/* webpackChunkName: "add-party" */"../pages/add-party")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
		if (to.hash) {
			return { selector: to.hash }
		}
	}
})

export default router;
