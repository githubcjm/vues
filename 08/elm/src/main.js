import Vue from 'vue'
import App from './App.vue'
// import './index.css'

//全局引入axios
import axios from 'axios'
//把插件或者方法放到vue的原型链上
Vue.prototype.$axios = axios

import Vant from './vant/index'
Vant()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')