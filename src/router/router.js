import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {layout: 'main'},
      component: () => import('../pages/Home.vue')
    },{
      path: '/login',
      name: 'Login',
      meta: {layout: 'main'},
      component: () => import('../pages/Login.vue')
    },{
      path: '/table',
      name: 'Table',
      meta: {layout: 'main'},
      component: () => import('../pages/Table.vue')
    },{
      path: '/gsap',
      name: 'Gsap',
      meta: {layout: 'main'},
      component: () => import('../pages/Gsap.vue')
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
