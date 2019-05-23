import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueResource from 'vue-resource'
import axios from "axios";

// 全局配置
// 配置axios请求的地址
axios.defaults.baseURL = 'https://vue-blog-62383.firebaseio.com'
//设置请求头为 Authorization
// axios.defaults.headers.common('Authorization') = 'Token'
// //设置post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/urlencode';
// axios.defaults.headers.get['Accepts'] = 'application/json'
// 配置请求头

// Vue.use(VueResource)
//全局自定义指令
// 自定义指令 无值
// Vue.directive('rainbow', {
//   /*
//     el：指令所绑定的元素，可以用来直接操作 DOM 
//     binding：一个对象
//     vnode：Vue 编译生成的虚拟节点
//   */
//   bind(el, binding, vnode) {
//     el.style.color = '#' + Math.random().toString(16).slice(2, 8);
//   }
// });


//自定义指令 有值
Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1260px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "500px";
    };
    if (binding.arg == 'column') {
      el.style.backgroundColor = "#6677cc";
      el.style.padding = '20px';
    }
  },
});

//全局自定义过滤器
//自定义过滤器
// Vue.filter('to-uppercase', function (value) {
//   // value等于管道左边的值,这边等价于blog.title
//   return value.toUpperCase();
// });

Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + '...'
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
