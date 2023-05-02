//import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Layout from '@/layout/layout.vue'

import Login from '@/views/login/login.vue'

import admin from './admin'

const err: any = [
  {
    path: '/:pathMatch(.*)',
    name: '404',
    meta: {
      title: 'Error',
      icon: ''
    },
    component: () => import('@/views/error/404.vue')
  }
]

const routes: any = [
  {
    path: '/',
    name: 'admin',
    redirect: '/home',
    component: Layout,
    // meta: {
    //   title: '首页',
    //   icon: 'md-home'
    // },
    children: [...admin, ...err]
  },
  // ...admin,
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      icon: 'md-home'
    },
    component: Login
  }
]

//const routes = other
//export default admin
//export default { admin, routes }

//export default admin routes
export default routes
