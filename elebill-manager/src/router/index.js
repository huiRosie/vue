import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

import Layout from '@/views/common/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: _import('login/index')
    },    
    {
      path: '/login',
      name: 'Login',
      component: _import('login/index')
    },    
    // 出票中心
    // 发布汇票
    {
      path:'/out/pub',
      name:'Publish',
      component:Layout,
      children:[
        {
          path:'/',
          name:'Publish',
          component:_import('sale/pubBill')
        }
      ]
    },
    // 出票中心
    {
      path: '/out/sale/:billStatus',
      name: 'Sale',
      component: Layout,
      children: [
        // 出票中心列表
        { 
          path: '/', 
          name:'Index',
          component: _import('sale/index') 
        },
        // 出票中心详情
        { 
          path: 'saleDet/:billId', 
          name:'SaleDet',
          component: _import('sale/saleDetail')  
        },
        // 出票中心预选报价列表
        { 
          path: 'saleQList/:billId', 
          name:'SaleQuoteList',
          component: _import('sale/saleQuoteList')  
        },        
        // 出票中心预选报价详情
        { 
          path: 'saleQDet/:quoteId', 
          name:'SaleQDet',
          component: _import('sale/saleQuoteDetail')  
        },       
        // 出票中心交易中汇票详情
        { 
          path: 'saleOrderDet/:orderId', 
          name:'SaleOrderDet',
          component: _import('sale/saleOrderDetail')  
        },
      ]
    },      
    //收票中心
    {
      path: '/in/check/:billStatus',
      name: 'Uncheck',
      component: Layout,
      children:[
        //收票中心列表
        {
          path: '/',
          name: 'CheckIndex',
          component: _import('invoice/check/index') 
        },
        // 待审核详情
        {
          path: 'checkDet/:billId',
          name: 'CheckDet',
          component: _import('invoice/check/checkDetail') 
        },      
        //待处理详情
        {
          path: 'handelDet/:billId',
          name: 'HandelDet',
          component: _import('invoice/check/handelDetail') 
        }
      ]
    },
    //个人认证审核
    {
      path:'/ident/pers',
      name:'IdentPers',
      component:Layout,
      children:[
        {
          path:'/',
          name:'PerIdent',
          component:_import('ident/person/index') 
        },
        {
          path:'persCheck/:userId',
          name:'IdentPersCheck',
          component:_import('ident/person/check') 
        },
        {
          path:'persDet',
          name:'IdentPersDet',
          component:_import('ident/person/detail') 
        }
      ]
    },
    // 企业认证
    {
      path:'/ident/comp',
      name:'IdentComp',
      component:Layout,
      children:[
        {
          path:'/',
          name:'CompIdent',
          component:_import('ident/company/index') 
        },
        {
          path:'compCheck/:userId',
          name:'IdentCompCheck',
          component:_import('ident/company/check') 
        },
        {
          path:'compDet',
          name:'IdentCompDet',
          component:_import('ident/company/detail') 
        },
      ]
    },
    // 风投相册
    {
      path:'/ident/secu',
      name:'SecurityImg',
      component:Layout,
      children:[
        {
          path:'/',
          name:'Security',
          component:_import('ident/security/index')
        }
      ]
    },
    //用户中心
    {
      path:'/user',
      name:'User',
      component:Layout,
      children:[
        {
          path:'userInfo',
          name:'UserInfo',
          component:_import('user/userInfo') 
        },
        {
          path:'edit',
          name:'UserEdit',
          component:_import('user/userInfoEdit') 
        },
        {
          path:'pwd',
          name:'UserPsw',
          component:_import('user/changePass') 
        },
        {
          path:'noticeList',
          name:'NoticeList',
          component:_import('user/notice/noticeList') 
        },
      ]
    }
  ]
})
