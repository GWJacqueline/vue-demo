<template>
  <div class="home">
    <div class="container">
      <addTodo/>
      <filterTodo/>
      <todo/>
    </div>
  </div>
</template>

<script>
import todo from "../components/Todo";
import addTodo from "../components/Addtodo";
import filterTodo from "../components/FilterTodo";
export default {
  name: "home",
  components: {
    todo,
    addTodo,
    filterTodo
  }
};
</script>

