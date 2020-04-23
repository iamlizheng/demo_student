import Vue from 'vue'
import VueRouter from 'vue-router'
import StudentAdd from '@/components/StudentAdd'
import StudentList from '@/components/StudentList'
import Login from '@/views/Login'
import register from '@/views/Register'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'log',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/studentList',
    name: 'list',
    component: StudentList
  },
  {
    path: '/studentAdd',
    name: 'add',
    component: StudentAdd
  },
  {
    path: '*',
    redirect : '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass : 'active',
  routes
})

export default router
