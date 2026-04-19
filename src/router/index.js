import DashboardLayout from '@/layouts/DashboardLayout.vue'
import AboutPage from '@/views/AboutPage.vue'
import EducationPage from '@/views/EducationPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DashboardLayout,
    }
  ],
})

export default router
