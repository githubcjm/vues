<template>
  <div id="app">
    <Header />
    <List />
    <Main />
    <ListView />
    <Shehui />
    <!-- <Hot /> -->
  </div>
  <!-- 这里放组件 -->
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";

import Main from "./components/Main";

//隐藏事件
import ListView from "./components/List-view";
// import Hot from "./components/Hot";
import Shehui from "./components/Shehui";

export default {
  //这里放注册
  name: "app",
  components: {
    Header,
    List,
    //视频
    ListView,
    //热点
    // Hot,
    //社会
    Shehui,

    Main
  }
};
</script>
