import '@/assets/scss/base.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import {directive} from 'vue-clickaway'

// libs
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'
import '@/assets/scss/fullpage.css'
// custom stuff
import Waves from './directives/waves'
// ####################################
// libs
Vue.use(VueFullPage);
Vue.component('calendar', Calendar)
Vue.component('date-picker', DatePicker)
Vue.directive('click-outside', directive)
// custom stuff
Vue.directive('waves', Waves)

// ####################################
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
