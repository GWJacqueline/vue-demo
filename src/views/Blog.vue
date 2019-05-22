<template>
  <div id="blog" v-theme:column="'wide'">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <div class="single-blog" v-for="(blog,index) in filteredBlogs" :key="index">
      <router-link v-bind:to=" '/blog/' +blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        <article>{{blog.content | snippet}}</article>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    // this.$http.get("http://jsonplaceholder.typicode.com/posts").then(data => {
    //   this.blogs = data.body.slice(0, 10);
    // });
    // this.$http.get("/data/goods.json").then(data => {
    //   this.blogs = data.body.slice(0, 10);
    // });
    this.$http
      .get("https://vue-blog-62383.firebaseio.com/posts.json")
      .then(data => {
        console.log(data.json()); //返回Promise对象
        //this.blogs = data.body.slice(0, 10);
        return data.json();
      })
      .then(data => {
        var blogsArr = [];
        for (var key in data) {
          console.log(data);
          // console.log(key);
          // console.log(data[key]);
          data[key].id = key;
          blogsArr.push(data[key]);
        }
        //console.log(blogsArr);
        this.blogs = blogsArr;
      });
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  //局部自定义过滤器
  filters: {
    // "to-uppercase": function(value) {
    //   return value.toUpperCase();
    // },
    //ES6
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  //局部自定义指令
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  }
};
</script>
<style scoped lang="scss">
#blog {
  max-width: 800px;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: #444;
  }
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #eee;
  border: 1px dotted #aaa;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
