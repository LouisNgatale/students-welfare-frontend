import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.component('Options', require('@/components/Authentication/Options').default);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
