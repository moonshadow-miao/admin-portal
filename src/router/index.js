import Vue from 'vue'
import Router from 'vue-router'
import business from './modules/business'
import product from './modules/product'
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
import {asyncImport} from  '@/utils'

Vue.use(Router)

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/

import Layout from '@/views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', name :'login',component: asyncImport('login/index'), hidden: true },
  { path: '/404', name:'404',component: asyncImport('404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: asyncImport('login/dashboard')
    }]
  },
  business,
  product,
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

