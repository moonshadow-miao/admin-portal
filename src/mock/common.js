import {RETURN_CODE} from '../utils/constant'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    code: RETURN_CODE.SUCCESS
  }
}

export default {
  loginByUsername: config => {
    const {username: {username}} = JSON.parse(config.body)
    return username ? userMap[username] : error
  },
  getUserInfo: config => {
    const {token} = JSON.parse(config.body)
    return token ? userMap[token] : error
  },
  logout: () => success,
  getIndustryList: () => ({
    code: RETURN_CODE.SUCCESS,
    data: industry
  }),
  getPlatform: () => ({
    code: RETURN_CODE.SUCCESS,
    data: platform
  }),
}

const industry = [
  {"parentId": "100", "childTypes": [{"id": "101", "name": "全部"}], "parentName": "全部"}, {
    "parentId": "1000",
    "childTypes": [{"id": "1001", "name": "计算机软件"}, {"id": "1002", "name": "计算机硬件"}, {
      "id": "1003",
      "name": "电信"
    }, {"id": "1004", "name": "网络设备"}, {"id": "1005", "name": "电信运营"}, {"id": "1006", "name": "电信增值服务"}, {
      "id": "1007",
      "name": "互联网"
    }, {"id": "1008", "name": "电子商务"}, {"id": "1009", "name": "网络游戏"}, {"id": "1010", "name": "半导体"}, {
      "id": "1011",
      "name": "集成电路"
    }, {"id": "1012", "name": "仪器仪表"}, {"id": "1013", "name": "工业自动化"}],
    "parentName": "信息产业"
  }, {
    "parentId": "1100",
    "childTypes": [{"id": "1101", "name": "会计"}, {"id": "1102", "name": "审计"}, {
      "id": "1103",
      "name": "金融"
    }, {"id": "1104", "name": "投资"}, {"id": "1105", "name": "证券"}, {"id": "1106", "name": "银行"}, {
      "id": "1107",
      "name": "保险"
    }],
    "parentName": "金融保险"
  }, {
    "parentId": "1200",
    "childTypes": [{"id": "1201", "name": "国内贸易"}, {"id": "1202", "name": "进出口贸易"}, {
      "id": "1203",
      "name": "批发"
    }, {"id": "1204", "name": "零售"}, {"id": "1205", "name": "快速消费品"}, {"id": "1206", "name": "服装"}, {
      "id": "1207",
      "name": "纺织"
    }, {"id": "1208", "name": "皮革"}, {"id": "1209", "name": "家具"}, {"id": "1210", "name": "家电"}, {
      "id": "1211",
      "name": "工艺品"
    }, {"id": "1212", "name": "玩具"}, {"id": "1213", "name": "珠宝"}, {"id": "1214", "name": "奢侈品"}, {
      "id": "1215",
      "name": "收藏品"
    }, {"id": "1216", "name": "办公用品及设备"}, {"id": "1217", "name": "机械设备"}, {"id": "1218", "name": "汽车"}],
    "parentName": "贸易消费"
  }, {
    "parentId": "1300",
    "childTypes": [{"id": "1301", "name": "制药"}, {"id": "1302", "name": "生物工程"}, {
      "id": "1303",
      "name": "医院"
    }, {"id": "1304", "name": "护理"}, {"id": "1305", "name": "医疗器械"}],
    "parentName": "医疗制药"
  }, {
    "parentId": "1400",
    "childTypes": [{"id": "1401", "name": "广告"}, {"id": "1402", "name": "公关"}, {
      "id": "1403",
      "name": "市场推广"
    }, {"id": "1404", "name": "会展"}, {"id": "1405", "name": "影视"}, {"id": "1406", "name": "媒体"}, {
      "id": "1407",
      "name": "艺术"
    }, {"id": "1408", "name": "文化传播"}, {"id": "1409", "name": "出版"}, {"id": "1410", "name": "印刷"}, {
      "id": "1411",
      "name": "包装"
    }, {"id": "1412", "name": "造纸"}],
    "parentName": "媒体广告"
  }, {
    "parentId": "1500",
    "childTypes": [{"id": "1501", "name": "房地产开发"}, {"id": "1502", "name": "建筑工程"}, {
      "id": "1503",
      "name": "建材"
    }, {"id": "1504", "name": "装潢"}, {"id": "1505", "name": "室内设计"}, {"id": "1506", "name": "物业管理"}],
    "parentName": "地产建筑"
  }, {
    "parentId": "1600",
    "childTypes": [{"id": "1601", "name": "中介服务"}, {"id": "1602", "name": "专业咨询"}, {
      "id": "1603",
      "name": "劳务外包"
    }, {"id": "1604", "name": "检测认证"}, {"id": "1605", "name": "法律服务"}, {"id": "1606", "name": "教育机构"}, {
      "id": "1607",
      "name": "培训机构"
    }, {"id": "1608", "name": "学术科研"}],
    "parentName": "文教咨询"
  }, {
    "parentId": "1700",
    "childTypes": [{"id": "1701", "name": "餐饮"}, {"id": "1702", "name": "酒店"}, {
      "id": "1703",
      "name": "旅游"
    }, {"id": "1704", "name": "休闲娱乐"}, {"id": "1705", "name": "体育"}, {"id": "1706", "name": "美容"}, {
      "id": "1707",
      "name": "保健"
    }, {"id": "1708", "name": "生活服务"}],
    "parentName": "生活服务"
  }, {
    "parentId": "1800",
    "childTypes": [{"id": "1801", "name": "交通运输"}, {"id": "1802", "name": "物流"}, {
      "id": "1803",
      "name": "航天"
    }, {"id": "1804", "name": "航空"}, {"id": "1805", "name": "铁路运输"}, {"id": "1806", "name": "公路运输"}, {
      "id": "1807",
      "name": "港口"
    }, {"id": "1808", "name": "航运"}, {"id": "1809", "name": "车站"}, {"id": "1810", "name": "机场"}],
    "parentName": "交通物流"
  }, {
    "parentId": "1900",
    "childTypes": [{"id": "1901", "name": "石油"}, {"id": "1902", "name": "化工"}, {
      "id": "1903",
      "name": "采掘"
    }, {"id": "1904", "name": "冶炼"}, {"id": "1905", "name": "电力"}, {"id": "1906", "name": "水利"}, {
      "id": "1907",
      "name": "能源"
    }, {"id": "1908", "name": "原材料加工"}, {"id": "1909", "name": "精密加工"}],
    "parentName": "工业能源"
  }, {
    "parentId": "2000",
    "childTypes": [{"id": "2001", "name": "政府"}, {"id": "2002", "name": "公共事业"}, {
      "id": "2003",
      "name": "非营利机构"
    }, {"id": "2004", "name": "社会团体"}, {"id": "2005", "name": "军队"}],
    "parentName": "政府机构"
  }, {
    "parentId": "2100",
    "childTypes": [{"id": "2101", "name": "种植业"}, {"id": "2102", "name": "林业"}, {
      "id": "2103",
      "name": "畜牧业"
    }, {"id": "2104", "name": "副业"}, {"id": "2105", "name": "渔业"}],
    "parentName": "农林牧渔"
  }, {
    "parentId": "2200",
    "childTypes": [{"id": "2201", "name": "酒店"}, {"id": "2202", "name": "餐饮"}, {
      "id": "2203",
      "name": "电商"
    }, {"id": "2204", "name": "客服"}, {"id": "2205", "name": "快递物流"}, {"id": "2206", "name": "连锁专卖"}, {
      "id": "2207",
      "name": "汽车"
    }, {"id": "2208", "name": "社区服务"}, {"id": "2209", "name": "物业管理"}, {"id": "2210", "name": "金融咨询"}, {
      "id": "2211",
      "name": "制造"
    }, {"id": "2212", "name": "零售贸易"}, {"id": "2213", "name": "教育培训"}, {"id": "2214", "name": "休闲娱乐"}, {
      "id": "2215",
      "name": "营销工具"
    }, {"id": "2216", "name": "医疗"}, {"id": "2217", "name": "房产"}],
    "parentName": "中小微企业"
  }, {"parentId": "9900", "childTypes": [{"id": "9901", "name": "其他"}], "parentName": "其他"}
]

