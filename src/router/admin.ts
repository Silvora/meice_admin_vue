import HomeView from '../views/HomeView.vue'

import Layout from '@/layout/layout.vue'

import Login from '@/views/login/login.vue'

const admin: any = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      icon: 'md-home'
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于',
      icon: 'md-ice-cream'
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/aaaa',
    name: 'aaaa',
    meta: {
      title: '但萨达森防',
      icon: 'md-ionitron'
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is
    children: [
      {
        path: 'cccc',
        name: 'cccc',
        meta: {
          title: '发电公司的',
          icon: ''
        },
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/item.vue')
      },
      {
        path: 'oooo',
        name: 'oooo',
        meta: {
          title: '呵呵龟儿',
          icon: ''
        },
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/item.vue')
      }
    ]
  }
]

export default admin
