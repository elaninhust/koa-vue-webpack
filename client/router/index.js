import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index/index.vue'
import Stock from '@/views/stock/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/index"
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/stock',
      component: Stock
    }
  ]
})
