import Vue from 'vue'
import Router from 'vue-router'
import Sale from '@/components/sale'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sale',
      component: Sale
    }
  ]
})
