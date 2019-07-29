import Vue from 'vue'
import App1 from './App1.vue'

//微信ui
import 'weui'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render(creatElement) {
        return creatElement(App1)
    }
})