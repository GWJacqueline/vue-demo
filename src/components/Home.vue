<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="home-content">
        <h1>Vue路由</h1>
        <h2>跳转方式</h2>
        <button @click="goBack" class="btn btn-success">返回</button>
        <button @click="goThis" class="btn btn-success">跳转到menu</button>
        <button @click="goRouterName" class="btn btn-success">跳转到指定名字的路由</button>
        <button @click="goPush" class="btn btn-success">通过push进行跳转</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    goBack() {
      //跳转到上一次浏览的页面
      this.$router.go(-1);
    },
    goThis() {
      //指定跳转地址
      this.$router.replace("/Menu");
    },
    goRouterName() {
      //跳转到指定名字的路由
      this.$router.replace({ name: "Admin" });
    },
    goPush() {
      //通过push进行跳转
      // this.$router.push("/Login");
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style scoped>
#home {
  background-image: url(../../src/assets/image/ham.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  height: 85vh;
  padding: 10%;
}
.home-content {
  background-color: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
h1,
h2 {
  margin: 6%;
}
</style>