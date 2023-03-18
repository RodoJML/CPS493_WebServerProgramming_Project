import { createRouter, createWebHistory, type RouteLocationNormalized, type NavigationGuardNext} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Food from '../views/Food.vue'
import Dashboard from '../views/Dashboard.vue'
import Admin from '../views/Admin.vue'
import Meals from '../views/Meals.vue'
import Friends from '../views/Friends.vue'
import { useSession } from '../model/session';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/food', name: 'food', component: Food, beforeEnter: secureRoute},
    {path: '/dashboard', name: 'dashboard', component: Dashboard, beforeEnter: secureRoute},
    {path: '/admin', name: 'admin', component: Admin, beforeEnter: secureRoute},
    {path: '/meals', name: 'meals', component: Meals, beforeEnter: secureRoute},
    {path: '/friends', name: 'friends', component: Friends, beforeEnter: secureRoute}
  ]
})

export default router

function secureRoute(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext){
  const session = useSession();

  if(session.user){
    next()
  } else {
    next('/')
  }
}