import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../views/Layout.vue'
import Home from '../views/Home.vue'
import Tarbar from '../views/Tarbar.vue'
import Computer from '../components/Computer.vue'
import Edge from '../components/Edge.vue'
import Google from '../components/Google.vue'
import GitHub from '../components/GitHub.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/Computer',
    component: Computer,
  },
  {
    path: '/Edge',
    component: Edge
  },
  {
    path: '/Google',
    component: Google
  },
  {
    path: '/GitHub',
    component: GitHub
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router