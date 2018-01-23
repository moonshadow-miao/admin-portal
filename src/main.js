import Vue from 'vue'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@/styles/index.scss'
import App from './App'
import router from './router'
import store from './store'
import '@/icons' // icon
import '@/permission' // permission control
import 'element-ui/lib/theme-chalk/display.css';
import '@/components'

process.env.NODE_ENV === 'development' ? require('./mock') : null
const isDebug_mode = process.env.NODE_ENV === 'development'
Vue.config.productionTip = false
Vue.config.debug = isDebug_mode
Vue.config.devtools = isDebug_mode

window.IBSS = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
