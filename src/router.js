import Vue from 'vue'
import Router from 'vue-router'
import Blog from './views/Blog'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/AddBlog',
      name: 'AddBlog',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AddBlog.vue')
    },
    //路由参数
    {
      path: '/blog/:id',
      component: SingleBlog,
    },
    {
      path: '/edit/:id',
      component: EditBlog,
    },
  ]
})
