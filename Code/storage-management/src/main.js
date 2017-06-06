// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router-config'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routerConfig
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  // store,
  el: '#app',
  render: h => h(App)
})
