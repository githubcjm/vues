<template>
  <div id="app">
    <h1>Todo App</h1>
    <AddTodo />
    <Todos v-bind:todos="todos" />
  </div>
</template>

<script>
import AddTodo from "./components/Todo/AddTodo.vue";
import Todos from "./components/Todo/Todos.vue";
export default {
  //M层
  name: "app",
  components: {
    AddTodo,
    Todos
    //注册
  },
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
