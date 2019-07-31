import Vue from 'vue'
//第三方组件
//搜索
import {
    Search
} from 'vant';
//宫格
import {
    Grid,
    GridItem
} from 'vant';
//分割线
import {
    Divider
} from 'vant';
//下拉菜单
import {
    DropdownMenu,
    DropdownItem
} from 'vant';
//底部标签栏
import {
    Tabbar,
    TabbarItem
} from 'vant';
//轮播图
import {
    Swipe,
    SwipeItem
} from 'vant';
//列表页
import {
    Card
} from 'vant';
//登录
import {
    Field
} from 'vant';

export default () => {
    Vue.use(Divider);
    Vue.use(Grid).use(GridItem);
    Vue.use(Search);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Card);
    Vue.use(Field);
}