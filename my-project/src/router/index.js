import Vue from 'vue'
import Router from 'vue-router'
import Index1 from '@/components/index/index'
import Out from '@/components/index/out'
import In from '@/components/index/in'
import InDetail from '@/components/index/inDetail'
import Us from '@/components/index/us'
import Mymap from '@/components/index/map'
import Regist from '@/components/index/regist'
import Login from '@/components/index/login'
import Helper from '@/components/index/helper'
import HelpLogin from '@/components/index/helpLogin'
import HelpIdent from '@/components/index/helpIdent'
import HelpIn from '@/components/index/helpIn'
import HelpOut from '@/components/index/helpOut'
import Aide from '@/components/index/aide'
import Account from '@/components/account/account'
import AccountAnnounce from '@/components/account/accountAnnounce'
import MyBillDet from '@/components/account/myBillDet'
import AccountOffer from '@/components/account/accountOffer'
import MyOfferDet from '@/components/account/myOfferDet'
import AccountBuy from '@/components/account/accountBuy'
import MyBuyDet from '@/components/account/myBuyDet'
import AccountInfo from '@/components/account/accountInfo'
import AccInfoEdit from '@/components/account/accInfoEdit'
import AccInfoIdent from '@/components/account/accInfoIdent'
import AccComIdent from '@/components/account/accComIdent'
import AccountMes from '@/components/account/accountMes'
import AccountMesDet from '@/components/account/accountMesDet'
import ChangePass from '@/components/account/changePass'

import globalData from '../components/globalData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index1',
      component: Index1
    },
    {
      path: '/index',
      name: 'Index1',
      component: Index1
    },
    {
      path: '/bill/out',
      name: 'Out',
      component: Out,
      beforeEnter: function(to,from,next){
        // console.log(to)
        // console.log(from)
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
        // console.log(dataObj)
      }
    },
    {
      path: '/bill/in',
      name: 'In',
      component: In
    },
    {
      path: '/inDet/:billId',
      name: 'InDetail',
      component: InDetail
    },
    {
      path: '/us',
      name: 'Us',
      component: Us,
      children:[
        {
          path: '',
          name: 'Mymap',
          component: Mymap
        }
      ]
    },
    {
      path: '/reg',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/hel',
      name: 'Helper',
      component: Helper
    },
    {
      path: '/helog',
      name: 'HelpLogin',
      component: HelpLogin
    },
    {
      path: '/helide',
      name: 'HelIdent',
      component: HelpIdent
    },
    {
      path: '/helin',
      name: 'HelpIn',
      component: HelpIn
    },
    {
      path: '/helout',
      name: 'HelpOut',
      component: HelpOut
    },
    {
      path: '/aide',
      name: 'Aide',
      component: Aide
    },
    {
      path: '/acc',
      name: 'Account',
      component: Account,
        children:[
          {
            path: '',
            name: 'AccountInfo',
            component: AccountInfo
          },
          {
            path: 'mypub/accAnn/:status',
            name: 'AccountAnnounce',
            component: AccountAnnounce
          },
          {
            path: 'mypub/accAnn/myBillDet/:billId',
            name: 'MyBillDet',
            component: MyBillDet
          },
          {
            path: 'buy/accOffer/:status',
            name: 'AccountOffer',
            component: AccountOffer
          },
          {
            path: 'buy/accOffer/myOfferDet/:billId',
            name: 'MyOfferDet',
            component: MyOfferDet
          },
          {
            path: 'buy/accBuy/:status',
            name: 'AccountBuy',
            component: AccountBuy
          },
          {
            path: 'buy/accBuy/myBuyDet/:billId',
            name: 'MyBuyDet',
            component: MyBuyDet
          },
          {
            path: 'set/accInfo',
            name: 'AccountInfo',
            component: AccountInfo
          },
          {
            path: 'set/accInfo/accInfoEdit',
            name: 'AccInfoEdit',
            component: AccInfoEdit
          },
          {
            path: 'set/accInfo/accInfoIdent',
            name: 'AccInfoIdent',
            component: AccInfoIdent
          },
          {
            path: 'set/accInfo/accComIdent',
            name: 'AccComIdent',
            component: AccComIdent
          },
          {
            path: 'set/accMes',
            name: 'AccountMes',
            component: AccountMes
          },
          {
            path: 'set/accMes/accMesDet',
            name: 'AccountMesDet',
            component: AccountMesDet
          },
          {
            path: 'set/changePass',
            name: 'ChangePass',
            component: ChangePass
          }
        ],
        beforeEnter: function(to,from,next){
          // console.log(to)
          // console.log(from)
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
          // console.log(dataObj)
        }
    }
  ]
})
