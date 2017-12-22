import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


import Index from '../components/Index.vue'

import Button from '../components/button/button.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/button',
      name: 'Button',
      component: Button
    }
  ]
})
