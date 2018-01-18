// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import App from './App'
// import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(VueResource)

import { Icon,Page,DatePicker,Cascader,Upload,Modal,Message,Notice,Carousel,CarouselItem } from 'iview'
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
// Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
