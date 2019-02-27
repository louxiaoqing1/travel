// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui';
import './assets/element-variables.scss'
require('./assets/iconfont/material-icons.css');

import App from './App'
import router from './router'



Vue.use(ElementUI);
Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.axios = axios;
// axios.defaults.baseURL = "http://10.2.98.10:8080"
axios.defaults.baseURL = "http://10.2.98.231:8012"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
