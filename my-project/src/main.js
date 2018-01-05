// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import '../my-theme/index.less';

Vue.use(VueResource)

Vue.use(iView)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
