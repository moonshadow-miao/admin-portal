import {param2Obj, success, error} from './utils'
import {RETURN_CODE} from '../utils/constant'
import {Random, mock} from 'mockjs'

export default {
  getSpList(config) {
    const data = param2Obj(config.url)
    console.log('%c请求参数 :','color:green' ,data)
    return data ? Object.assign(mock({
      ["data|10"]: [
        {
          id:Random.id(),
          createTime: Random.datetime(),
          spCode: Random.zip(),
          spName: Random.ctitle(),
          contactName: '上海',
          platform: Random.province(),
          city: Random.city(),
          contactPhone: '',
          customerManagerName: '',
          customerManagerMdn: '',
          certification: [],
          ...mock({"spType|1": ["2","0","1","3"]}),
          ...mock({"status|1": ["2","0"]})
        }
      ]
    }), {code: RETURN_CODE.SUCCESS,dataCount:152}) : error
  },
  freezeSp: (config) => {
    let param = JSON.parse(config.body)
    console.log('%c请求参数 :','color:green' ,param)
    let type =  param.operationType === '0' ? '解冻成功!' : '冻结成功'
    return Object.assign(success,{msg:type})
  },
  batchFreezeSp: (config) => {
    let param = JSON.parse(config.body)
    console.log('%c请求参数 :','color:green' ,param)
    let type =  param.operationType === '0' ? '批量解冻成功!' : '批量冻结成功'
    return Object.assign(success,{msg:type})
  },
  batchChange: (config) => {
    let param = JSON.parse(config.body)
    console.log('%c请求参数 :','color:green' ,param)
    return Object.assign(success,{msg:'批量变更成功'})
  },
  changeSale: (config) => {
    let param = JSON.parse(config.body)
    console.log('%c请求参数 :','color:green' ,param)
    return Object.assign(success,{msg:'成功变更销售'})
  },
  getChangeList(config) {
    const data = param2Obj(config.url)
    console.log('%c请求参数 :','color:green' ,data)
    return data ? Object.assign(mock({
      ["data|10"]: [
        {
          operatorId:Random.id(),
          createTime: Random.datetime(),
          spCode: Random.zip(),
          spName: Random.ctitle(),
          operatorName: Random.cname(),
          contactName: '上海',
          platform: Random.province(),
          city: Random.city(),
          remark: Random.cparagraph(1),
          ...mock({"attrName|1": ["2","0","1","3","4"]}),
          ...mock({"attrFromValue|1": ["2","0","1","3","4"]}),
          ...mock({"attrToValue|1": ["2","0","1","3","4"]}),
        }
      ]
    }), {code: RETURN_CODE.SUCCESS,dataCount:117}) : error
  },
}

