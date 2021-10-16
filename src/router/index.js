import { createRouter, createWebHistory } from 'vue-router'
import Pegawai from '../views/PegawaiList.vue'
import AddComponent from '../views/AddView.vue'
import EditComponent from '../views/EditView.vue'
import SingleComponent from '../views/SingleView.vue'

const routes = [
  {
    path: '/',
    name: 'PegawaiList',
    component: Pegawai
  },
  {
    path: '/add',
    name: 'AddView',
    component: AddComponent
  },
  {
    path: '/single',
    name: 'SingleView',
    component: SingleComponent
  },
  {
    path: '/edit',
    name: 'EditView',
    component: EditComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
