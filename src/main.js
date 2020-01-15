import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/reset.css'
import axios from 'axios'

Vue.config.productionTip = false

import service from "./http"
Vue.prototype.$axios = service

// 所有接口的api封装
import api from './http/api'
Vue.prototype.$api = api

import iView from 'iview';
import 'iview/dist/styles/iview.css'; // 使用 CSS
Vue.use(iView);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')