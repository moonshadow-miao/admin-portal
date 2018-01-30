
import Mock from 'mockjs'
import commonAPI from './common'
import businessAPI from './business'

Mock.setup({
  timeout: '100-500'
})


// 登录相关
Mock.mock(/\/user\/login/, 'post', commonAPI.loginByUsername)
Mock.mock(/\/user\/user/, 'post', commonAPI.getUserInfo)
Mock.mock(/\/user\/logout/, 'post', commonAPI.logout)

// 公共相关
// Mock.mock(/\/platform\/get-industry-types/, 'post', commonAPI.getIndustryList)
// Mock.mock(/\/platform\/get-all-platform-and-channels/, 'post', commonAPI.getPlatform)

// 业务受理相关 - 企业管理
Mock.mock(/business\/sp-info\/get-sp-list/, 'post', businessAPI.getSpList)
Mock.mock(/\/business\/update-sp-status/, 'post', businessAPI.freezeSp)
Mock.mock(/\/business\/sp-info\/update-sp-statuses/, 'post', businessAPI.batchFreezeSp)
Mock.mock(/\/business\/sp-info\/update-sales/, 'post', businessAPI.batchChange)
Mock.mock(/\/sp\/change-list/, 'post', businessAPI.getChangeList)

// 业务受理相关 - 开户管理
Mock.mock(/\/business\/sp-open\/get-acceptance-list/, 'post', businessAPI.getAcceptanceList)

