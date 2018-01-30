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
          component: asyncImport('business/openManage/index'),
          meta: {title: '企业开户', cache: true , index: '010201'}
        },
        {
          path: 'sp-notice',
          name: 'spNoticeIndex',
          component: asyncImport('business/openManage/spNotice'),
          meta: {title: '企业通知', cache: true , index: '010202'}
        },
        {
          path: 'apply-open',
          name: 'applyOpenIndex',
          component: asyncImport('business/openManage/applyOpen'),
          meta: {title: '开户申请', cache: true , index: '010203'}
        },
        {
          path: 'acceptance',
          name: 'acceptance',
          component: asyncImport('business/openManage/acceptance'),
          meta: {title: '开销户受理单', cache: true , index: '010204'}
        },
        {
          path: 'accept-record',
          name: 'acceptRecord',
          component: asyncImport('business/openManage/acceptRecord'),
          meta: {title: '开销户受理单记录', cache: true , index: '010205'}
        },
        {
          path: 'busi-config',
          name: 'busiConfig',
          hidden: true,
          component: asyncImport('business/openManage/busiConfig'),
          meta: {title: '业务配置', cache: true , index: '010204'}
        },
      ]
    }
  ]
}
