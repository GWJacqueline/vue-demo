<template>
  <div class="header">
    <p class="header-title">{{msg}}</p>
    <ul>
      <router-link
        tag="li"
        class="link"
        v-for="(item,index) in routerItems"
        :key="index"
        :to="item.link"
        exact
      >{{item.name}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "待办事项",
      routerItems: [
        {
          name: "主页",
          link: { name: "home" }
        },
        {
          name: "关于",
          link: { name: "about" }
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  background-color: #343434;
  text-align: center;
  color: #fff;
  padding: 10px 0;
  box-sizing: border-box;
  .header-title {
    font-size: 18px;
    font-weight: bold;
  }
  .link {
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    padding: 0 10px;
    line-height: 14px;
    margin: 10px 0;
    &:first-of-type {
      border-right: 1px solid #fff;
    }
  }
  .router-link-active {
    color: green;
  }
}
</style>