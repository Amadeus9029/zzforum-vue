import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import User from '@/views/user/user'
import Content from '@/views/content/content'
import Work from '@/views/work/work'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path:'/content',
      name:'content',
      component:Content
    },
    {
      path:'/work',
      name:'work',
      component:Work
    },
  ]
})
