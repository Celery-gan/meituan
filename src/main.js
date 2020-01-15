import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/reset.css'
import axios from 'axios'

Vue.config.productionTip = false

import service from "./http"
Vue.prototype.$axios = service

import iView from 'iview';
import 'iview/dist/styles/iview.css'; // 使用 CSS
Vue.use(iView);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')