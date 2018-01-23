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

export function Common_getIndustries(data) {
  return request({url: '/common/industries', data})
}

export function Common_getPlatForm() {
  return request({url: '/common/platform'})
}

