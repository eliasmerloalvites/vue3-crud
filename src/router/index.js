import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

import Listar from '../components/Listar.vue'
import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/listar',
    name: 'listar',
    component: Listar
  },
  {
    path: '/crear',
    name: 'crear',
    component: Crear
  },
  {
    path: '/editar',
    name: 'editar',
    component: Editar
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
