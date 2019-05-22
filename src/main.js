// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './assets/css/bootstrap/bootstrap.min.css'
import './assets/css/style.scss'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-type'] = 'application/json'

// 全局守卫 
/*
全局守卫传的三个参数:
to:要跳转到哪个组件里面去
from:从哪个路由离开
next:一个方法，决定是否要展示看到路由的页面
 */
// router.beforeEach 注册一个全局前置守卫，进入组件之前
// router.beforeEach((to, from, next) => {
//   //点击任何一个页面前，都会执行
//   console.log(to);
//   if (to.name == 'Login' || to.name == 'Register') {
//     next();
//   } else {
//     alert("还没有登录，请先登录");
//     //未登录就引导到登录页面上
//     next('/Login');
//   };
// });

/*
全局后置钩子传两个参数:
to:要去的组件
from:离开的组件
 */
//router.afterEach 注册全局后置钩子，进入组件之后

router.afterEach((to, from) => {
  //进入组件后，展示出来
  alert("after each");
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
