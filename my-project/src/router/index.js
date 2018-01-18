import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

import globalData from '../components/globalData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index1',
      component: _import('index/index')
    },
    {
      path: '/index',
      name: 'Index1',
      component: _import('index/index')
    },
    {
      path: '/bill/out',
      name: 'Out',
      component: _import('index/out'),
      beforeEnter: function(to,from,next){
        var data = localStorage.getItem('loginStatus');
        var dataObj = JSON.parse(data);
        if(data==null){
          next('/login')
          return;
        }
        var dataObiTime = ((new Date().getTime() - dataObj.time)/1000/60).toFixed(2);//分钟
        if (dataObiTime>120) {
          next('/login')
          return;
        }else{
          next()
        }
      }
    },
    {
      path: '/bill/in',
      name: 'In',
      component: _import('index/in')
    },
    {
      path: '/inDet/:billId',
      name: 'InDetail',
      component: _import('index/inDetail')
    },
    {
      path: '/us',
      component: _import('index/us'),
      children:[
        {
          path: '',
          name: 'Mymap',
          component: _import('index/map')
        }
      ]
    },
    {
      path: '/reg',
      name: 'Regist',
      component: _import('index/regist')
    },
    {
      path: '/login',
      name: 'Login',
      component: _import('index/login')
    },
    {
      path: '/hel',
      name: 'Helper',
      component: _import('index/helper')
    },
    {
      path: '/helog',
      name: 'HelpLogin',
      component: _import('index/helpLogin')
    },
    {
      path: '/helide',
      name: 'HelIdent',
      component: _import('index/helpIdent')
    },
    {
      path: '/helin',
      name: 'HelpIn',
      component: _import('index/helpIn')
    },
    {
      path: '/helout',
      name: 'HelpOut',
      component: _import('index/helpOut')
    },
    {
      path: '/aide',
      name: 'Aide',
      component: _import('index/aide')
    },
    {
      path: '/acc',
      component: _import('account/account'),
        children:[
          {
            path: '',
            name: 'AccountInfo',
            component: _import('account/accountInfo')
          },
          {
            path: 'mypub/accAnn/:status',
            name: 'AccountAnnounce',
            component: _import('account/accountAnnounce')
          },
          {
            path: 'mypub/accAnn/:status/myBillDet/:billId',
            name: 'MyBillDet',
            component: _import('account/myBillDet')
          },
          {
            path: 'buy/accOffer/:status',
            name: 'AccountOffer',
            component: _import('account/accountOffer')
          },
          {
            path: 'buy/accOffer/:status/myOfferDet/:billId',
            name: 'MyOfferDet',
            component: _import('account/myOfferDet')
          },
          {
            path: 'buy/accBuy/:status',
            name: 'AccountBuy',
            component: _import('account/accountBuy')
          },
          {
            path: 'buy/accBuy/myBuyDet/:billId',
            name: 'MyBuyDet',
            component: _import('account/myBuyDet')
          },
          {
            path: 'set/accInfo',
            name: 'AccountInfo',
            component: _import('account/accountInfo')
          },
          {
            path: 'set/accInfo/accInfoEdit',
            name: 'AccInfoEdit',
            component: _import('account/accInfoEdit')
          },
          {
            path: 'set/accInfo/accInfoIdent',
            name: 'AccInfoIdent',
            component: _import('account/accInfoIdent')
          },
          {
            path: 'set/accInfo/accComIdent',
            name: 'AccComIdent',
            component: _import('account/accComIdent')
          },
          {
            path: 'set/accMes',
            name: 'AccountMes',
            component: _import('account/accountMes')
          },
          {
            path: 'set/accMes/accMesDet/:mesId',
            name: 'AccountMesDet',
            component: _import('account/accountMesDet')
          },
          {
            path: 'set/changePass',
            name: 'ChangePass',
            component: _import('account/changePass')
          }
        ],
        beforeEnter: function(to,from,next){
          var data = localStorage.getItem('loginStatus');
          var dataObj = JSON.parse(data);
          if(data==null){
            next('/login')
            return;
          }
          var dataObiTime = ((new Date().getTime() - dataObj.time)/1000/60).toFixed(2);//分钟
          if (dataObiTime>120) {
            next('/login')
            return;
          }else{
            next()
          }
        }
    }
  ]
})
