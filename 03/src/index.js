// 以模块的方式引入vue
const Vue = require('./vue');
const vm = new Vue({
    el: '#demo',
    data: {
        name: 'jinming',
        html: '<p>123<b style="color:red">456</b></p> ',
        bool: 12,
        arr: [{
            name: "jinming",
            id: 1,
            skill: []
        }, {
            name: 'chenjinming',
            id: 2,
            skill: ['html', 'css', 'js']
        }],
        isRed: true,
    },

    template: `<div> <p>{{name}}</p>
    <p  v-text="name"></p>
    <div v-html="html"></div>
    <div v-show=bool>显示或隐藏</div>
    <hr>
    <div v-if="bool>10">A</div>
    <div v-else-if="bool<9">B</div>
    <ul>
    <li v-for="item in arr">
    <p v-text="item.name"></p>
    <p v-for="item2 in item.skill" v-text="item2"></p>
     </li>
    </ul>
    <hr>
    <button v-on:click="test ">test</button>
    <button v-on:click="test(1)">test(带参数)</button>
    <input @keyup.13="onEnter">
    <hr/>
    <div :class="{ red: isRed }">class指令</div>
    <input v-model="name/>
    </div> `,
    methods: {
        test(num) {
            vm.name = 'xiaochen';
            console.log(num);
        },
        onEnter() {
            console.log(vm.name);

        }
    }
})
console.log(vm)