import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

import NavYiShou from '@/pages/home/components/nav/Yishou'
import NavShiCi from '@/pages/home/components/nav/ShiCi'
import NavYuJunYu from '@/pages/home/components/nav/YuJunYu'

import Search from '@/pages/search/Search'
import ShaiXuan from '@/pages/shaixuan/ShaiXuan'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/yishou',
      component: Home,
      children: [{
        path: '/yishou',
        name: 'NavYiShou',
        component: NavYiShou
      }, {
        path: '/shici',
        name: 'NavShiCi',
        component: NavShiCi
      }, {
        path: '/yujunyu',
        name: 'NavYuJunYu',
        component: NavYuJunYu
      }]
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/shaixuan',
      name: 'ShaiXuan',
      component: ShaiXuan
    }
  ]
})
