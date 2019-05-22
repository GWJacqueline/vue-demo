import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/about/About'
import Admin from '@/components/Admin'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Menu from '@/components/Menu'
import Register from '@/components/Register'

//二级路由
import Contact from '@/components/about/Contact'
import Delivery from '@/components/about/Delivery'
import History from '@/components/about/History'
import OrderingGuide from '@/components/about/OrderingGuide'

//三级路由
import PersonName from '@/components/about/contact/PersonName'
import Phone from '@/components/about/contact/Phone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home
      //一进来展示多个组件
      components: {
        default: Home,
        'OrderingGuide': OrderingGuide,
        'Delivery': Delivery,
        'History': History
      },
    },
    {
      path: '/about/About',
      name: 'About',
      component: About,
      //默认展示路由
      redirect: '/about/About/History',
      // 二级路由
      children: [
        //path可以自己定
        {
          path: '/about/About/Contact', name: 'Contact', component: Contact, redirect: '/about/About/Contact/Phone', children: [
            { path: '/about/About/Contact/Phone', name: 'Phone', component: Phone },
            { path: '/about/About/Contact/PersonName', name: 'PersonName', component: PersonName },
          ]
        },
        { path: '/about/About/Delivery', name: 'Delivery', component: Delivery },
        { path: '/about/About/History', name: 'History', component: History },
        { path: '/about/About/OrderingGuide', name: 'OrderingGuide', component: OrderingGuide },
      ],
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
      //路由独享守卫
      beforeEnter: (to, from, next) => {
        //不显示
        //next(false);
        //显示该组件
        if (to.name == 'Login' || to.name == 'Register') {
          next();
        } else {
          alert("非登录转不能访问此页面");
          //未登录就引导到登录页面上
          next('/Login');
        };
      },
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    //上面这些东西没有匹配上，就会走*号,跳转回主页
    {
      path: '*',
      redirect: '/'
    },
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    //savePosition 通过浏览器的前进后退才能触发

    //return {
    //跳转到指定位置
    // x: 0,
    // y: 100
    //跳转到某个选择器
    // selector: '.btn',
    //记住位置
    //};
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }

})
