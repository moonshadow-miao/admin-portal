<template>
  <div>
    <Search @query="query">
      <div slot="rol_first">
        <el-form-item label="渠道:">
          <Platform :platform.sync="searchOptions.platform" :city.sync="searchOptions.city"/>
        </el-form-item>
        <el-form-item label="企业编号:">
          <el-input placeholder="支持填写同省至多10个企业编号" v-model="searchOptions.spCode"></el-input>
        </el-form-item>
      </div>
      <div slot="rol_second">
        <el-form-item label="变更时间:">
          <el-date-picker @change="dateLink" popper-class="date" v-model="searchOptions.startTime" style="width:48%" value-format="yyyy-MM-dd" type="date" placeholder="开始日期"></el-date-picker>
          <el-date-picker ref="endDate" popper-class="date" v-model="searchOptions.endTime" style="width:48%" value-format="yyyy-MM-dd" type="date" placeholder="结束日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="企业名称:">
          <el-input v-model="searchOptions.spName"></el-input>
        </el-form-item>
      </div>
      <div slot="rol_third">
        <el-form-item label="修改项:">
          <el-select v-model="searchOptions.spType" placeholder="请选择企业类型">
            <el-option label="全部" value=""></el-option>
            <el-option label="正式" value="1"></el-option>
            <el-option label="测试" value="1"></el-option>
            <el-option label="体验" value="2"></el-option>
            <el-option label="联通" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="操作者">
          <el-input v-model="searchOptions.customerManagerMdn"></el-input>
        </el-form-item>
      </div>
    </Search>
    <List :selectList.sync="selectList" :data="tableData" @query="query" :dataCount="dataCount">
      <el-table-column prop="spCode" label="企业编号" min-width="80"></el-table-column>
      <el-table-column prop="spName" label="企业名称" min-width="140"></el-table-column>
      <el-table-column prop="createTime" label="变更时间" min-width="140"></el-table-column>
      <el-table-column prop="spType" label="操作者" min-width="75"></el-table-column>
      <el-table-column prop="customerManagerName" label="修改项" min-width="75"></el-table-column>
      <el-table-column label="变更前" min-width="105">
        <template slot-scope="{row}">{{SP_STATUS[row.status]}}</template>
      </el-table-column>
      <el-table-column  label="变更后" min-width="50">
        <template slot-scope="{row}">{{SP_STATUS[row.status]}}</template>
      </el-table-column>
      <el-table-column prop="remark" label="变更原因" min-width="65"></el-table-column>
    </List>
  </div>
</template>

<script>
  import Platform from '@/components/PlatformSelector/platformSelector'
  const searchOptions = {
  
  }
  
  export default {
    name: "changeRecord",
    data(){
      return {
        selectList:[],
        searchOptions:Object.assign({},searchOptions),
        tableData:[],
        dataCount:0,
      }
    },
    components: {Platform},
    methods:{
      dateLink() {
        this.$refs.endDate.focus()
      },
      query(){
      
      }
    }
  }
</script>

<style scoped>

</style>
