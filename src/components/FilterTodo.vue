<template>
  <div id="FilterTodo">
    <span>筛选</span>
    <select v-model="count" @change="asyncfilterNum(count)">
      <option v-for="(num,index) in nums" :key="index" v-bind:value="num.choose">{{num.choose}}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "filterTodo",
  data() {
    return {
      count: 200,
      nums: [
        { choose: 5 },
        { choose: 10 },
        { choose: 20 },
        { choose: 50 },
        { choose: 100 },
        { choose: 150 },
        { choose: 200 }
      ]
    };
  },
  methods: {
    ...mapActions(["asyncfilterNum"])
  },
  computed: {}
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
