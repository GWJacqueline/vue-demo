<template>
  <div id="app">
    <div id="nav">
      <!-- exact样式唯一 -->
      <router-link to="/" exact>博客</router-link>
      <router-link to="/AddBlog" exact>写博客</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#nav {
  text-align: center;
  background: crimson;
  padding: 30px 0;
  margin-bottom: 40px;
  a {
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
  }
  .router-link-active {
    background-color: rgba(255, 255, 255, 0.8);
    color: #444;
  }
}
</style>
