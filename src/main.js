import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './api'
import store from './store'
import '@/assets/reset.css'
import '@/assets/index.css'
import Toast from './toast'

Vue.prototype.$toast = Toast;
Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
