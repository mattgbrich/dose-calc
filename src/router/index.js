import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { transition: 'slide-left'}
    },
    {
      path: '/meal/:meal',
      name: 'meal',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MealBuilder.vue'),
      meta: { transition: 'slide-right'}
    }
  ]
})

export default router
