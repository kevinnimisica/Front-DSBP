import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueMaterial,
  render: h => h(App)
}).$mount('#app')
