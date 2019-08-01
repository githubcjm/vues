<template>
  <div>
    <keep-alive :max="10">
      <router-view></router-view>
    </keep-alive>
    <!-- 标签栏 -->
    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(t,index) in tabbarItem"
        :route="true"
        @click="add(t.url)"
        :key="index"
        v-text="t.title"
        icon="home-o"
      ></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabbarItem: [
        {
          title: "首页",
          // icon:
          url: "home"
        },
        {
          title: "发现",
          // icon:
          url: "order"
        },
        {
          title: "订单",
          // icon:
          url: "dingdan"
        },
        {
          title: "我的",
          // icon:
          url: "mine"
        }
      ]
    };
  },
  methods: {
    add(name) {
      this.$router.push(name);
    }
  }
};
// console.log(template);
</script>




<style>
* {
  margin: 0;
  padding: 0;
}
.fix {
  position: flex;
  top: 0px;
}
h2 {
  font-size: 15px;
  color: white;

  margin-left: 20px;
}
</style>

