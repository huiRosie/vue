// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import App from './App'
// import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(VueResource)

import { Icon,Page,DatePicker,Cascader,Upload,Modal,Message,Notice,Carousel,CarouselItem,Select,Option,RadioGroup,Radio,Steps,Step } from 'iview'
Vue.component('Page', Page);
Vue.component('Icon', Icon);
Vue.component('DatePicker', DatePicker);
Vue.component('Cascader', Cascader);
Vue.component('Upload', Upload);
Vue.component('Modal', Modal);
Vue.prototype.$Modal = Modal;
Vue.prototype.$Message = Message;
Vue.prototype.$Notice = Notice;
Vue.component('Carousel', Carousel);
Vue.component('CarouselItem', CarouselItem);
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.component('RadioGroup', RadioGroup);
Vue.component('Radio', Radio);
Vue.component('Steps', Steps);
Vue.component('Step', Step);
// Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// 如果跳转某些页面前需要验证是否认证通过，可在路由板块加上 meta:{requiresUserAuth:true} meta:{requiresCompanyAuth:true}
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresUserAuth)) {
//       //这里判断用户是否认证通过，我例子中是验证本地存储是否有eleUserAuth
//       if (localStorage.getItem('eleCompanyAuth')=='success'&&localStorage.getItem('eleUserAuth')=='success') {
//           next()
//       } else {
//         next({
//           path: '/acc/set/accInfo',
//         })
//       }
//   } else {
//       next() // 确保一定要调用 next()
//   }
// })