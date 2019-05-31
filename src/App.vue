<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    "app-header": Header
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.4;
  color: #2c3e50;
}
.btn {
  display: inline-block;
  border: none;
  background-color: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #666;
  }
}
</style>
