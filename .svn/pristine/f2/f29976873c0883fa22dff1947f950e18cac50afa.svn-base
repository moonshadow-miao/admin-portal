import request from '@/utils/request'

export function Common_login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function Common_getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function Common_logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function Common_getIndustries(params) {
  return request({
    url: '/common/industries',
    method: 'get',
    params
  })
}

export function Common_getPlatForm() {
  return request({
    url: '/common/platfrom',
    method: 'get'
  })
}

