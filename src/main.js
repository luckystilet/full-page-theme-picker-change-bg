import '@/assets/scss/base.scss'
import Vue from 'vue'
import App from './App.vue'

import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'
import '@/assets/scss/fullpage.css'

Vue.use(VueFullPage);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
