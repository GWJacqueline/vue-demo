<template>
  <div id="AddBlog">
    <h2>添加博客</h2>
    <form action v-if="!submitted">
      <label>博客标题</label>
      <input type="text" v-bind:placeholder="blog.phTitle" v-model="blog.title">
      <label>博客内容</label>
      <textarea v-bind:placeholder="blog.phContent" v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label for="vue">vue.js</label>
        <input type="checkbox" name="categories" id="vue" value="vue.js" v-model="blog.categories">
        <label for="node">node.js</label>
        <input
          type="checkbox"
          name="categories"
          id="node"
          value="node.js"
          v-model="blog.categories"
        >
        <label for="react">react.js</label>
        <input
          type="checkbox"
          name="categories"
          id="react"
          value="react.js"
          v-model="blog.categories"
        >
        <label for="angular">angular.js</label>
        <input
          type="checkbox"
          name="categories"
          id="angular"
          value="angular.js"
          v-model="blog.categories"
        >
      </div>
      <label>作者：</label>
      <select v-model="blog.authors">
        <option v-for="(author,index) in authors" :key="index">{{author}}</option>
      </select>
      <button @click.prevent="post">添加博客</button>
    </form>
    <div v-if="submitted">
      <h3>您的博客发布成功</h3>
    </div>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <p>博客分类</p>
      <ul>
        <li v-for="(category,index) in blog.categories" :key="index">{{category}}</li>
      </ul>
      <p>博客作者：{{blog.authors}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBlog",
  data() {
    return {
      blog: {
        phTitle: "请输入博客标题",
        phContent: "请输入博客内容",
        title: "",
        content: "",
        categories: [],
        authors: ""
      },
      authors: ["Lili", "DaMing", "Lucy"],
      submitted: false
    };
  },
  methods: {
    post() {
      this.$http
        //firebase会自动创建posts.json
        .post(
          "https://vue-blog-62383.firebaseio.com/posts.json",
          this.blog
          // {
          //   title: this.blog.title,
          //   body: this.blog.content,
          //   userId: 1
          // }
        ) //成功之后
        .then(data => {
          console.log(data);
          this.submitted = true;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#AddBlog {
  * {
    box-sizing: border-box;
  }
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  width: 100%;
  padding: 8px;
  display: block;
}
textarea {
  height: 200px;
}
#checkboxes {
  label {
    display: inline-block;
    margin-top: 0;
  }
  input {
    display: inline-block;
    margin-right: 10px;
  }
}
button {
  display: block;
  margin: 20px 0;
  background-color: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
</style>
