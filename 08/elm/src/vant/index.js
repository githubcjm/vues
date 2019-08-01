import Vue from 'vue'
//第三方组件
//搜索
import {
    Search
    //宫格
    ,
    Grid,
    GridItem
    //分割线
    ,
    Divider
    //下拉菜单
    ,
    DropdownMenu,
    DropdownItem,
    //底部标签栏
    Tabbar,
    TabbarItem,
    Swipe,
    SwipeItem,
    Card,
    // 单元格 
    Cell,
    CellGroup,
    //List
    List,
    Field,
    //导航栏
    NavBar,
    //索引兰
    IndexBar,
    IndexAnchor
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
    Vue.use(Cell).use(CellGroup);
    Vue.use(List);
    Vue.use(NavBar);
    Vue.use(IndexBar).use(IndexAnchor);
}