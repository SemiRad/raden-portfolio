import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/index.vue'
import AboutView from '@/views/about/index.vue'
import PortfolioView from '@/views/portfolio/index.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/portfolio', component: PortfolioView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
