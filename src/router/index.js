import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'
import Form from '../views/Form.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component : Profile
    },
    {
      path: '/form',
      name: 'form',
      component : Form
    },
  ]
})

export default router
