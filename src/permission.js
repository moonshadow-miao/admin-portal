import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import {Message} from 'element-ui'
import {getToken} from '@/utils/auth' // 鉴权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  // 未登录
  if (!getToken()) {
    whiteList.indexOf(to.path) !== -1 ? next() : next('/login')
    NProgress.done()
    return
  }
  // 已登录
  if (to.path === '/login' && store.state.common.roles.length === 0) {
    store.dispatch('common/getInfo').then(res => { // 拉取用户信息
      next()
    }).catch(() => {
      store.dispatch('common/fedLogOut').then(() => {
        Message.error('验证失败,请重新登录')
        next({path: '/login'})
      })
    })
  } else if (to.path === '/login') {
    next({path: '/'})
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
