<template>
  <div>
    <Search @query="query">
      <div slot="rol_1">
        <el-form-item label="渠道:">
          <Platform :platform.sync="searchOptions.platform" :city.sync="searchOptions.city"/>
        </el-form-item>
        <el-form-item label="企业编号:">
          <el-input v-spcode placeholder="支持填写同省至多10个企业编号" v-model="searchOptions.spCode"></el-input>
        </el-form-item>
      </div>
      <div slot="rol_2">
        <el-form-item label="变更时间:">
          <time-picker :startTime.sync="searchOptions.startTime" :endTime.sync="searchOptions.endTime" />
        </el-form-item>
        <el-form-item label="企业名称:">
          <el-input v-model="searchOptions.spName"></el-input>
        </el-form-item>
      </div>
      <div slot="rol_3">
        <el-form-item label="修改项:">
          <el-select v-model="searchOptions.attrName" placeholder="请选择企业类型">
            <el-option label="全部" value=""></el-option>
            <el-option label="企业状态变更" value="1"></el-option>
            <el-option label="企业联系人姓名" value="2"></el-option>
            <el-option label="联系人手机号" value="3"></el-option>
            <el-option label="帜讯销售姓名" value="4"></el-option>
            <el-option label="帜讯销售手机号" value="5"></el-option>
            <el-option label="渠道商姓名" value="6"></el-option>
            <el-option label="渠道商手机号" value="7"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="操作者">
          <el-input v-model="searchOptions.operatorName"></el-input>
        </el-form-item>
      </div>
    </Search>
    <List :selectList.sync="selectList" :data="tableData" @query="query" :dataCount="dataCount">
      <el-table-column prop="spCode" label="企业编号" min-width="80"></el-table-column>
      <el-table-column prop="spName" label="企业名称" min-width="140"></el-table-column>
      <el-table-column prop="createTime" label="变更时间" min-width="140"></el-table-column>
      <el-table-column prop="spType" label="操作者" min-width="75"></el-table-column>
      <el-table-column prop="customerManagerName" label="修改项" min-width="75"></el-table-column>
      <el-table-column label="变更前" min-width="65">
        <template slot-scope="{row}">{{SP_STATUS[row.status]}}</template>
      </el-table-column>
      <el-table-column  label="变更后" min-width="65">
        <template slot-scope="{row}">{{SP_STATUS[row.status]}}</template>
      </el-table-column>
      <el-table-column prop="remark" label="变更原因" min-width="165"></el-table-column>
    </List>
  </div>
</template>

<script>
  import Platform from '@/components/PlatformSelector/platformSelector'
  import TimePicker from '@/components/TimePicker/TimePicker.vue'
  import {Busi_spManage_getChangeList} from '@/api/business'
  import {SP_STATUS} from '@/utils/constant'
  const searchOptions = {
    platform:'',
    startTime:'',
    endTime:'',
    attrName:'',
    spCode:'',
    spName:'',
    operatorName:'',
    city:''
  }
  
  export default {
    name: "changeRecord",
    data(){
      return {
        selectList:[],
        searchOptions:Object.assign({},searchOptions),
        tableData:[],
        dataCount:0,
        SP_STATUS:SP_STATUS
      }
    },
    components: {Platform,TimePicker},
    created() {
      this.query()
    },
    methods:{
      dateLink() {
        this.$refs.endDate.focus()
      },
      query(pageInfo = {curPage: 1,pageLimit:10}) {
        Busi_spManage_getChangeList(Object.assign(this.searchOptions, {queryInfo:pageInfo})).then(({data, dataCount}) => {
          this.tableData = data
          this.dataCount = dataCount
        })
      },
    }
  }
</script>

<style scoped>

</style>
