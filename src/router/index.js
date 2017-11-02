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
          path: '/',
          component: resolve => require(['@/components/pages/Intro.vue'], resolve)
        },
        {
          path: '/selling',
          component: resolve => require(['@/components/pages/Selling.vue'], resolve)
        },
        {
          path: '/storage',
          component: resolve => require(['@/components/pages/Storage.vue'], resolve)
        }
      ]
    }
  ]
})
