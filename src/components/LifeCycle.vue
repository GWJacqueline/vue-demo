<template>
  <div>
    <h1>{{title}}</h1>
    <button @click="changeTitle">点击查看组件更新钩子调用</button>
  </div>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      title: "Vue实例的生命周期"
    };
  },
  methods: {
    changeTitle() {
      this.title = "生命周期Update钩子";
    }
  },
  beforeCreate() {
    alert("组件实例化之前的函数");
  },
  created() {
    alert("组件实例化完毕，但页面还未显示");
  },
  beforeMount() {
    alert("组件挂载前，页面仍未展示，但虚拟DOM已经配置");
  },
  mounted() {
    alert("组件挂载后，此方法执行后，页面显示");
  },
  beforeUpdate() {
    alert("组件更新前，页面仍未更新，但虚拟DOM已经配置");
  },
  updated() {
    alert("组件更新，此方法执行后，页面显示");
  },
  beforeDestroy() {
    alert("组件销毁前");
  },
  destroyed() {
    alert("组件销毁");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