const platform = {
  citiesMap: {
    "1": [
      {"id": "3301", "platform": "1", "name": "其他", "code": "0951", "pinyin": "qita"},
      {
        "id": "1013302",
        "platform": "1",
        "name": "宁夏",
        "code": "0951",
        "pinyin": "ningxia"
      }, {
        "id": "1013303",
        "platform": "1",
        "name": "上海电信",
        "code": "0951",
        "pinyin": "shanghaidianxin"
      }, {"id": "1013304", "platform": "1", "name": "湖北", "code": "0951", "pinyin": "hubei"}, {
        "id": "1013305",
        "platform": "1",
        "name": "浙江",
        "code": "0951",
        "pinyin": "zhejiang"
      }, {"id": "1013306", "platform": "1", "name": "江西", "code": "0951", "pinyin": "jiangxi"}, {
        "id": "1013307",
        "platform": "1",
        "name": "上海",
        "code": "0951",
        "pinyin": "shanghai"
      }, {"id": "1013308", "platform": "1", "name": "江苏", "code": "0951", "pinyin": "jiangsu"}, {
        "id": "1013309",
        "platform": "1",
        "name": "天津",
        "code": "0951",
        "pinyin": "tianjing"
      }, {"id": "1013310", "platform": "1", "name": "重庆", "code": "0951", "pinyin": "chongqing"}, {
        "id": "1013311",
        "platform": "1",
        "name": "河北",
        "code": "0951",
        "pinyin": "hebei"
      }, {"id": "1013312", "platform": "1", "name": "云南", "code": "0951", "pinyin": "yunnan"}, {
        "id": "1013313",
        "platform": "1",
        "name": "辽宁",
        "code": "0951",
        "pinyin": "liaoning"
      }, {"id": "1013314", "platform": "1", "name": "黑龙江", "code": "0951", "pinyin": "heilongjiang"}, {
        "id": "1013315",
        "platform": "1",
        "name": "山东",
        "code": "0951",
        "pinyin": "shandong"
      }, {"id": "1013316", "platform": "1", "name": "广西", "code": "0951", "pinyin": "guangxi"}, {
        "id": "1013317",
        "platform": "1",
        "name": "甘肃",
        "code": "0951",
        "pinyin": "gansu"
      }, {"id": "1013318", "platform": "1", "name": "山西", "code": "0951", "pinyin": "shanxi"}, {
        "id": "1013319",
        "platform": "1",
        "name": "陕西",
        "code": "0951",
        "pinyin": "shanxi"
      }, {"id": "1013320", "platform": "1", "name": "福建", "code": "0951", "pinyin": "fujian"}, {
        "id": "1013321",
        "platform": "1",
        "name": "广东",
        "code": "0951",
        "pinyin": "guangdong"
      }, {"id": "1013322", "platform": "1", "name": "四川", "code": "0951", "pinyin": "sichuan"}, {
        "id": "1013323",
        "platform": "1",
        "name": "青海",
        "code": "0951",
        "pinyin": "qinghai"
      }, {"id": "1013324", "platform": "1", "name": "海南", "code": "0951", "pinyin": "hainan"}, {
        "id": "1013325",
        "platform": "1",
        "name": "总部",
        "code": "0951",
        "pinyin": "zongbu"
      }, {"id": "1013326", "platform": "1", "name": "吉林", "code": "0951", "pinyin": "jilin"}, {
        "id": "1013327",
        "platform": "1",
        "name": "湖南",
        "code": "0951",
        "pinyin": "hunan"
      }],
    "2": [{"id": "1", "platform": "2", "name": "十堰", "code": "0009", "pinyin": ""}, {
      "id": "2",
      "platform": "2",
      "name": "襄阳",
      "code": "0005",
      "pinyin": ""
    }, {"id": "3", "platform": "2", "name": "随州", "code": "0013", "pinyin": ""}, {
      "id": "4",
      "platform": "2",
      "name": "孝感",
      "code": "0010",
      "pinyin": ""
    }, {"id": "5", "platform": "2", "name": "武汉", "code": "0003", "pinyin": ""}, {
      "id": "6",
      "platform": "2",
      "name": "黄冈",
      "code": "0008",
      "pinyin": ""
    }, {"id": "7", "platform": "2", "name": "鄂州", "code": "0014", "pinyin": ""}, {
      "id": "8",
      "platform": "2",
      "name": "黄石",
      "code": "0004",
      "pinyin": ""
    }, {"id": "9", "platform": "2", "name": "咸宁", "code": "0012", "pinyin": ""}, {
      "id": "10",
      "platform": "2",
      "name": "江汉",
      "code": "0020",
      "pinyin": ""
    }, {"id": "11", "platform": "2", "name": "荆州", "code": "0006", "pinyin": ""}, {
      "id": "12",
      "platform": "2",
      "name": "宜昌",
      "code": "0007",
      "pinyin": ""
    }, {"id": "13", "platform": "2", "name": "恩施", "code": "0016", "pinyin": ""}, {
      "id": "14",
      "platform": "2",
      "name": "荆门",
      "code": "0011",
      "pinyin": ""
    }],
    "3": [{"id": "20301", "platform": "3", "name": "杭州", "code": "0009", "pinyin": ""}, {
      "id": "20302",
      "platform": "3",
      "name": "温州",
      "code": "0005",
      "pinyin": ""
    }, {"id": "20303", "platform": "3", "name": "衢州", "code": "0013", "pinyin": ""}, {
      "id": "20304",
      "platform": "3",
      "name": "湖州",
      "code": "0010",
      "pinyin": ""
    }, {"id": "20305", "platform": "3", "name": "嘉兴", "code": "0003", "pinyin": ""}, {
      "id": "20306",
      "platform": "3",
      "name": "台州",
      "code": "0008",
      "pinyin": ""
    }, {"id": "20307", "platform": "3", "name": "丽水", "code": "0014", "pinyin": ""}, {
      "id": "20308",
      "platform": "3",
      "name": "金华",
      "code": "0004",
      "pinyin": ""
    }, {"id": "20309", "platform": "3", "name": "舟山", "code": "0012", "pinyin": ""}, {
      "id": "20310",
      "platform": "3",
      "name": "宁波",
      "code": "0020",
      "pinyin": ""
    }, {"id": "20311", "platform": "3", "name": "绍兴", "code": "0006", "pinyin": ""}, {
      "id": "20315",
      "platform": "3",
      "name": "帜讯",
      "code": "0002",
      "pinyin": ""
    }, {"id": "30318", "platform": "3", "name": "帜讯测试用渠道", "code": "test01", "pinyin": ""}],
    "4": [{"id": "27", "platform": "4", "name": "上饶市", "code": "4002", "pinyin": ""}, {
      "id": "403",
      "platform": "4",
      "name": "新余市",
      "code": "0790",
      "pinyin": ""
    }, {"id": "404", "platform": "4", "name": "南昌市", "code": "0791", "pinyin": ""}, {
      "id": "405",
      "platform": "4",
      "name": "九江市",
      "code": "0792",
      "pinyin": ""
    }, {"id": "407", "platform": "4", "name": "抚州市", "code": "0794", "pinyin": ""}, {
      "id": "408",
      "platform": "4",
      "name": "宜春市",
      "code": "0795",
      "pinyin": ""
    }, {"id": "409", "platform": "4", "name": "吉安市", "code": "0796", "pinyin": ""}, {
      "id": "410",
      "platform": "4",
      "name": "赣州市",
      "code": "0797",
      "pinyin": ""
    }, {"id": "411", "platform": "4", "name": "景德镇", "code": "0798", "pinyin": ""}, {
      "id": "412",
      "platform": "4",
      "name": "萍乡市",
      "code": "0799",
      "pinyin": ""
    }, {"id": "413", "platform": "4", "name": "鹰潭市", "code": "0701", "pinyin": ""}],
    "5": [{"id": "205001", "platform": "5", "name": "上海", "code": "021", "pinyin": "shanghai"}],
    "6": [{"id": "206001", "platform": "6", "name": "南京市", "code": "025", "pinyin": ""}, {
      "id": "206002",
      "platform": "6",
      "name": "无锡",
      "code": "0510",
      "pinyin": ""
    }, {"id": "206003", "platform": "6", "name": "徐州", "code": "0516", "pinyin": ""}, {
      "id": "206004",
      "platform": "6",
      "name": "常州",
      "code": "0519",
      "pinyin": ""
    }, {"id": "206005", "platform": "6", "name": "苏州", "code": "0512", "pinyin": ""}, {
      "id": "206006",
      "platform": "6",
      "name": "连云港",
      "code": "0513",
      "pinyin": ""
    }, {"id": "206007", "platform": "6", "name": "淮安", "code": "0517", "pinyin": ""}, {
      "id": "206008",
      "platform": "6",
      "name": "盐城",
      "code": "0515",
      "pinyin": ""
    }, {"id": "206009", "platform": "6", "name": "扬州", "code": "0514", "pinyin": ""}, {
      "id": "206010",
      "platform": "6",
      "name": "镇江",
      "code": "0511",
      "pinyin": ""
    }, {"id": "206011", "platform": "6", "name": "泰州", "code": "0523", "pinyin": ""}, {
      "id": "206012",
      "platform": "6",
      "name": "宿迁",
      "code": "0527",
      "pinyin": ""
    }, {"id": "206013", "platform": "6", "name": "南通", "code": "0513", "pinyin": ""}],
    "8": [{"id": "20801", "platform": "8", "name": "天津", "code": "022", "pinyin": "tianjing"}],
    "9": [{"id": "801", "platform": "9", "name": "重庆", "code": "0801", "pinyin": "chongqing"}, {
      "id": "8011",
      "platform": "9",
      "name": "九龙坡",
      "code": "801",
      "pinyin": ""
    }, {"id": "8012", "platform": "9", "name": "沙坪坝", "code": "801", "pinyin": ""}, {
      "id": "8013",
      "platform": "9",
      "name": "南岸",
      "code": "801",
      "pinyin": ""
    }, {"id": "8014", "platform": "9", "name": "大渡口", "code": "801", "pinyin": ""}, {
      "id": "8015",
      "platform": "9",
      "name": "秀山",
      "code": "801",
      "pinyin": ""
    }, {"id": "8016", "platform": "9", "name": "酉阳", "code": "801", "pinyin": ""}, {
      "id": "8017",
      "platform": "9",
      "name": "黔江",
      "code": "801",
      "pinyin": ""
    }, {"id": "8018", "platform": "9", "name": "彭水", "code": "801", "pinyin": ""}, {
      "id": "8019",
      "platform": "9",
      "name": "武隆",
      "code": "801",
      "pinyin": ""
    }, {"id": "8020", "platform": "9", "name": "南川", "code": "801", "pinyin": ""}, {
      "id": "8021",
      "platform": "9",
      "name": "北碚",
      "code": "801",
      "pinyin": ""
    }, {"id": "8022", "platform": "9", "name": "綦江", "code": "801", "pinyin": ""}, {
      "id": "8023",
      "platform": "9",
      "name": "璧山",
      "code": "801",
      "pinyin": ""
    }, {"id": "8024", "platform": "9", "name": "潼南", "code": "801", "pinyin": ""}, {
      "id": "8025",
      "platform": "9",
      "name": "合川",
      "code": "801",
      "pinyin": ""
    }, {"id": "8026", "platform": "9", "name": "铜梁", "code": "801", "pinyin": ""}, {
      "id": "8027",
      "platform": "9",
      "name": "两江新区",
      "code": "801",
      "pinyin": ""
    }, {"id": "8028", "platform": "9", "name": "渝中", "code": "801", "pinyin": ""}, {
      "id": "8029",
      "platform": "9",
      "name": "巫山",
      "code": "801",
      "pinyin": ""
    }, {"id": "8030", "platform": "9", "name": "城口", "code": "801", "pinyin": ""}, {
      "id": "8031",
      "platform": "9",
      "name": "巫溪",
      "code": "801",
      "pinyin": ""
    }, {"id": "8032", "platform": "9", "name": "忠县", "code": "801", "pinyin": ""}, {
      "id": "8033",
      "platform": "9",
      "name": "梁平",
      "code": "801",
      "pinyin": ""
    }, {"id": "8034", "platform": "9", "name": "万州", "code": "801", "pinyin": ""}, {
      "id": "8035",
      "platform": "9",
      "name": "开县",
      "code": "801",
      "pinyin": ""
    }, {"id": "8036", "platform": "9", "name": "垫江", "code": "801", "pinyin": ""}, {
      "id": "8037",
      "platform": "9",
      "name": "巴南",
      "code": "801",
      "pinyin": ""
    }, {"id": "8038", "platform": "9", "name": "渝北", "code": "801", "pinyin": ""}, {
      "id": "8039",
      "platform": "9",
      "name": "江北",
      "code": "801",
      "pinyin": ""
    }, {"id": "8040", "platform": "9", "name": "大足", "code": "801", "pinyin": ""}, {
      "id": "8041",
      "platform": "9",
      "name": "永川",
      "code": "801",
      "pinyin": ""
    }, {"id": "8042", "platform": "9", "name": "荣昌", "code": "801", "pinyin": ""}, {
      "id": "8043",
      "platform": "9",
      "name": "江津",
      "code": "801",
      "pinyin": ""
    }, {"id": "8044", "platform": "9", "name": "云阳", "code": "801", "pinyin": ""}, {
      "id": "8045",
      "platform": "9",
      "name": "奉节",
      "code": "801",
      "pinyin": ""
    }, {"id": "8046", "platform": "9", "name": "涪陵", "code": "801", "pinyin": ""}, {
      "id": "8047",
      "platform": "9",
      "name": "长寿",
      "code": "801",
      "pinyin": ""
    }, {"id": "8048", "platform": "9", "name": "石柱", "code": "801", "pinyin": ""}, {
      "id": "8049",
      "platform": "9",
      "name": "丰都",
      "code": "801",
      "pinyin": ""
    }],
    "10": [{"id": "210001", "platform": "10", "name": "石家庄", "code": "0311", "pinyin": ""}, {
      "id": "210002",
      "platform": "10",
      "name": "邯郸市",
      "code": "0310",
      "pinyin": ""
    }, {"id": "210003", "platform": "10", "name": "张家口市", "code": "0313", "pinyin": ""}, {
      "id": "210004",
      "platform": "10",
      "name": "承德市",
      "code": "0314",
      "pinyin": ""
    }, {"id": "210005", "platform": "10", "name": "唐山市", "code": "0315", "pinyin": ""}, {
      "id": "210006",
      "platform": "10",
      "name": "廊坊市",
      "code": "0316",
      "pinyin": ""
    }, {"id": "210007", "platform": "10", "name": "沧州市", "code": "0317", "pinyin": ""}, {
      "id": "210008",
      "platform": "10",
      "name": "衡水市",
      "code": "0318",
      "pinyin": ""
    }, {"id": "210009", "platform": "10", "name": "邢台市", "code": "0319", "pinyin": ""}, {
      "id": "210010",
      "platform": "10",
      "name": "秦皇岛市",
      "code": "0335",
      "pinyin": ""
    }, {"id": "210011", "platform": "10", "name": "保定市", "code": "0312", "pinyin": ""}],
    "12": [{"id": "21201", "platform": "12", "name": "昆明", "code": "0871", "pinyin": ""}, {
      "id": "21202",
      "platform": "12",
      "name": "大理",
      "code": "0872",
      "pinyin": ""
    }, {"id": "21203", "platform": "12", "name": "红河", "code": "0873", "pinyin": ""}, {
      "id": "21204",
      "platform": "12",
      "name": "曲靖",
      "code": "0874",
      "pinyin": ""
    }, {"id": "21205", "platform": "12", "name": "文山", "code": "0876", "pinyin": ""}, {
      "id": "21206",
      "platform": "12",
      "name": "玉溪",
      "code": "0877",
      "pinyin": ""
    }, {"id": "21207", "platform": "12", "name": "普洱", "code": "0870", "pinyin": ""}, {
      "id": "21208",
      "platform": "12",
      "name": "昭通",
      "code": "0879",
      "pinyin": ""
    }, {"id": "21209", "platform": "12", "name": "西双版纳", "code": "0691", "pinyin": ""}, {
      "id": "21210",
      "platform": "12",
      "name": "德宏",
      "code": "0692",
      "pinyin": ""
    }, {"id": "21211", "platform": "12", "name": "临沧", "code": "0883", "pinyin": ""}, {
      "id": "21212",
      "platform": "12",
      "name": "迪庆",
      "code": "0886",
      "pinyin": ""
    }, {"id": "21214", "platform": "12", "name": "丽江", "code": "0888", "pinyin": ""}, {
      "id": "21215",
      "platform": "12",
      "name": "怒江",
      "code": "0889",
      "pinyin": ""
    }, {"id": "21216", "platform": "12", "name": "楚雄", "code": "0890", "pinyin": ""}, {
      "id": "21217",
      "platform": "12",
      "name": "保山",
      "code": "0891",
      "pinyin": ""
    }],
    "13": [{"id": "213001", "platform": "13", "name": "沈阳", "code": "024", "pinyin": ""}, {
      "id": "213002",
      "platform": "13",
      "name": "葫芦岛",
      "code": "0429",
      "pinyin": ""
    }, {"id": "213003", "platform": "13", "name": "朝阳", "code": "0421", "pinyin": ""}, {
      "id": "213004",
      "platform": "13",
      "name": "铁岭",
      "code": "0241",
      "pinyin": ""
    }, {"id": "213005", "platform": "13", "name": "盘锦", "code": "0427", "pinyin": ""}, {
      "id": "213006",
      "platform": "13",
      "name": "辽阳",
      "code": "0419",
      "pinyin": ""
    }, {"id": "213007", "platform": "13", "name": "营口", "code": "0417", "pinyin": ""}, {
      "id": "213008",
      "platform": "13",
      "name": "锦州",
      "code": "0416",
      "pinyin": ""
    }, {"id": "213009", "platform": "13", "name": "丹东", "code": "0415", "pinyin": ""}, {
      "id": "213010",
      "platform": "13",
      "name": "鞍山",
      "code": "0412",
      "pinyin": ""
    }, {"id": "213011", "platform": "13", "name": "抚顺", "code": "0242", "pinyin": ""}, {
      "id": "213012",
      "platform": "13",
      "name": "大连",
      "code": "0411",
      "pinyin": ""
    }, {"id": "213013", "platform": "13", "name": "本溪", "code": "0414", "pinyin": ""}, {
      "id": "213014",
      "platform": "13",
      "name": "阜新",
      "code": "0418",
      "pinyin": ""
    }],
    "14": [{"id": "21401", "platform": "14", "name": "哈尔滨市", "code": "0451", "pinyin": ""}, {
      "id": "21402",
      "platform": "14",
      "name": "齐齐哈尔市",
      "code": "0452",
      "pinyin": ""
    }, {"id": "21403", "platform": "14", "name": "鸡西市", "code": "0467", "pinyin": ""}, {
      "id": "21404",
      "platform": "14",
      "name": "鹤岗市",
      "code": "0468",
      "pinyin": ""
    }, {"id": "21405", "platform": "14", "name": "双鸭山市", "code": "0469", "pinyin": ""}, {
      "id": "21406",
      "platform": "14",
      "name": "大庆市",
      "code": "0459",
      "pinyin": ""
    }, {"id": "21407", "platform": "14", "name": "伊春市", "code": "0458", "pinyin": ""}, {
      "id": "21408",
      "platform": "14",
      "name": "佳木斯市",
      "code": "0454",
      "pinyin": ""
    }, {"id": "21409", "platform": "14", "name": "七台河市", "code": "0464", "pinyin": ""}, {
      "id": "21410",
      "platform": "14",
      "name": "牡丹江市",
      "code": "0453",
      "pinyin": ""
    }, {"id": "21411", "platform": "14", "name": "黑河市", "code": "0456", "pinyin": ""}, {
      "id": "21412",
      "platform": "14",
      "name": "绥化市",
      "code": "0455",
      "pinyin": ""
    }, {"id": "21413", "platform": "14", "name": "大兴安岭地区", "code": "0457", "pinyin": ""}],
    "17": [{"id": "1701", "platform": "17", "name": "青岛市", "code": "0532", "pinyin": ""}, {
      "id": "1702",
      "platform": "17",
      "name": "济南市",
      "code": "0531",
      "pinyin": ""
    }, {"id": "1703", "platform": "17", "name": "淄博市", "code": "0533", "pinyin": ""}, {
      "id": "1704",
      "platform": "17",
      "name": "德州市",
      "code": "0534",
      "pinyin": ""
    }, {"id": "1705", "platform": "17", "name": "烟台市", "code": "0535", "pinyin": ""}, {
      "id": "1706",
      "platform": "17",
      "name": "潍坊市",
      "code": "0536",
      "pinyin": ""
    }, {"id": "1707", "platform": "17", "name": "济宁市", "code": "0537", "pinyin": ""}, {
      "id": "1708",
      "platform": "17",
      "name": "泰安市",
      "code": "0538",
      "pinyin": ""
    }, {"id": "1709", "platform": "17", "name": "临沂市", "code": "0539", "pinyin": ""}, {
      "id": "1710",
      "platform": "17",
      "name": "菏泽市",
      "code": "0530",
      "pinyin": ""
    }, {"id": "1711", "platform": "17", "name": "滨州市", "code": "0543", "pinyin": ""}, {
      "id": "1712",
      "platform": "17",
      "name": "东营市",
      "code": "0546",
      "pinyin": ""
    }, {"id": "1713", "platform": "17", "name": "威海市", "code": "0631", "pinyin": ""}, {
      "id": "1714",
      "platform": "17",
      "name": "枣庄市",
      "code": "0632",
      "pinyin": ""
    }, {"id": "1715", "platform": "17", "name": "日照市", "code": "0633", "pinyin": ""}, {
      "id": "1716",
      "platform": "17",
      "name": "莱芜市",
      "code": "0634",
      "pinyin": ""
    }, {"id": "1717", "platform": "17", "name": "聊城市", "code": "0635", "pinyin": ""}],
    "20": [{"id": "220001", "platform": "20", "name": "防城港", "code": "0770", "pinyin": ""}, {
      "id": "220002",
      "platform": "20",
      "name": "崇左",
      "code": "0771",
      "pinyin": ""
    }, {"id": "220003", "platform": "20", "name": "南宁", "code": "0771", "pinyin": ""}, {
      "id": "220004",
      "platform": "20",
      "name": "柳州",
      "code": "0772",
      "pinyin": ""
    }, {"id": "220005", "platform": "20", "name": "来宾", "code": "0772", "pinyin": ""}, {
      "id": "220006",
      "platform": "20",
      "name": "桂林",
      "code": "0773",
      "pinyin": ""
    }, {"id": "220007", "platform": "20", "name": "贺州", "code": "0774", "pinyin": ""}, {
      "id": "220008",
      "platform": "20",
      "name": "梧州",
      "code": "0774",
      "pinyin": ""
    }, {"id": "220009", "platform": "20", "name": "贵港", "code": "0775", "pinyin": ""}, {
      "id": "220010",
      "platform": "20",
      "name": "玉林",
      "code": "0775",
      "pinyin": ""
    }, {"id": "220011", "platform": "20", "name": "百色", "code": "0776", "pinyin": ""}, {
      "id": "220012",
      "platform": "20",
      "name": "钦州",
      "code": "0777",
      "pinyin": ""
    }, {"id": "220013", "platform": "20", "name": "河池", "code": "0778", "pinyin": ""}, {
      "id": "220014",
      "platform": "20",
      "name": "北海",
      "code": "0779",
      "pinyin": ""
    }],
    "21": [{"id": "22101", "platform": "21", "name": "兰州", "code": "0931", "pinyin": ""}, {
      "id": "22102",
      "platform": "21",
      "name": "陇南",
      "code": "0939",
      "pinyin": ""
    }, {"id": "22103", "platform": "21", "name": "庆阳", "code": "0934", "pinyin": ""}, {
      "id": "22104",
      "platform": "21",
      "name": "临夏",
      "code": "0930",
      "pinyin": ""
    }, {"id": "22105", "platform": "21", "name": "嘉峪关", "code": "0937", "pinyin": ""}, {
      "id": "22106",
      "platform": "21",
      "name": "甘南",
      "code": "0941",
      "pinyin": ""
    }, {"id": "22107", "platform": "21", "name": "白银", "code": "0943", "pinyin": ""}, {
      "id": "22108",
      "platform": "21",
      "name": "张掖",
      "code": "0936",
      "pinyin": ""
    }, {"id": "22109", "platform": "21", "name": "平凉", "code": "0933", "pinyin": ""}, {
      "id": "22110",
      "platform": "21",
      "name": "酒泉",
      "code": "0937",
      "pinyin": ""
    }, {"id": "22111", "platform": "21", "name": "金昌", "code": "0935", "pinyin": ""}, {
      "id": "22112",
      "platform": "21",
      "name": "定西",
      "code": "0932",
      "pinyin": ""
    }, {"id": "22113", "platform": "21", "name": "天水", "code": "0938", "pinyin": ""}, {
      "id": "22114",
      "platform": "21",
      "name": "武威",
      "code": "0935",
      "pinyin": ""
    }],
    "22": [{"id": "22201", "platform": "22", "name": "太原市", "code": "0351", "pinyin": ""}, {
      "id": "22202",
      "platform": "22",
      "name": "大同市",
      "code": "0352",
      "pinyin": ""
    }, {"id": "22203", "platform": "22", "name": "阳泉市", "code": "0353", "pinyin": ""}, {
      "id": "22204",
      "platform": "22",
      "name": "长治市",
      "code": "0355",
      "pinyin": ""
    }, {"id": "22205", "platform": "22", "name": "晋城市", "code": "0356", "pinyin": ""}, {
      "id": "22206",
      "platform": "22",
      "name": "朔州市",
      "code": "0349",
      "pinyin": ""
    }, {"id": "22207", "platform": "22", "name": "晋中市", "code": "0354", "pinyin": ""}, {
      "id": "22208",
      "platform": "22",
      "name": "运城市",
      "code": "0359",
      "pinyin": ""
    }, {"id": "22209", "platform": "22", "name": "忻州市", "code": "0350", "pinyin": ""}, {
      "id": "22210",
      "platform": "22",
      "name": "临汾市",
      "code": "0357",
      "pinyin": ""
    }, {"id": "22211", "platform": "22", "name": "吕梁市", "code": "0358", "pinyin": ""}],
    "24": [{"id": "24001", "platform": "24", "name": "西安市", "code": "0291", "pinyin": ""}, {
      "id": "24002",
      "platform": "24",
      "name": "商洛",
      "code": "0914",
      "pinyin": ""
    }, {"id": "24003", "platform": "24", "name": "铜川", "code": "0919", "pinyin": ""}, {
      "id": "24004",
      "platform": "24",
      "name": "延安",
      "code": "0911",
      "pinyin": ""
    }, {"id": "24005", "platform": "24", "name": "安康", "code": "0915", "pinyin": ""}, {
      "id": "24006",
      "platform": "24",
      "name": "渭南",
      "code": "0913",
      "pinyin": ""
    }, {"id": "24007", "platform": "24", "name": "宝鸡", "code": "0919", "pinyin": ""}, {
      "id": "24009",
      "platform": "24",
      "name": "榆林",
      "code": "0912",
      "pinyin": ""
    }, {"id": "24010", "platform": "24", "name": "咸阳", "code": "0292", "pinyin": ""}, {
      "id": "24011",
      "platform": "24",
      "name": "汉中",
      "code": "0916",
      "pinyin": ""
    }],
    "25": [{"id": "225001", "platform": "25", "name": "长春", "code": "0431", "pinyin": ""}, {
      "id": "225002",
      "platform": "25",
      "name": "吉林",
      "code": "0432",
      "pinyin": "jilin"
    }, {"id": "225003", "platform": "25", "name": "延边", "code": "0433", "pinyin": ""}, {
      "id": "225004",
      "platform": "25",
      "name": "四平",
      "code": "0434",
      "pinyin": ""
    }, {"id": "225005", "platform": "25", "name": "通化", "code": "0435", "pinyin": ""}, {
      "id": "225006",
      "platform": "25",
      "name": "白城",
      "code": "0436",
      "pinyin": ""
    }, {"id": "225007", "platform": "25", "name": "辽源", "code": "0437", "pinyin": ""}, {
      "id": "225008",
      "platform": "25",
      "name": "松原",
      "code": "0438",
      "pinyin": ""
    }, {"id": "225009", "platform": "25", "name": "白山", "code": "0439", "pinyin": ""}],
    "26": [{"id": "2601", "platform": "26", "name": "福州市", "code": "0591", "pinyin": ""}, {
      "id": "2602",
      "platform": "26",
      "name": "厦门市",
      "code": "0592",
      "pinyin": ""
    }, {"id": "2603", "platform": "26", "name": "宁德市", "code": "0593", "pinyin": ""}, {
      "id": "2604",
      "platform": "26",
      "name": "莆田市",
      "code": "0594",
      "pinyin": ""
    }, {"id": "2605", "platform": "26", "name": "泉州市", "code": "0595", "pinyin": ""}, {
      "id": "2606",
      "platform": "26",
      "name": "漳州市",
      "code": "0596",
      "pinyin": ""
    }, {"id": "2607", "platform": "26", "name": "龙岩市", "code": "0597", "pinyin": ""}, {
      "id": "2608",
      "platform": "26",
      "name": "三明市",
      "code": "0598",
      "pinyin": ""
    }, {"id": "2609", "platform": "26", "name": "南平市", "code": "0599", "pinyin": ""}],
    "28": [{"id": "2801", "platform": "28", "name": "广州", "code": "020", "pinyin": ""}, {
      "id": "2802",
      "platform": "28",
      "name": "韶关市",
      "code": "0751",
      "pinyin": ""
    }, {"id": "2803", "platform": "28", "name": "惠州市", "code": "0752", "pinyin": ""}, {
      "id": "2804",
      "platform": "28",
      "name": "梅州市",
      "code": "0753",
      "pinyin": ""
    }, {"id": "2805", "platform": "28", "name": "汕头市", "code": "0754", "pinyin": ""}, {
      "id": "2806",
      "platform": "28",
      "name": "深圳市",
      "code": "0755",
      "pinyin": ""
    }, {"id": "2807", "platform": "28", "name": "珠海市", "code": "0756", "pinyin": ""}, {
      "id": "2808",
      "platform": "28",
      "name": "佛山市",
      "code": "0757",
      "pinyin": ""
    }, {"id": "2809", "platform": "28", "name": "肇庆市", "code": "0758", "pinyin": ""}, {
      "id": "2810",
      "platform": "28",
      "name": "湛江市",
      "code": "0759",
      "pinyin": ""
    }, {"id": "2811", "platform": "28", "name": "中山市", "code": "0760", "pinyin": ""}, {
      "id": "2812",
      "platform": "28",
      "name": "河源市",
      "code": "0762",
      "pinyin": ""
    }, {"id": "2813", "platform": "28", "name": "清远市", "code": "0763", "pinyin": ""}, {
      "id": "2814",
      "platform": "28",
      "name": "顺德市",
      "code": "0765",
      "pinyin": ""
    }, {"id": "2815", "platform": "28", "name": "云浮市", "code": "0766", "pinyin": ""}, {
      "id": "2816",
      "platform": "28",
      "name": "潮州市",
      "code": "0768",
      "pinyin": ""
    }, {"id": "2817", "platform": "28", "name": "东莞市", "code": "0769", "pinyin": ""}, {
      "id": "2818",
      "platform": "28",
      "name": "汕尾市",
      "code": "0660",
      "pinyin": ""
    }, {"id": "2819", "platform": "28", "name": "潮阳市", "code": "0661", "pinyin": ""}, {
      "id": "2820",
      "platform": "28",
      "name": "阳江市",
      "code": "0662",
      "pinyin": ""
    }, {"id": "2821", "platform": "28", "name": "揭阳市", "code": "0663", "pinyin": ""}, {
      "id": "2822",
      "platform": "28",
      "name": "江门市",
      "code": "0750",
      "pinyin": ""
    }, {"id": "2823", "platform": "28", "name": "茂名市", "code": "0668", "pinyin": ""}],
    "29": [{"id": "2901", "platform": "29", "name": "成都", "code": "028", "pinyin": ""}, {
      "id": "2902",
      "platform": "29",
      "name": "绵阳",
      "code": "0816",
      "pinyin": ""
    }, {"id": "2903", "platform": "29", "name": "德阳", "code": "0838", "pinyin": ""}, {
      "id": "2904",
      "platform": "29",
      "name": "宜宾",
      "code": "0831",
      "pinyin": ""
    }, {"id": "2905", "platform": "29", "name": "南充", "code": "0817", "pinyin": ""}, {
      "id": "2906",
      "platform": "29",
      "name": "达州",
      "code": "0818",
      "pinyin": ""
    }, {"id": "2907", "platform": "29", "name": "凉山", "code": "0834", "pinyin": ""}, {
      "id": "2908",
      "platform": "29",
      "name": "乐山",
      "code": "0833",
      "pinyin": ""
    }, {"id": "2909", "platform": "29", "name": "泸州", "code": "0830", "pinyin": ""}, {
      "id": "2910",
      "platform": "29",
      "name": "内江",
      "code": "0832",
      "pinyin": ""
    }, {"id": "2911", "platform": "29", "name": "资阳", "code": "028", "pinyin": ""}, {
      "id": "2912",
      "platform": "29",
      "name": "自贡",
      "code": "0813",
      "pinyin": ""
    }, {"id": "2913", "platform": "29", "name": "眉山", "code": "028", "pinyin": ""}, {
      "id": "2914",
      "platform": "29",
      "name": "广安",
      "code": "0826",
      "pinyin": ""
    }, {"id": "2915", "platform": "29", "name": "攀枝花", "code": "0812", "pinyin": ""}, {
      "id": "2916",
      "platform": "29",
      "name": "遂宁",
      "code": "0825",
      "pinyin": ""
    }, {"id": "2917", "platform": "29", "name": "广元", "code": "0839", "pinyin": ""}, {
      "id": "2918",
      "platform": "29",
      "name": "雅安",
      "code": "0835",
      "pinyin": ""
    }, {"id": "2919", "platform": "29", "name": "巴中", "code": "0827", "pinyin": ""}, {
      "id": "2920",
      "platform": "29",
      "name": "阿坝",
      "code": "0837",
      "pinyin": ""
    }, {"id": "2921", "platform": "29", "name": "甘孜", "code": "0836", "pinyin": ""}],
    "30": [{"id": "23001", "platform": "30", "name": "西宁", "code": "0971", "pinyin": ""}, {
      "id": "23002",
      "platform": "30",
      "name": "海东",
      "code": "0972",
      "pinyin": ""
    }, {"id": "23003", "platform": "30", "name": "格尔木", "code": "0979", "pinyin": ""}, {
      "id": "23004",
      "platform": "30",
      "name": "德令哈",
      "code": "0977",
      "pinyin": ""
    }, {"id": "23005", "platform": "30", "name": "海西州", "code": "0979", "pinyin": ""}, {
      "id": "23006",
      "platform": "30",
      "name": "海南州",
      "code": "0974",
      "pinyin": ""
    }, {"id": "23007", "platform": "30", "name": "海北州", "code": "0970", "pinyin": ""}, {
      "id": "23008",
      "platform": "30",
      "name": "黄南州",
      "code": "0973",
      "pinyin": ""
    }, {"id": "23009", "platform": "30", "name": "果洛州", "code": "0975", "pinyin": ""}, {
      "id": "23010",
      "platform": "30",
      "name": "玉树州",
      "code": "0976",
      "pinyin": ""
    }],
    "31": [{"id": "1033328", "platform": "31", "name": "昌都", "code": "0891", "pinyin": "changdu"}, {
      "id": "1033329",
      "platform": "31",
      "name": "林芝",
      "code": "0891",
      "pinyin": "linzhi"
    }, {"id": "1033330", "platform": "31", "name": "山南", "code": "0891", "pinyin": "shannan"}, {
      "id": "1033331",
      "platform": "31",
      "name": "日喀则",
      "code": "0891",
      "pinyin": "rikaze"
    }, {"id": "1033332", "platform": "31", "name": "那曲", "code": "0891", "pinyin": "naqu"}, {
      "id": "1033333",
      "platform": "31",
      "name": "阿里",
      "code": "0891",
      "pinyin": "ali"
    }, {"id": "1033334", "platform": "31", "name": "拉萨", "code": "0891", "pinyin": "xizang"}],
    "32": [{"id": "3201", "platform": "32", "name": "海口市", "code": "0898", "pinyin": ""}],
    "33": [{"id": "23301", "platform": "33", "name": "银川", "code": "0951", "pinyin": ""}, {
      "id": "23302",
      "platform": "33",
      "name": "石嘴山",
      "code": "",
      "pinyin": ""
    }, {"id": "23303", "platform": "33", "name": "吴忠", "code": "", "pinyin": ""}, {
      "id": "23304",
      "platform": "33",
      "name": "中卫",
      "code": "",
      "pinyin": ""
    }, {"id": "23305", "platform": "33", "name": "固原", "code": "", "pinyin": ""}],
    "36": [{"id": "236001", "platform": "36", "name": "联通总部", "code": "0000", "pinyin": ""}],
    "37": [{"id": "237001", "platform": "37", "name": "上海", "code": "0000", "pinyin": "shanghai"}],
    "103": [{"id": "1033301", "platform": "103", "name": "其他", "code": "0951", "pinyin": "qita"}, {
      "id": "1033302",
      "platform": "103",
      "name": "宁夏",
      "code": "0951",
      "pinyin": "ningxia"
    }, {
      "id": "1033303",
      "platform": "103",
      "name": "上海电信",
      "code": "0951",
      "pinyin": "shanghaidianxin"
    }, {"id": "1033304", "platform": "103", "name": "湖北", "code": "0951", "pinyin": "hubei"}, {
      "id": "1033305",
      "platform": "103",
      "name": "浙江",
      "code": "0951",
      "pinyin": "zhejiang"
    }, {"id": "1033306", "platform": "103", "name": "江西", "code": "0951", "pinyin": "jiangxi"}, {
      "id": "1033307",
      "platform": "103",
      "name": "上海",
      "code": "0951",
      "pinyin": "shanghai"
    }, {"id": "1033308", "platform": "103", "name": "江苏", "code": "0951", "pinyin": "jiangsu"}, {
      "id": "1033309",
      "platform": "103",
      "name": "天津",
      "code": "0951",
      "pinyin": "tianjing"
    }, {"id": "1033310", "platform": "103", "name": "重庆", "code": "0951", "pinyin": "chongqing"}, {
      "id": "1033311",
      "platform": "103",
      "name": "河北",
      "code": "0951",
      "pinyin": "hebei"
    }, {"id": "1033312", "platform": "103", "name": "云南", "code": "0951", "pinyin": "yunnan"}, {
      "id": "1033313",
      "platform": "103",
      "name": "辽宁",
      "code": "0951",
      "pinyin": "liaoning"
    }, {"id": "1033314", "platform": "103", "name": "黑龙江", "code": "0951", "pinyin": "heilongjiang"}, {
      "id": "1033315",
      "platform": "103",
      "name": "山东",
      "code": "0951",
      "pinyin": "shandong"
    }, {"id": "1033316", "platform": "103", "name": "广西", "code": "0951", "pinyin": "guangxi"}, {
      "id": "1033317",
      "platform": "103",
      "name": "甘肃",
      "code": "0951",
      "pinyin": "gansu"
    }, {"id": "1033318", "platform": "103", "name": "山西", "code": "0951", "pinyin": "shanxi"}, {
      "id": "1033319",
      "platform": "103",
      "name": "陕西",
      "code": "0951",
      "pinyin": "shanxi"
    }, {"id": "1033320", "platform": "103", "name": "福建", "code": "0951", "pinyin": "fujian"}, {
      "id": "1033321",
      "platform": "103",
      "name": "广东",
      "code": "0951",
      "pinyin": "guangdong"
    }, {"id": "1033322", "platform": "103", "name": "四川", "code": "0951", "pinyin": "sichuan"}, {
      "id": "1033323",
      "platform": "103",
      "name": "青海",
      "code": "0951",
      "pinyin": "qinghai"
    }, {"id": "1033324", "platform": "103", "name": "海南", "code": "0951", "pinyin": "hainan"}, {
      "id": "1033325",
      "platform": "103",
      "name": "总部",
      "code": "0951",
      "pinyin": "zongbu"
    }, {"id": "1033326", "platform": "103", "name": "吉林", "code": "0951", "pinyin": "jilin"}, {
      "id": "1033327",
      "platform": "103",
      "name": "湖南",
      "code": "0951",
      "pinyin": "hunan"
    }]
  },
  platformList: [
    {
      "id": "1",
      "status": "1",
      "name": "其他",
      "shortName": "zx",
      "pinyin": "qita",
      "regionId": "7"
    }, {
      "id": "10",
      "status": "1",
      "name": "河北",
      "shortName": "hb",
      "pinyin": "hebei",
      "regionId": "3"
    }, {
      "id": "101",
      "status": "1",
      "name": "四川短信通",
      "shortName": "scdxt",
      "pinyin": "sichuanduanxintong",
      "regionId": "5"
    }, {
      "id": "102",
      "status": "1",
      "name": "湖北号码池",
      "shortName": "hmc",
      "pinyin": "hubeihaomachi",
      "regionId": "1"
    }, {
      "id": "103",
      "status": "1",
      "name": "双创",
      "shortName": "jssc",
      "pinyin": "shuangchuang",
      "regionId": ""
    }, {
      "id": "12",
      "status": "1",
      "name": "云南",
      "shortName": "yn",
      "pinyin": "yunnan",
      "regionId": "5"
    }, {
      "id": "13",
      "status": "1",
      "name": "辽宁",
      "shortName": "ln",
      "pinyin": "liaoning",
      "regionId": "6"
    }, {
      "id": "14",
      "status": "1",
      "name": "黑龙江",
      "shortName": "hl",
      "pinyin": "heilongjiang",
      "regionId": "6"
    }, {
      "id": "15",
      "status": "1",
      "name": "湖南",
      "shortName": "hu",
      "pinyin": "hunan",
      "regionId": "2"
    }, {
      "id": "17",
      "status": "1",
      "name": "山东",
      "shortName": "sd",
      "pinyin": "shandong",
      "regionId": "3"
    }, {"id": "2", "status": "1", "name": "湖北", "shortName": "bh", "pinyin": "hubei", "regionId": "1"}, {
      "id": "20",
      "status": "1",
      "name": "广西",
      "shortName": "gx",
      "pinyin": "guangxi",
      "regionId": "2"
    }, {
      "id": "21",
      "status": "1",
      "name": "甘肃",
      "shortName": "gs",
      "pinyin": "gansu",
      "regionId": "4"
    }, {
      "id": "22",
      "status": "1",
      "name": "山西",
      "shortName": "sx",
      "pinyin": "shanxi",
      "regionId": "3"
    }, {
      "id": "24",
      "status": "1",
      "name": "陕西",
      "shortName": "ss",
      "pinyin": "shanxi",
      "regionId": "4"
    }, {
      "id": "25",
      "status": "1",
      "name": "吉林",
      "shortName": "jl",
      "pinyin": "jilin",
      "regionId": "6"
    }, {
      "id": "26",
      "status": "1",
      "name": "福建",
      "shortName": "fj",
      "pinyin": "fujian",
      "regionId": "2"
    }, {
      "id": "28",
      "status": "1",
      "name": "广东",
      "shortName": "gd",
      "pinyin": "guangdong",
      "regionId": "2"
    }, {
      "id": "29",
      "status": "1",
      "name": "四川",
      "shortName": "sc",
      "pinyin": "sichuan",
      "regionId": "5"
    }, {
      "id": "3",
      "status": "1",
      "name": "浙江",
      "shortName": "zj",
      "pinyin": "zhejiang",
      "regionId": "1"
    }, {
      "id": "30",
      "status": "1",
      "name": "青海",
      "shortName": "qh",
      "pinyin": "qinghai",
      "regionId": "5"
    }, {"id": "31", "status": "1", "name": "西藏", "shortName": "xz", "pinyin": "", "regionId": ""}, {
      "id": "32",
      "status": "1",
      "name": "海南",
      "shortName": "hi",
      "pinyin": "hainan",
      "regionId": "2"
    }, {
      "id": "33",
      "status": "1",
      "name": "宁夏",
      "shortName": "nx",
      "pinyin": "ningxia",
      "regionId": "4"
    }, {
      "id": "36",
      "status": "1",
      "name": "总部",
      "shortName": "ltzb",
      "pinyin": "zongbu",
      "regionId": ""
    }, {
      "id": "37",
      "status": "1",
      "name": "上海电信",
      "shortName": "shtel",
      "pinyin": "shanghaidianxin",
      "regionId": "7"
    }, {
      "id": "4",
      "status": "1",
      "name": "江西",
      "shortName": "jx",
      "pinyin": "jiangxi",
      "regionId": "1"
    }, {
      "id": "5",
      "status": "1",
      "name": "上海",
      "shortName": "sh",
      "pinyin": "shanghai",
      "regionId": "7"
    }, {
      "id": "6",
      "status": "1",
      "name": "江苏",
      "shortName": "js",
      "pinyin": "jiangsu",
      "regionId": "1"
    }, {
      "id": "8",
      "status": "1",
      "name": "天津",
      "shortName": "tj",
      "pinyin": "tianjing",
      "regionId": "3"
    }, {"id": "9", "status": "1", "name": "重庆", "shortName": "cq", "pinyin": "chongqing", "regionId": "5"}]
};

