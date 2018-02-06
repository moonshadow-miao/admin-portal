import {param2Obj, success, error} from './utils'
import {RETURN_CODE} from '../utils/constant'
import {Random, mock} from 'mockjs'

export default {
  getSpList(config) {
    const param = JSON.parse(config.body)
    console.log('%c请求参数 :', 'color:green', param,'请求url :',config.url.match(/\/[\w-]+\/[\w-]+\b$/)[0])
    let data = Array(10).fill(1).map(() => ({
      spId: Random.id(),
      ctime: new Date().getTime(),
      spCode: Random.zip(),
      spName: Random.ctitle(),
      contactName: Random.cname(),
      platform: Random.province(),
      city: Random.city(),
      contactPhone: '',
      customerManagerName: Random.cname(),
      customerManagerMdn: '',
      certification: [],
      ...mock({"spType|1": ["2", "0", "1", "3"]}),
      ...mock({"status|1": ["2", "0"]})
    }))
    return param ? Object.assign({data}, {code: RETURN_CODE.SUCCESS, dataCount: 152}) : error
  },
  freezeSp: (config) => {
    let param = JSON.parse(config.body)
    console.log('%c请求参数 :', 'color:green', param,config.url.match(/\/[\w-]+\/[\w-]+\b$/)[0])
    let type = param.operationType === '0' ? '解冻成功!' : '冻结成功'
    return Object.assign(success, {msg: type})
  },
  batchFreezeSp: (config) => {
    let param = JSON.parse(config.body)
    console.log('%c请求参数 :', 'color:green', param,config.url.match(/\/[\w-]+\/[\w-]+\b$/)[0])
    let type = param.operationType === '0' ? '批量解冻成功!' : '批量冻结成功'
    return Object.assign(success, {msg: type})
  },
  batchChange: (config) => {
    let param = JSON.parse(config.body)
    console.log('%c请求参数 :', 'color:green', param,config.url.match(/\/[\w-]+\/[\w-]+\b$/)[0])
    return Object.assign(success, {msg: '批量变更成功'})
  },
  changeSale: (config) => {
    let param = JSON.parse(config.body)
    console.log('%c请求参数 :', 'color:green', param,config.url.match(/\/[\w-]+\/[\w-]+\b$/)[0])
    return Object.assign(success, {msg: '成功变更销售'})
  },
  getChangeList(config) {
    let param = JSON.parse(config.body)
    console.log('%c请求参数 :', 'color:green', param,config.url.match(/\/[\w-]+\/[\w-]+\b$/)[0])
    return param ? Object.assign(mock({
      ["data|10"]: [
        {
          operatorId: Random.id(),
          ctime: new Date().getTime(),
          spCode: Random.zip(),
          spName: Random.ctitle(),
          operatorName: Random.cname(),
          contactName: Random.ctitle(),
          platform: Random.province(),
          city: Random.city(),
          remark: Random.cparagraph(1),
          ...mock({"attrName|1": ["2", "0", "1", "3", "4"]}),
          ...mock({"attrFromValue|1": ["2", "0", "1", "3", "4"]}),
          ...mock({"attrToValue|1": ["2", "0", "1", "3", "4"]}),
        }
      ]
    }), {code: RETURN_CODE.SUCCESS, dataCount: 117}) : error
  },
  getAcceptanceList(config){
    let param = JSON.parse(config.body)
    console.log('%c请求参数 :', 'color:green', param,config.url.match(/\/[\w-]+\/[\w-]+\b$/)[0])
    let data = Array(10).fill(1).map(() => ({
      spId: Random.id(),
      acceptanceNo: Random.integer(100000, 999999),
      createTime: new Date().getTime(),
      spName: Random.ctitle(),
      contactName: Random.cname(),
      feeMdn: '15571412121',
      operatorName: Random.cname(),
      description: Random.ctitle(),
      ...mock({"spCode|100001-999999": 100001}),
      ...mock({"channelId|1-33": 1}),
      ...mock({"type|1": ["2", "0", "1", "3","4"]}),
      ...mock({"status|1": ["0000","0001","0002","0003","0004","0005","0006","0007","0008","0009","0010","0011"]})
    }))
    return param ? Object.assign({data}, {code: RETURN_CODE.SUCCESS, dataCount: 152}) : error
  }
}

