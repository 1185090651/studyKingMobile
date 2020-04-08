import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './global_css/normalize.css'
import './global_css/global.css'
import { Toast, Dialog } from 'vant'
import './filters/formatSize'
import './filters/formatTime'

Vue.use(Vant)
Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
