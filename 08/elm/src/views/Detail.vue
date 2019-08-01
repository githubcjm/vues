<template>
  <div>详情页</div>
</template>
<script>
export default {
  created() {
    //通知mutations去修改state里的值
    this.$store.commit("setAuthor");
  }
};
</script>

