<template>
  <div id="SingleBlog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者：{{blog.authors}}</p>
    <p>分类：</p>
    <ul>
      <li v-for="(categorie,index) in blog.categories" :key="index">{{categorie}}</li>
    </ul>
    <button @click="deleteSingleBlog">删除</button>
    <router-link tag="button" :to="'/edit/'+id">编辑</router-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  methods: {
    deleteSingleBlog() {
      axios.delete("/posts/" + this.id + ".json").then(res => {
        this.$router.push("/");
      });
    }
  },
  //DOM 还没有生成
  created() {
    // this.$http
    //   .get("http://jsonplaceholder.typicode.com/posts/" + this.id)
    //   .then(data => {
    //     this.blog = data.body;
    //   });
    axios.get("/posts/" + this.id + ".json").then(data => {
      this.blog = data.data;
    });
    // .then(data => {
    //   this.blog = data;
    // });
  }
};
</script>

<style lang="scss">
#SingleBlog {
  max-width: 960px;
  margin: 0 20px;
  padding: 20px;
  background-color: #eee;
  border: 1px dotted #aaa;
}
</style>
