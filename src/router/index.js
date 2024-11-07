import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProjectView from '@/views/AddProjectView.vue'
import EditProjectView from '@/views/EditProjectView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addProject',
    name: 'AddProjectView',
    component: AddProjectView
  },
  {
    path: '/editProject/:id',
    name: 'EditProjectView',
    component: EditProjectView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
