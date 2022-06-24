import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ejercicio1',
    name: 'Ejercicio1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ejercicio1.vue')
  },
  {
    path: '/ejercicio2',
    name: 'Ejercicio2',
    component: () => import(/* webpackChunkName: "about" */ '../views/ejercicio2.vue')
  },
  {
    path: '/ejercicio3',
    name: 'Ejercicio3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ejercicio3.vue')
  },
  {
    path: '/ejercicio4',
    name: 'Ejercicio4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ejercicio4.vue')
  },
  {
    path: '/ejercicio5',
    name: 'Ejercicio5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ejercicio5.vue')
  },
  {
    path: '/ejercicio6',
    name: 'Ejercicio6',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ejercicio6.vue')
  },
  {
    path: '/ejercicio7',
    name: 'Ejercicio7',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ejercicio7.vue')
  },
  {
    path: '/ejercicio8',
    name: 'Ejercicio8',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ejercicio8.vue')
  },
  {
    path: '/ejercicio9',
    name: 'Ejercicio9',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ejercicio9.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
