<template>
  <header>
    <nav class="navbar navbar-light bg-light justify-content-between">
      <router-link to="/" class="navbar-brand">
        <i class="glyphicon glyphicon-th-list text-primary mg-right5"></i>Vue路由和http
      </router-link>
      <ul class="nav nav-pills">
        <li class="nav-item" v-for="(nav,index) in navs" :key="index">
          <router-link class="nav-link" v-bind:to="nav.link">{{nav.text}}</router-link>
        </li>
      </ul>
      <ul class="nav ml-auto">
        <!--router-link 动态绑定属性 -->
        <li class="nav-item">
          <router-link class="nav-link" :to="login">登录</router-link>
        </li>
        <li class="nav-item">
          <!-- router-link默认是一个a标签，想要换成其他标签,使用tag -->
          <!-- <router-link class="nav-link" tag="div" :to="register">注册</router-link> -->
          <!-- 使用路由名字跳转 -->
          <router-link class="nav-link" :to="{name:'Register'}">注册</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navs: [
        { text: "主页", link: "/" },
        { text: "菜单", link: "/Menu" },
        { text: "管理", link: "/Admin" },
        { text: "关于我们", link: "/about/About" }
      ],
      login: "/Login",
      register: "/Register"
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>