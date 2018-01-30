import request from '@/utils/request'

export function Common_login(username, password) {
  return request({url: '/user/login', data: {username, password}})
}

export function Common_getInfo(token) {
  return request({url: '/user/info', data: { token }})
}

export function Common_logout() {
  return request({url: '/user/logout'})
}

// 获取行业信息
export function Common_getIndustries() {
  return request({url: '/platform/get-industry-types'})
}

// 获取省份和城市
export function Common_getPlatForm() {
  return request({url: '/platform/get-all-platform-and-channels'})
}

