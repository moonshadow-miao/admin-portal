import request from '@/utils/request'

/**************************************** 企业管理 start   *******************************/
// 获取企业列表
export function Busi_spManage_getSpList(data) {
  return request({url: '/business/sp-info/get-sp-list', data, loading: true})
}

// 冻结/解冻/销户单个企业
export function Busi_spManage_update(data) {
  return request({url: '/business/sp-info/update-sp-status', data})
}

// 批量冻结/解冻/销户企业
export function Busi_spManage_batchUpdate(data) {
  return request({url: '/business/sp-info/update-sp-statuses', data})
}

// 获取用户列表
export function Busi_spManage_getUserList(data) {
  return request({url: '/sp/user-list', data, loading: true})
}

// 批量变更销售
export function Busi_spManage_batchChange(data) {
  return request({url: '/business/sp-info/update-sales', data})
}

// 获取变更记录列表
export function Busi_spManage_getChangeList(data) {
  return request({url: '/sp/change-list', data, loading: true})
}
/**************************************** 企业管理 end   *******************************/




/**************************************** 开户管理 end   *******************************/
const BUSINESS_SPOPEN = '/business/sp-open';
//上传文件
export const Busi_upload_file = process.env.BASE_API + '/business/sp-open/upload-file';

// 企业名称的唯一性验证
export const Busi_check_spName = (data) => {
  return request({url: `${BUSINESS_SPOPEN}/check-sp-name`, data});
};

//管理员手机号码的唯一性验证
export const Busi_check_mobile = (data) => {
  return request({url: `${BUSINESS_SPOPEN}/check-mobile`, data});
};

//管理员账号的唯一性验证
export const Busi_check_administrator_account = (data) => {
  return request({url: `${BUSINESS_SPOPEN}/check-administrator-account `, data});
};

//添加企业信息
export const Busi_add_spInfo = (data) => {
  return request({url: `${BUSINESS_SPOPEN}/add-sp-info `, data});
};

//添加渠道信息
export const Busi_add_channelInfo = (data) => {
  return request({url: `${BUSINESS_SPOPEN}/add-channel-info `, data});
};

//添加账户信息
export const Busi_add_accountInfo = (data) => {
  return request({url: `${BUSINESS_SPOPEN}/add-account-info `, data});
};

//更新资质信息
export const Busi_add_qualification_info = (data) => {
  return request({url: `${BUSINESS_SPOPEN}/add-qualification-info`, data});
};

//手机号码归属地查询
export const Busi_get_mdn_attribute = (data) => {
  return request({url: `${BUSINESS_SPOPEN}/get-mdn-attribute`, data});
};



// 开销户受理单 - 列表查询
export const Busi_spOpen_acceptanceList = (data) => {
  return request({url: `/business/sp-open/get-acceptance-list`, data});
};

/**************************************** 开户管理 end   *******************************/









