<template>
  <div>
    <label for="todoItem" :class="{'is-completed':todo.completed}">
      <input name="todoItem" type="checkbox" @change="completed">
      {{todo.title}}
    </label>
    <button class="del" @click="$emit('deleteItem',todo.id)">x</button>
  </div>
</template>

<script>
export default {
  name: "todo",
  data() {
    return {};
  },
  props: {
    todo: {
      type: Object
    }
  },
  methods: {
    completed() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>
<style lang="scss" scoped>
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
