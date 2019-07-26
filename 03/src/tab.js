require('./style/tab.css');
const Vue = require('./vue');

const vm = new Vue({
    el: '#demo',
    data: {
        tabId: 0
    },
    //传数据

    template: `<div>
    <div class="tab">
                <input @click="tabId=0" class="tabId=0"  type="button" value="新闻" />
                <input @click="tabId=1" class="tabId=1" type="button"   value="体育" />
                <input @click="tabId=2" class="tabId=2"  type="button"  value="娱乐" />
                <input type="button" v-on:click="tabId=3" class="tabId=3"   value="教育" />
              
                <div v-show="tabId===0" class="con">  
                新闻
                </div>
            <div v-show="tabId===1" class="con">
                体育
            </div>
            <div v-show="tabId===2" class="con">
                娱乐
            </div>
            <div v-show="tabId===3" class="con">
                教育
            </div> 
         </div> </div>
        `
});