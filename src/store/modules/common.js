import {Common_login, Common_logout, Common_getInfo, Common_getPlatForm, Common_getIndustries} from '@/api/common'
import {getToken, setToken, removeToken} from '@/utils/auth'
import {getSession, setSession} from '@/utils/index'
import Cookies from 'js-cookie'
import {Message, MessageBox} from 'element-ui'

window.PLATFORM = {}
window.CITY_MAP = {}

const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(navigator.userAgent)
const initUser = {
  name: '孙立明',
  avatar: '',
  roles: [],
}

const getPlatform = (list) => {
  if(!list || !list.length) return
  list.forEach(item=>{
    PLATFORM[item.platformVo.id] = item.platformVo.name
    if(item.platformVo.id != '1'){
      item.channelVOes.forEach(city=>{
        CITY_MAP[city.id] = city.name
      })
    }
  })
}

getPlatform(getSession('platformInfo'))

const common = {
  namespaced: true,
  state: {
    token: getToken(),
    user: Object.assign({}, initUser),
    platformInfo: getSession('platformInfo') || [],
    industries: getSession('industries') || [],
    menuIsExpand:!isMobile && !!+Cookies.get('sidebarStatus')
  },

  mutations: {
    SET_USER: (state, userInfo) => {
      state.user = Object.assign(state.user, userInfo)
    },
    REMOVE_USER: (state) => {
      state.user = Object.assign(state.user, initUser)
    },
    STORE_PLATFORM_AND_CITIES: (state,list) => {
      state.platformInfo = list
      setSession('platformInfo', list)
      getPlatform(list)
    },
    STORE_INDUSTRIES: (state, list) => {
      state.industries = list
      setSession('industries', list)
    },
    TOGGLE_MENU: state => {
      if (state.menuIsExpand) {
        Cookies.set('sidebarStatus', 0)
      } else {
        Cookies.set('sidebarStatus', 1)
      }
      state.menuIsExpand = !state.menuIsExpand
    },
  },

  actions: {
    // 登录
    login({commit}, userInfo) {
      return new Promise((resolve) => {
        let response = {"roles":["admin"],"token":"admin","name":"孙立明"}
        setToken(response.token)
        commit('SET_USER', response)
        Message({message: '登录成功!', type: 'success', duration: 2 * 1000})
        resolve()
        // Common_login(userInfo).then(response => {
        //   setToken(response.token)
        //   commit('SET_USER', response)
        //   Message({message: '登录成功!', type: 'success', duration: 2 * 1000})
        //   resolve()
        // }).catch(err => {
        //   Message({message: err.message, type: 'error', duration: 2 * 1000})
        // })
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
