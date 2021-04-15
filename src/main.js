import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import 'bootstrap';
import VeeValidate from 'vee-validate';
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false;

Vue.config.productionTip = false
Vue.component('Options', require('@/components/Authentication/Options').default);
Vue.use(VeeValidate);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
