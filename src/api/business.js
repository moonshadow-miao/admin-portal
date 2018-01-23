import request from '@/utils/request'

// 获取企业列表
export function Busi_spManage_getSpList(data) {
  return request({url: '/business/sp-info/get-sp-list', data,loading: true})
}

// 获取用户列表
export function Busi_spManage_getUserList(data) {
  return request({url: '/sp/user-list', data, loading: true})
}

// 冻结/解冻/销户单个企业
export function Busi_spManage_update(data) {
  return request({url: '/business/sp-info/update-sp-status', data})
}

// 单个企业变更销售
export function Busi_spManage_changSale(data) {
  return request({url: '/sp/change-sale', data})
}

// 批量冻结/解冻企业
export function Busi_spManage_batchUpdate(data) {
  return request({url: '/sp/batch-update', data})
}

// 批量变更销售
export function Busi_spManage_batchChange(data) {
  return request({url: '/sp/batch-change', data})
}

// 获取变更记录列表
export function Busi_spManage_getChangeList(data) {
  return request({url: '/sp/change-list', data,loading: true})
}
