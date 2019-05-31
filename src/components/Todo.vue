<template>
  <div class="todo">
    <p class="todo-item" v-for="(todo,index) in todos" :key="index">
      <todoItem :todo="todo" @deleteItem="$emit('deleteItem',todo.id)"/>
    </p>
  </div>
</template>

<script>
import todoItem from "../components/TodoItem";
export default {
  name: "todo",
  data() {
    return {};
  },
  props: {
    todos: {
      type: Array
    }
  },
  methods: {
    deleteItem(id) {},
    completed() {}
  },
  components: {
    todoItem
  }
};
</script>
<style lang="scss" scoped>
.todo-item {
  background-color: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-completed {
  text-decoration: line-through;
}
.del {
  background-color: #ff0000;
  color: #fff;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  border: none;
  outline: none;
  float: right;
  font-size: 16px;
  line-height: 20px;
}
</style>
