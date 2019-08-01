<template>
  <div>
    <van-nav-bar
      :border="isok"
      style="background:#58bc58;color:white"
      title="城市选择"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 搜索 -->
    <van-search background="#58bc58" placeholder="请输入搜索关键词" v-model="value" />
    <!-- 索引栏 -->
    <van-index-bar v-for="(k,index) in adrlist" :key="index">
      <!-- 这里写遍历数据库，每个字母遍历一次，生成数据渲染到页面 -->
      <van-index-anchor :index="index" />
      <van-cell :title="n.name" v-for="(n,index) in k" :key="index" />
    </van-index-bar>
  </div>
</template>
<script>
//有个bug点击地址时，怎么获取到对应的值，再存进仓库里，再搜索框访问仓库
export default {
  data() {
    return {
      isok: false,
      value: "",
      adrlist: []
    };
  },
  methods: {
    onClickLeft() {
      console.log(123);
      this.$router.push({
        name: "home"
      });
    }
  },

  async created() {
    let adrs = await this.$axios(
      "https://www.easy-mock.com/mock/5d40123c05c59f1e0bf0bbdf/list/adrlist"
    );
    this.adrlist = adrs.data.data.cities;
    console.log(this.adrlist);
  }
};
</script>
