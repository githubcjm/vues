<template>
  <div class="todos">
    <h2>todos</h2>
    <div v-for="item in todos">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //数据
    return {
      todos: [
        {
          id: 1,
          title: "todo one",
          complated: false
        },
        {
          id: 2,
          title: "todo two",
          complated: true
        }
      ]
    };
  }
};
</script>

