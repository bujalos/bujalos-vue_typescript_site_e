import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faBell, faQuestionCircle, faUser } from '@fortawesome/free-regular-svg-icons'
import { 
  faPen,
  faBars,
  faBriefcase,
  faLaptopHouse,
  faHandHoldingHeart,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

dom.watch()

library.add(
  faPen,
  faBell,
  faQuestionCircle,
  faUser,
  faBars,
  faBriefcase,
  faLaptopHouse,
  faHandHoldingHeart,
  faGraduationCap)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
