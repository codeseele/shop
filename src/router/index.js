import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/Login')
const Home = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/Home')
const Welcome = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/Welcome')

const Users = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/user/Users')
const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Rights')
const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Roles')

const Cate = () => import(/* webpackChunkName: "Cate_Params" */ '../components/goods/Cate')
const Params = () => import(/* webpackChunkName: "Cate_Params" */ '../components/goods/Params')

const List = () => import(/* webpackChunkName: "GoodsList_Add" */ '../components/goods/List')
const Add = () => import(/* webpackChunkName: "GoodsList_Add" */ '../components/goods/Add')

const Order = () => import(/* webpackChunkName: "Order_Report" */ '../components/order/Order')
const Report = () => import(/* webpackChunkName: "Order_Report" */ '../components/report/Report')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      },
      {
        path: '/rights',
        component: Rights
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/categories',
        component: Cate
      },
      {
        path: '/params',
        component: Params
      },
      {
        path: '/goods',
        component: List
      },
      {
        path: '/goods/add',
        component: Add
      },
      {
        path: '/orders',
        component: Order
      },
      {
        path: '/reports',
        component: Report
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})