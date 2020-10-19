import Vue from 'vue'
import App from './App.vue'
import routes from './router/index.js'
import VueRouter from 'vue-router';
import store from './store/index';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  template: '',
  routes,
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
