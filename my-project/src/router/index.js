import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

import globalData from '../components/globalData'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
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
    // 出票
    {
      path: '/bill/out',
      name: 'Out',
      component: _import('index/out'),
      // meta:{requiresUserAuth:true},
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
        // 认证
        var eleUserAuth = localStorage.getItem('eleUserAuth');
        var eleCompanyAuth = localStorage.getItem('eleCompanyAuth');
        if (eleUserAuth=='success'&&eleCompanyAuth=='success') {
            next()
        }
        if (eleUserAuth==null||eleUserAuth=='unauth'||eleUserAuth=='failure') {
          next({
            path: '/acc/set/accInfo/accInfoIdent',
          })
        }
        if (eleUserAuth=='authing') {
          next({
            path: '/acc/set/accInfo/accComIdent',
          })
        }
        if(eleUserAuth=='success'&&eleCompanyAuth=='authing'){
          next({
            path: '/acc/set/accInfo',
          })
        } 
        if(eleUserAuth=='authing'&&eleCompanyAuth=='success'){
          next({
            path: '/acc/set/accInfo',
          })
        } 
      }
    },
    // 收票
    {
      path: '/bill/in',
      name: 'In',
      component: _import('index/in/in')
    },
    {
      path: '/inDet/:billId',
      name: 'InDetail',
      component: _import('index/in/inDetail'),
      // meta:{requiresUserAuth:true},
      beforeEnter: function(to,from,next){
        // 登录
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
        // 认证
        var eleUserAuth = localStorage.getItem('eleUserAuth');
        var eleCompanyAuth = localStorage.getItem('eleCompanyAuth');
        if (eleUserAuth=='success'&&eleCompanyAuth=='success') {
          next()
        }
        if (eleUserAuth==null||eleUserAuth=='unauth'||eleUserAuth=='failure') {
          next({
            path: '/acc/set/accInfo/accInfoIdent',
          })
        }
        if (eleUserAuth=='authing') {
          next({
            path: '/acc/set/accInfo/accComIdent',
          })
        }
        if(eleUserAuth=='success'&&eleCompanyAuth=='authing'){
          next({
            path: '/acc/set/accInfo',
          })
        } 
        if(eleUserAuth=='authing'&&eleCompanyAuth=='success'){
          next({
            path: '/acc/set/accInfo',
          })
        } 
      }
    },
    {
      path: '/bill/log',
      name: 'Log',
      component: _import('index/log/index')
    },
    {
      path: '/us',
      component: _import('index/us/us'),
      children:[
        {
          path: '',
          name: 'Mymap',
          component: _import('index/us/map')
        }
      ]
    },
    {
      path: '/reg',
      name: 'Regist',
      component: _import('index/login/regist')
    },
    {
      path: '/login',
      name: 'Login',
      component: _import('index/login/login')
    },
    // 帮助中心
    {
      path: '/hel',
      name: 'Helper',
      component: _import('index/help/helper')
    },
    {
      path: '/helog',
      name: 'HelpLogin',
      component: _import('index/help/helpLogin')
    },
    {
      path: '/helide',
      name: 'HelIdent',
      component: _import('index/help/helpIdent')
    },
    {
      path: '/helin',
      name: 'HelpIn',
      component: _import('index/help/helpIn')
    },
    {
      path: '/helout',
      name: 'HelpOut',
      component: _import('index/help/helpOut')
    },
    {
      path: '/aide',
      name: 'Aide',
      component: _import('index/help/aide')
    },
    // 个人中心
    {
      path: '/acc',
      component: _import('account/account'),
        children:[
          // 我的发布
          {
            path: 'mypub/accAnn/:status',
            name: 'AccountAnnounce',
            component: _import('account/publish/accountAnnounce')
          },
          {
            path: 'mypub/accAnn/:status/myBillDet/:billId',
            name: 'MyBillDet',
            component: _import('account/publish/myBillDet')
          },
          // 我的收票
          // 竞价
          {
            path: 'buy/accBuy/quote',
            name: 'AccountBuy',
            component: _import('account/buy/accountQuote')
          },
          {
            path: 'buy/accBuy/quote/quoteDet/:quoteId',
            name: 'MyQuoteDet',
            component: _import('account/buy/myQuoteDet')
          },
          // 收票
          {
            path: 'buy/accBuy/:status',
            name: 'AccountBuy',
            component: _import('account/buy/accountBuy')
          },
          {
            path: 'buy/accBuy/:status/myBuyDet/:orderId',
            name: 'MyBuyDet',
            component: _import('account/buy/myBuyDet')
          },
          // 账户设置
          {
            path: '',
            name: 'AccountInfo',
            component: _import('account/accountInfo')
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
            component: _import('account/accInfoIdent'),
            beforeEnter: function(to,from,next){
              // 认证
              if (localStorage.getItem('eleUserAuth')==null||localStorage.getItem('eleUserAuth')=='unauth'||localStorage.getItem('eleUserAuth')=='failure') {
                next()
              } else {
                  next({
                    path: '/acc/set/accInfo/accComIdent',
                  })
              }
            }
          },
          {
            path: 'set/accInfo/accComIdent',
            name: 'AccComIdent',
            component: _import('account/accComIdent'),
            beforeEnter: function(to,from,next){
              // 认证
              if(localStorage.getItem('eleCompanyAuth')==null||localStorage.getItem('eleCompanyAuth')=='unauth'||localStorage.getItem('eleCompanyAuth')=='failure'){
                next()
              }else{
                next({
                  path: '/acc/set/accInfo',
                })
              }
            }
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
