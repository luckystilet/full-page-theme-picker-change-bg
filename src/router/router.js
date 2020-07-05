import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home.vue')
    },{
      path: '/login',
      name: 'Login',
      component: () => import('../pages/Login.vue')
    },{
      path: '/table',
      name: 'Table',
      component: () => import('../pages/Table.vue')
    },
  ]
})
// router.beforeEach((to, from, next) => {
//   // if (!localStorage.getItem("token") && to.name !== "login") {
//   //   router.push({ path: "/login" });
//   // } else {
//   //   next();
//   // }
// });
export default router
