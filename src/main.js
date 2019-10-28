// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import moment from 'moment'
import VueScroller from 'vue-scroller'
import axios from 'axios'
// import './mock/mockServer'   //mock
import './common/stylus/fonts.styl'

Vue.config.productionTip = false

Vue.use(VueScroller)
Vue.prototype.axios = axios   //将axios挂在vue原型上

// 注册全局的过滤器
Vue.filter('date-string', function (value) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
