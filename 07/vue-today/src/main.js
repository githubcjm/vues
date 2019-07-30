import Vue from 'vue'
import App from './App.vue'
//设置全局样式
import './index.css'
// 微信UI
import 'weui'


// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = true
//设置全局的数据
// const state = Vue.observable({

// })


new Vue({
  el: "#app",
  render(createElement) {
    return createElement(App)
  }

})
// console.log(App);

// .$mount('#app')