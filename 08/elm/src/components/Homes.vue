<template>
  <div>
    <router-view></router-view>

    <!-- 标签栏 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" v-for="(n,index )in tabbarItem" :key="index" :v-text="n.title"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    
    };
  }
};
</script>



