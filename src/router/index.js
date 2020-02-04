import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/templates/home/home'
import User from '@/templates/user/user'
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
  ]
})
