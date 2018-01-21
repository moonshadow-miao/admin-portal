import Layout from '@/views/layout/Layout'
import Container from '@/views/layout/components/Container'
import {asyncImport} from '@/utils'

export default {
  path: '/business',
  component: Layout,
  redirect: '/business/sp-manage/index',
  name: 'business',
  meta: {title: '业务受理', icon: 'example'},
  children: [
    {
      path: 'sp-manage',
      name: 'spManage',
      component: Container,
      redirect: '/business/sp-manage/index',
      meta: {title: '企业管理'},
      children: [
        {
          path: 'index',
          name: 'spManageIndex',
          component: asyncImport('business/spManage/index'),
          meta: {title: '企业列表', cache: true, index: '010101'}
        },
        {
          path: 'user',
          name: 'userList',
          component: asyncImport('business/spManage/userList'),
          meta: {title: '用户列表', cache: true, index: '010102'}
        },
        {
          path: 'change-record',
          name: 'changeRecord',
          component: asyncImport('business/spManage/changeRecord'),
          meta: {title: '变更记录', cache: true, index: '010103'}
        },
        {
          path: 'edit/:id',
          name: 'spEdit',
          hidden: true,
          component: asyncImport('business/spManage/spEdit'),
          meta: {title: '修改企业信息', cache: true, index: '010101'}
        }
      ]
    },
    {
      path: 'sp-open',
      name: 'spOpen',
      meta: {title: '开户管理'},
      component: Container,
      redirect: '/business/sp-open/index',
      children: [
        {
          path: 'index',
          name: 'spOpenIndex',
          component: asyncImport('business/spOpen/index'),
          meta: {title: '企业开户', menu: true, cache: true , index: '010201'}
        }
      ]
    }
  ]
}
