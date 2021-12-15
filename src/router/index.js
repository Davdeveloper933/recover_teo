import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sections from "../views/Sections"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/:id',
    name: 'project',
    component: Sections
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
