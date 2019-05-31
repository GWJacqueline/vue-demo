<template>
  <div class="home">
    <addTodo @addTodos="addTodos"/>
    <todo v-bind:todos="todos" @deleteItem="deleItem"/>
  </div>
</template>

<script>
import todo from "../components/Todo";
import addTodo from "../components/AddTodo";
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      todos: [
        // { id: 1, title: "待办事项1", completed: false },
        // { id: 2, title: "待办事项2", completed: false },
        // { id: 3, title: "待办事项3", completed: false },
        // { id: 4, title: "待办事项4", completed: false }
      ]
    };
  },
  methods: {
    deleItem(id) {
      // this.todos = this.todos.filter(item => {
      //   return item.id !== id;
      // });
      axios
        .delete(`//jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => {
          this.todos = this.todos.filter(item => {
            return item.id !== id;
          });
        })
        .catch(err => {
          console.log("删除成功");
        });
    },
    addTodos(newTodo) {
      // this.todos = [...this.todos, newTodo];
      // console.log(this.todos);
      const { title, completed } = newTodo;
      axios
        .post("//jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => {
          this.todos = [res.data, ...this.todos];
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    axios
      .get("//jsonplaceholder.typicode.com/todos?_limit=20")
      .then(res => {
        this.todos = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    todo,
    addTodo
  }
};
</script>
<style lang="sass">

</style>

