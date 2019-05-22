<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
        <!-- 导航 -->
        <ul class="list-group mb-5">
          <router-link
            tag="li"
            v-for="(aboutNav,index) in aboutNavs"
            :key="index"
            :to="{name: aboutNav.name}"
            @click.native="addActive(index)"
          >
            <a
              class="list-group-item list-group-tem-action"
              v-bind:class="{active:index==active}"
            >{{aboutNav.text}}</a>
          </router-link>
        </ul>
      </div>
      <div class="col-8">
        <!-- 导航所对应的内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      aboutNavs: [
        // { link: "/about/About/History", text: "历史订单" },
        // { link: "/about/About/Contact", text: "联系我们" },
        // { link: "/about/About/OrderingGuide", text: "点餐文档" },
        // { link: "/about/About/Delivery", text: "快递信息" }
        { name: "History", text: "历史订单" },
        { name: "Contact", text: "联系我们" },
        { name: "OrderingGuide", text: "点餐文档" },
        { name: "Delivery", text: "快递信息" }
      ],
      active: 0
    };
  },
  methods: {
    addActive(index) {
      this.active = index;
      console.log(1);
    }
  }
};
</script>

<style scoped>
</style>