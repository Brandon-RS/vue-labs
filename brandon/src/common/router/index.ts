import { createRouter, createWebHistory } from 'vue-router'

import AppLayout from '@common/layouts/AppLayout.vue'
import Home from '@home/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'app-layout',
      path: '/',
      component: AppLayout,
      children: [
        {
          name: 'home',
          path: '',
          component: Home,
        },
        {
          name: 'about',
          path: 'about',
          component: () => import('@about/views/AboutView.vue'),
        },
        {
          name: 'contact',
          path: 'contact',
          component: () => import('@contact/views/ContactView.vue'),
        },
        {
          name: 'projects',
          path: 'projects',
          component: () => import('@projects/views/ProjectsView.vue'),
        },
      ],
    },
    {
      name: 'not-found',
      path: '/:pathMatch(.*)*',
      component: () => import('@common/views/NotFoundView.vue'),
    },
  ],
})

export default router