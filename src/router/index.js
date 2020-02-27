import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import User from '@/views/user/user'
import Content from '@/views/content/content'
import Work from '@/views/work/work'
import UserMessage from '@/views/user/userMessage'
import UserFollows from '@/views/user/userFollows'
import UserFans from '@/views/user/userFans'
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
      component: User,
      redirect: '/user/message',
      children: [
        {
          path: 'message',
          name: 'userMessage',
          component: UserMessage,
        },
        {
          path: 'follows',
          name: 'userFollows',
          component: UserFollows,
        },
        {
          path: 'fans',
          name: 'userFans',
          component: UserFans,
        }
      ]
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
  ]
})
