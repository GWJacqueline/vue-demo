<template>
  <div id="addTodo" class="ad">
    <h3>添加内容</h3>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="thing" placeholder="请输入待办事项">
      <input type="submit" value="添加">
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "addTodo",
  data() {
    return {
      thing: ""
    };
  },
  computed: {},
  methods: {
    ...mapActions(["asyncAddTodo"]),
    onSubmit() {
      this.asyncAddTodo(this.thing);
      this.thing = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>

