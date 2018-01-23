import Layout from '@/views/layout/Layout'
import Container from '@/views/layout/components/Container'
import {asyncImport} from '@/utils'

export default {
  path: '/product',
  component: Layout,
  name:'product',
  meta: {title: '产品管理', icon: 'form'},
  redirect: '/product/package/index',
  children: [
    {
      path: 'package',
      name: 'packageManage',
      component:Container,
      redirect: '/product/package/index',
      meta: { title: '套餐管理'},
      children:[
        {
          path: 'index',
          name: 'packageList',
          component: asyncImport('product/index'),
          meta: { title: '套餐列表',menu: true, cache:true , index:'020101'}
        }
      ]
    }
  ]
}
