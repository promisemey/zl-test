import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      alias: '/',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/search',
      component: () => import('../views/resource/search.vue')
    }
  ]
})

export default router
