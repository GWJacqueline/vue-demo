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
      this.$http
        .delete(
          "https://vue-blog-62383.firebaseio.com/posts/" + this.id + ".json"
        )
        .then(res => {
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
    this.$http
      .get("https://vue-blog-62383.firebaseio.com/posts/" + this.id + ".json")
      .then(data => {
        //需要使用json()方法将将请求回来的 response 对象解析成我们正常可读的对象
        console.log(data); //Response
        return data.json();
      })
      .then(data => {
        console.log(data);
        this.blog = data;
      });
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
