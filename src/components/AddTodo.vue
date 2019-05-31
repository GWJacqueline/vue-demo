<template>
  <div class="addTodo">
    <form>
      <input type="text" v-model="title" placeholder="请输入新增事项">
      <input class="btn" type="submit" value="添加" @click.prevent="addTodo">
    </form>
  </div>
</template>

<script>
// import uuid from "uuid";
export default {
  name: "addTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        // id: uuid.v4(),
        title: this.title,
        completed: false
      };
      this.$emit("addTodos", newTodo);
      this.title = "";
    }
  }
};
</script>
<style scoped lang="scss">
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}
</style>