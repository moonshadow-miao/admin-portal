import request from '@/utils/request'

// 获取企业列表
export function Busi_spManage_getSpList(params) {
  return request({
    url: '/sp/sp-list',
    method: 'get',
    params,
    loading: true
  })
}

// 获取用户列表
export function Busi_spManage_getUserList(params) {
  return request({
    url: '/sp/user-list',
    method: 'get',
    params,
    loading: true
  })
}

// 冻结/解冻/销户单个企业
export function Busi_spManage_update(data) {
  return request({
    url: '/sp/update',
    method: 'post',
    data
  })
}

// 单个企业变更销售
export function Busi_spManage_changSale(data) {
  return request({
    url: '/sp/change-sale',
    method: 'post',
    data
  })
}

// 批量冻结/解冻企业
export function Busi_spManage_batchUpdate(data) {
  return request({
    url: '/sp/batch-update',
    method: 'post',
    data
  })
}

// 批量变更销售
export function Busi_spManage_batchChange(data) {
  return request({
    url: '/sp/batch-change',
    method: 'post',
    data
  })
}

// 获取变更记录列表
export function Busi_spManage_getChangeList(params) {
  return request({
    url: '/sp/change-list',
    method: 'get',
    params,
    loading: true
  })
}
