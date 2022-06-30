import Vue from 'vue'
import VueRouter from 'vue-router'
import PackageRegister from '../views/PackageRegister.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: PackageRegister
  },
  {
    path: '/package-list',
    name: 'packageList',
    component: () => import(/* webpackChunkName: "about" */ '../views/PackageList.vue')
  },
  {
    path: '/package-checkout',
    name: 'packageCheckout',
    component: () => import(/* webpackChunkName: "about" */ '../views/PackageCheckout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
