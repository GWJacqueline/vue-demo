<template>
  <div id="app">
    <div class="container">
      <app-header/>
    </div>
    <div class="container mb-5">
      <!-- 点什么跳转什么 -->
      <router-view/>
      <!-- 模拟路由滚动控制 -->
      <!-- <router-view/>
      <router-view/>
      <router-view/>-->
    </div>
    <!-- <home/> -->
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="OrderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="Delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="Delivery"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 组件嵌套：引入组件
import Header from "./components/Header";
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    "app-header": Header,
    home: Home
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
