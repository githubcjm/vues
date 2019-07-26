(() => {
    require('./props.css');
    const Vue = require('./vue.js');
    const templates = require('./templates.html');
    Vue.component('my-header', {
        // 从标签的属性值上面获取父组件给我的值
        props: ['abc', 'title', 'num', 'color', 'obj'],
        template: `
            <header :style="{
                backgroundColor: color
            }"  v-html="title" v-show='true'>
            </header>
          
        `
    })

    // 根容器
    new Vue({
        el: "#demo",
        data: {
            num: 1000,
            title: '微信',
            obj: {
                name: 'yao',
                skill: ['ps']
            },
            p: true,
        },
        template: templates,
        methods: {
            test() {
                console.log('点击了组件')
            }
        }
    })
})();