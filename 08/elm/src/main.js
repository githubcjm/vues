import Vue from 'vue'
import App from './App.vue'
//全局引入axios
import axios from 'axios'
// import Router from 'vue-router'
// import './index.css'

// 全局引入vuetouter
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)
//引入状态管理
import store from './store'


// import Home from './components/Home.vue'
import Tabbar from './views/Tabbar'

// import Detail from './views/Detail'
//懒加载
const Detail = () => import('./views/Detail')
const Home = () => import('./views/Tabbar/Home.vue')
const Order = () => import('./views/Tabbar/Order.vue')
const Dingdan = () => import('./views/Tabbar/Dingdan.vue')
const Mine = () => import('./views/Tabbar/Mine.vue')
const Sign = () => import('./views/Sign.vue')
const Adr = () => import('./views/Adr.vue')



//同步加载
// import Home from './views/Tabbar/Home.vue'
// import Order from './views/Tabbar/Order.vue'
// import Dingdan from './views/Tabbar/Dingdan.vue'
// import Mine from './views/Tabbar/Mine.vue'
// import Sign from './views/Sign.vue'
// 定义路由组件
// const Homes = {
//   render(h) {
//     return h('div', null, 'homes')
//   }
// }
// const About = {
//   render(h) {
//     return h('div', null, 'about')
//   }
// }

//路由
const routes = [{
    name: 'detail',
    path: '/detail',
    component: Detail
  },
  //地址
  {
    name: 'adr',
    path: '/adr',
    component: Adr
  },
  //登录
  {
    name: 'sign',
    path: '/sign',
    component: Sign
  },
  {
    //底部选项卡
    name: 'tabbar',
    path: '/tabbar',
    component: Tabbar,
    children: [{
        name: 'home',
        path: '/tabbar/home',
        component: Home,
      }, {
        name: 'order',
        path: '/tabbar/order',
        component: Order,
      }, {
        name: 'dingdan',
        path: '/tabbar/dingdan',
        component: Dingdan,
      },
      {
        name: 'mine',
        path: '/tabbar/mine',
        component: Mine,
      }
    ]
  }, {
    name: 'home',
    path: '/',
    redirect: '/tabbar/home'
  }
]

const router = new VueRouter({
  // (缩写) 相当于 routes: routes
  routes
})

//全局守卫
router.beforeEach(async (to, from, next) => {
  //发送请求获取令牌
  let data = await axios.post("https://www.easy-mock.com/mock/5d40123c05c59f1e0bf0bbdf/list/login", {
    params: {
      token: 'qwe123'
    },
  });
  let islogin = data.data.data.status;
  if (islogin || to.path === "/sign" || to.path === "/tabbar/home" || to.path === "/detail" || to.path === "/adr" || to.path === "/tabbar/order") {
    next();
  } else {
    router.push({
      name: 'sign'
    })
  }

})




//把插件或者方法放到vue的原型链上
Vue.prototype.$axios = axios

import Vant from './vant/index'
// import router from './router'
Vant()

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')