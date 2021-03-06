
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

// 根据环境异步加载组件
export const asyncImport = process.env.NODE_ENV === 'development' ? (file,path) => require(`@/${path ? path :'views'}/${file}.vue`).default : (file,path) => () => import(`@/${path || 'views'}/${file}.vue`)

// 操作session
export function getSession(key) {
  let data = window.localStorage.getItem(key)
  return data === 'undefined' || !data  ? null :  JSON.parse(data)
}

export function setSession(key,data) {
  return window.localStorage.setItem(key,JSON.stringify(data))
}

// 根据省份 , 城市id获取城市名
export function getCityAndPlatform(platId = '1',cityId) {
  let platformList = getSession('platformList')
  let citiesMap = getSession('citiesMap')
  if(!citiesMap || !platformList ) return
  let platformMap = platformList.find(item=>item.id === platId)
  let cityMap = (citiesMap[platId] || citiesMap['1']).find(item=>item.code === cityId)
  return {
    platform:platformMap? platformMap.name :'无',
    city: cityMap? cityMap.name :'无'
  }
}

// 时间戳转字符串
export function dateFormat(time) {
  let date = new Date(time)
  return date.getFullYear() + '-' + (date.getMonth() +1) + '- ' + date.getDate() + '  ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}


