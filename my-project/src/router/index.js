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
import HelpIn from '@/components/index/helpIn'
import HelpOut from '@/components/index/helpOut'
import Aide from '@/components/index/aide'
import Account from '@/components/account/account'
import AccountAnnounce from '@/components/account/accountAnnounce'
import MyBillDet from '@/components/account/myBillDet'
import AccountOffer from '@/components/account/accountOffer'
import MyOfferDet from '@/components/account/myOfferDet'
import AccountBuy from '@/components/account/accountBuy'
import AccountInfo from '@/components/account/accountInfo'
import AccInfoEdit from '@/components/account/accInfoEdit'
import AccInfoIdent from '@/components/account/accInfoIdent'
import AccComIdent from '@/components/account/accComIdent'
import AccountMes from '@/components/account/accountMes'
import AccountMesDet from '@/components/account/accountMesDet'
import ChangePass from '@/components/account/changePass'

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
      path: '/out',
      name: 'Out',
      component: Out
    },
    {
      path: '/in',
      name: 'In',
      component: In
    },
    {
      path: '/inDet',
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
            name: 'AccountAnnounce',
            component: AccountAnnounce
          },
          {
            path: 'accAnn',
            name: 'AccountAnnounce',
            component: AccountAnnounce
          },
          {
            path: 'myBillDet',
            name: 'MyBillDet',
            component: MyBillDet
          },
          {
            path: 'accOffer',
            name: 'AccountOffer',
            component: AccountOffer
          },
          {
            path: 'myOfferDet',
            name: 'MyOfferDet',
            component: MyOfferDet
          },
          {
            path: 'accBuy',
            name: 'AccountBuy',
            component: AccountBuy
          },
          {
            path: 'accInfo',
            name: 'AccountInfo',
            component: AccountInfo
          },
          {
            path: 'accInfoEdit',
            name: 'AccInfoEdit',
            component: AccInfoEdit
          },
          {
            path: 'accInfoIdent',
            name: 'AccInfoIdent',
            component: AccInfoIdent
          },
          {
            path: 'accComIdent',
            name: 'AccComIdent',
            component: AccComIdent
          },
          {
            path: 'accMes',
            name: 'AccountMes',
            component: AccountMes
          },
          {
            path: 'accMesDet',
            name: 'AccountMesDet',
            component: AccountMesDet
          },
          {
            path: 'changePass',
            name: 'ChangePass',
            component: ChangePass
          }
        ]
    }
  ]
})
