import { createRouter, createWebHistory } from 'vue-router'


import ConversorTemperatura from './components/ConversorTemperatura.vue'
import Respuestas from './components/Respuestas.vue'


const routes = [
  
  { path: '/', redirect: '/conversor' },

  { path: '/conversor', component: ConversorTemperatura },
  { path: '/respuestas', component: Respuestas },


  { path: '/:pathMatch(.*)*', redirect: '/conversor' }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router