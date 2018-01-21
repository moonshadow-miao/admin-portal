
import Mock from 'mockjs'
import commonAPI from './common'
import businessAPI from './business'

Mock.setup({
  timeout: '100-500'
})


// 登录相关
Mock.mock(/\/user\/login/, 'post', commonAPI.loginByUsername)
Mock.mock(/\/user\/user/, 'get', commonAPI.getUserInfo)
Mock.mock(/\/user\/logout/, 'post', commonAPI.logout)

// 公共相关
Mock.mock(/\/common\/industries/, 'get', commonAPI.getIndustryList)
Mock.mock(/\/common\/platform/, 'get', commonAPI.getPlatform)

// 业务受理相关 - 企业管理
Mock.mock(/\/sp\/sp-list/, 'get', businessAPI.getSpList)
Mock.mock(/\/sp\/update/, 'post', businessAPI.freezeSp)
Mock.mock(/\/sp\/batch-update/, 'post', businessAPI.batchFreezeSp)
Mock.mock(/\/sp\/batch-change/, 'post', businessAPI.batchChange)
Mock.mock(/\/sp\/change-sale/, 'post', businessAPI.changeSale)
Mock.mock(/\/sp\/change-list/, 'get', businessAPI.getChangeList)

