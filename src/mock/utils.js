import {RETURN_CODE} from "../utils/constant";

export const error = {
  code: RETURN_CODE.ERROR,
  msg: '请求失败'
}

export const success = {
  code: RETURN_CODE.SUCCESS,
  msg: '请求成功'
}

export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

