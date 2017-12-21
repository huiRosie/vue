import Vue from 'vue'
import Router from 'vue-router'
import Sale from '@/views/sale/sale/index'
import SaleDet from '@/views/sale/sale/saleDetail'
import SaleODet from '@/views/sale/sale/saleODetail'
import Pre from '@/views/sale/pre/index'
import PreDet from '@/views/sale/pre/preDetail'
import Off from '@/views/sale/off/index'
import OffDet from '@/views/sale/off/offDetail'
import Check from '@/views/invoice/check'
import Handel from '@/views/invoice/handel'
import Success from '@/views/invoice/success'
import Fail from '@/views/invoice/fail'
import Login from '@/views/login/index'
import Layout from '@/views/common/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },    
    {
      path: '/',
      name: '首页',
      component: Layout,
      // redirect:'sale/index',
      children: [
        { 
          path: 'inedx', 
          name:'出售中',
          component: Sale 
        }
      ]
    },    
    {
      path: '/sale/index',
      name: '首页',
      component: Layout,
      // redirect:'sale/index',
      children: [
        { 
          path: 'inedx', 
          name:'出售中',
          component: Sale 
        },
        { 
          path: 'saleDet', 
          name:'汇票详情',
          component: Sale 
        },
        { 
          path: 'saleODet', 
          name:'报价详情',
          component: Sale 
        },
      ]
    },    
    {
      path: '/pre',
      name: '预选汇票',
      component: Layout,
      // redirect:'sale/index',
      children: [
        { 
          path: 'index', 
          name:'预选汇票',
          component: Pre
        },
        { 
          path: 'preDet', 
          name:'汇票详情',
          component: PreDet 
        },
      ]
    },    
    {
      path: '/off',
      name: 'Off',
      component: Off
    },    
    {
      path: '/offDet',
      name: 'OffDet',
      component: OffDet
    },    
    {
      path: '/check',
      name: 'Check',
      component: Check
    },    
    {
      path: '/hand',
      name: 'Handel',
      component: Handel
    },    
    {
      path: '/suc',
      name: 'Success',
      component: Success
    },    
    {
      path: '/fail',
      name: 'Fail',
      component: Fail
    }
  ]
})
