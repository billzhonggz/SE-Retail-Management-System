import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/common/Home.vue'], resolve),
      children: [
        {
          path: '/selling',
          component: resolve => require(['@/components/Selling.vue'], resolve)
        },
        {
          path: '/storage',
          component: resolve => require(['@/components/Storage.vue'], resolve)
        }
      ]
    }
  ]
})
