import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//初始化一个仓库
const store = new Vuex.Store({
    state: {
        author: 'jin',
        name: 'ming',
        age: 24,
    },
    mutations: {
        setAuthor(state) {
            state.author = 'chen'
        }
    },
    //定义方法
    getters: {
        getdata(state) {
            return state.author
        }
    }
})

//导出仓库
export default store