// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResource from 'vue-resource'
import App from './App'
import router from './router'
// import iView from 'iview'
import 'iview/dist/styles/iview.css';
// import '../my-theme/index.less'
import qs from 'qs'
Vue.prototype.$qs = qs

import { Icon,Page,DatePicker,Cascader,Upload,Modal,Message,Notice } from 'iview'
Vue.component('Page', Page);
Vue.component('Icon', Icon);
Vue.component('DatePicker', DatePicker);
Vue.component('Cascader', Cascader);
Vue.component('Upload', Upload);
Vue.component('Modal', Modal);
Vue.prototype.$Modal = Modal;
Vue.prototype.$Message = Message;
Vue.prototype.$Notice = Notice;
// Vue.use(iView)
// Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// 如果跳转某些页面前需要验证是否登录，可在路由板块加上 meta:{requiresAuth:true}
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//       //这里判断用户是否登录，我例子中是验证本地存储是否有eleManagerLogin
//       if (localStorage.getItem('eleManagerLogin')==null||JSON.parse(localStorage.getItem('eleManagerLogin')).data!='已登录') {
//           next({
//               path: '/login',
//           })
//       } else {
//           next()
//       }
//   } else {
//       next() // 确保一定要调用 next()
//   }
// })