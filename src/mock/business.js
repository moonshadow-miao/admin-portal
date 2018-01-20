import {param2Obj, success, error} from './utils'
import {RETURN_CODE} from '../utils/constant'
import {Random, mock} from 'mockjs'

export default {
  getSpList(config) {
    const data = param2Obj(config.url)
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
    console.log(param)
    let type =  param.operationType === '0' ? '解冻成功!' : '冻结成功'
    return Object.assign(success,{msg:type})
  },
  batchFreezeSp: (config) => {
    let param = JSON.parse(config.body)
    console.log(param)
    let type =  param.operationType === '0' ? '批量解冻成功!' : '批量冻结成功'
    return Object.assign(success,{msg:type})
  },
  batchChange: (config) => {
    let param = JSON.parse(config.body)
    console.log(param)
    return Object.assign(success,{msg:'批量变更成功'})
  },
  changeSale: (config) => {
    let param = JSON.parse(config.body)
    console.log(param)
    return Object.assign(success,{msg:'成功变更销售'})
  }
}

