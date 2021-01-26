import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { ValidationProvider } from 'vee-validate';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.component('ValidationProvider', ValidationProvider);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
