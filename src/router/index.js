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
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/package-list',
    name: 'package-list',
    component: () => import(/* webpackChunkName: "about" */ '../views/PackageList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
