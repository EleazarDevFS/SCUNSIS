// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './views/LoginView.vue'
import HomeView from './views/InicioView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/inicio', component: HomeView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
