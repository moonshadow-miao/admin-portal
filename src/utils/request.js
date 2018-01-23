import axios from 'axios'
import {Message, MessageBox, Loading} from 'element-ui'
import store from '../store'
import {getToken} from '@/utils/auth'
import {RETURN_CODE} from '@/utils/constant'

let loadingInstance = null;

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})
// app-container

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  config.loading = config.loading === undefined ? false : config.loading
  config.method = 'post'
  if (config.loading) {
    loadingInstance = Loading.service({
      target: '.app-main',
      text:'拼命加载中~~~',
      background:'transparent'
    })
  }
  return config
}, error => {
  loadingInstance && loadingInstance.close();
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    loadingInstance && loadingInstance.close();
    const res = response.data
    if (res.code == RETURN_CODE.SUCCESS) return response.data
    // 50008:非法的token;  50014:Token 过期了;
    if (res.code === RETURN_CODE.ILLEGAL || res.code === RETURN_CODE.EXPIRED) {
      MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('common/fedLogOut').then(() => {
          location.reload()// 为了重新实例化vue-router对象 避免bug
        })
      })
    }
    Message({message: res.message, type: 'error', duration: 2 * 1000})
  },
  error => {
    loadingInstance && loadingInstance.close();
    console.log('err' + error)// for debug
    Message({message: error.message, type: 'error', duration: 2 * 1000})
  }
)

export default service
