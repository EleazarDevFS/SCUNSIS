// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './views/LoginView.vue'
import HomeView from './views/InicioView.vue'
import GenConsView from './views/GenConsView.vue'
import HistorialView from './views/HistorialView.vue'
import ConfiguracionView from './views/ConfiguracionView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/inicio', component: HomeView },
  { path: '/genera_constancias', component: GenConsView },
  { path: '/historial', component: HistorialView },
  { path: '/configuracion', component: ConfiguracionView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
