import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);
const routes = [
  {
    path: '/inicio',
    component: () => import('../views/Inicio.vue'),
  },
  {
    path: '/formulario',
    component: () => import('../views/Formulario.vue'),
  },
  {
    path: '/tabla',
    component: () => import('../views/Tabla.vue'),
  }
]
const router = new VueRouter({ routes, })
export default router;