import {Common_login, Common_logout, Common_getInfo, Common_getPlatForm, Common_getIndustries} from '@/api/common'
import {getToken, setToken, removeToken} from '@/utils/auth'
import {getSession, setSession} from '@/utils/index'
import Cookies from 'js-cookie'
import {Message, MessageBox} from 'element-ui'

const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(navigator.userAgent)
const initUser = {
  name: '',
  avatar: '',
  roles: [],
}
const common = {
  namespaced: true,
  state: {
    token: getToken(),
    user: Object.assign({}, initUser),
    isMobile: isMobile,
    showTag: false,
    sidebar: {
      opened: !isMobile && !+Cookies.get('sidebarStatus')
    },
    cachedViews: [],
    currentView: '',
    platformInfo: getSession('platformInfo') || [],
    industries: getSession('industries') || [],
  },

  mutations: {
    SET_USER: (state, userInfo) => {
      state.user = Object.assign(state.user, userInfo)
    },
    REMOVE_USER: (state) => {
      state.user = Object.assign(state.user, initUser)
    },
    ADD_CACHED_VIEWS: (state, route) => {
      if (state.cachedViews.findIndex(item => item.name === route.name) !== -1) return
      if (state.cachedViews.length >= 5) {
        state.cachedViews.shift()
      }
      state.cachedViews.push(route)
    },
    DEL_CACHED_VIEWS: (state, view) => {
      if (state.cachedViews.length <= 1) return
      let index = state.cachedViews.findIndex(item => item.name === view)
      if (index !== -1) {
        state.cachedViews.splice(index, 1)
      }
    },
    CHANGE_TAG: (state, status) => {
      state.showTag = status
    },
    STORE_PLATFORM_AND_CITIES: (state,list) => {
      state.platformInfo = list
      setSession('platformInfo', list)
    },
    STORE_INDUSTRIES: (state, list) => {
      state.industries = list
      setSession('industries', list)
    },
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
  },

  actions: {
    // 登录
    login({commit}, userInfo) {
      return new Promise((resolve) => {
        Common_login(userInfo).then(response => {
          setToken(response.token)
          commit('SET_USER', response)
          Message({message: '登录成功!', type: 'success', duration: 2 * 1000})
          resolve()
        }).catch(err => {
          Message({message: err.message, type: 'error', duration: 2 * 1000})
        })
      })
    },
    // 获取用户信息
    getInfo({commit, state}) {
      return new Promise((resolve) => {
        Common_getInfo(state.token).then(response => {
          commit('SET_USER', response.response)
          resolve(response)
        })
      })
    },
    // 登出
    logOut({commit, state}) {
      return new Promise((resolve) => {
        Common_logout(state.token).then(() => {
          commit('REMOVE_USER')
          removeToken()
          resolve()
        })
      })
    },
    // 前端 登出
    fedLogOut({commit}) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
    addView({commit, state}, route) {
      if (!state.showTag) return Promise.resolve()
      return new Promise((resolve) => {
        commit('ADD_CACHED_VIEWS', route)
        resolve()
      })
    },
    delView({commit, state}, view) {
      return new Promise((resolve) => {
        let index = state.cachedViews.findIndex(item => item.name === view)
        index = index === 0 ? 0 : index - 1
        commit('DEL_CACHED_VIEWS', view)
        resolve(state.cachedViews[index])
      })
    },
    getPlatform({commit}) {
      return new Promise(resolve=>{
        Common_getPlatForm().then(({data}) => {
          commit('STORE_PLATFORM_AND_CITIES',data)
          resolve()
        })
      })
    },
    getIndustries({commit}) {
      Common_getIndustries().then(({data = []}) => {
        commit('STORE_INDUSTRIES', data)
      })
    }
  }
}

export default common
