import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Account from '../views/Account.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Account',
    component: Account
  },
  {
    path: '/api',
    name: 'ApiKeys',
    component: () => import('../views/ApiKeys.vue')
  },
  {
    path: '/billing',
    name: 'Billing',
    component: () => import('../views/Billing.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/usermanagment',
    name: 'User Managment',
    component: () => import('../views/UserManagment.vue')
  },
  {
    path: '/whitelabel',
    name: 'White Label',
    component: () => import('../views/WhiteLabel.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
