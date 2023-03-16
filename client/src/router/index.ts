import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Food from '../views/Food.vue'
import Dashboard from '../views/Dashboard.vue'
import Admin from '../views/Admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/food', name: 'food', component: Food},
    {path: '/dashboard', name: 'dashboard', component: Dashboard},
    {path: '/admin', name: 'admin', component: Admin}
    //{path: '/about',  name: 'about',  component: () => import('../views/AboutView.vue')}
  ]
})

export default router

//function secureRoute(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext){
  // Here we will be creating the secure routes
//}