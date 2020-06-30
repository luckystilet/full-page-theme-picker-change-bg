import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home')
    },{
      path: '/login',
      name: 'Login',
      component: () => import('../pages/Login')
    },{
      path: '/table',
      name: 'Table',
      component: () => import('../pages/Table.vue')
    },
  ]
})

export default router
