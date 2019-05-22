<template>
  <h1>Menu</h1>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      name: "Hery"
    };
  },
  //进入到当前组件的时候，做的事情
  beforeRouteEnter(to, from, next) {
    // 这样写会发现拿不到name,因为data渲染之前，beforeRouteEnter就已经执行了
    //alert("Hello" + this.name);
    //根据name的回调拿到name
    //因为是异步的，所以在data渲染完，就可以拿到值
    next(vm => {
      alert("Hello" + vm.name);
    });
  },
  //离开当前组件时
  beforeRouteLeave(to, from, next) {
    if (confirm("确定离开吗") == true) {
      next();
    } else {
      next(false);
    }
  },
  created() {
    //fetch
    ///apis相当于http://f.apiplus.cn
    // fetch("/apis/bj11x5.json", {
    //   method: "post"
    //   //body:'hello'
    // }) .then(result => {
    //     return result.json();
    //   })
    //   .then(data => {
    //     console.log(data);
    //   });
    //axios
    this.$axios.post("/apis/bj11x5.json").then(data => {
      console.log(data);
    });
  }
};
</script>

<style scoped>
</style>