<template>
  <div class="search-options">
    <Search @query="query">
      <div slot="rol_first">
        <el-form-item label="渠道:">
          <Platform :platform.sync="searchOptions.channelId" :showCity="false"/>
        </el-form-item>
        <el-form-item label="计费号码:">
          <el-input v-model="searchOptions.feeMdn"></el-input>
        </el-form-item>
        <el-form-item label="受理单编号:">
          <el-input v-model="searchOptions.acceptanceNo"></el-input>
        </el-form-item>
      </div>
      <div slot="rol_second">
        <el-form-item label="申请日期:">
          <time-picker :startTime.sync="searchOptions.applyStartTime" :endTime.sync="searchOptions.applyEndTime"/>
        </el-form-item>
        <el-form-item label="企业编号:">
          <el-input v-model="searchOptions.spCode"></el-input>
        </el-form-item>
        <el-form-item label="受理状态:">
          <el-select v-model="searchOptions.status">
            <el-option label="全部" value=""></el-option>
            <el-option label="待开户审核" value="1"></el-option>
            <el-option label="开户失败" value="3"></el-option>
            <el-option label="待账户审核失败" value="2"></el-option>
            <el-option label="待提交资质审核" value="0"></el-option>
            <el-option label="待资质审核" value="0"></el-option>
            <el-option label="资质审核不通过" value="0"></el-option>
            <el-option label="待业务配置" value="0"></el-option>
            <el-option label="处理完成" value="0"></el-option>
            <el-option label="废弃" value="0"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div slot="rol_third">
        <el-form-item label="申请人:">
          <el-select v-model="searchOptions.creator" placeholder="请选择企业类型">
            <el-option label="全部" value=""></el-option>
            <el-option label="正式" value="1"></el-option>
            <el-option label="测试" value="3"></el-option>
            <el-option label="体验" value="2"></el-option>
            <el-option label="联通" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请方式:">
          <el-select v-model="searchOptions.type">
            <el-option label="全部" value=""></el-option>
            <el-option label="运营" value="1"></el-option>
            <el-option label="销售" value="3"></el-option>
            <el-option label="联调接口" value="2"></el-option>
            <el-option label="代理商" value="0"></el-option>
            <el-option label="其他" value="0"></el-option>
          </el-select>
        </el-form-item>
      </div>
    </Search>
    
    <Centers title="受理单列表">
      <el-button class="w-100" size="small" type="primary">导出
        <svg-icon icon-class="export" class="export"></svg-icon>
      </el-button>
    </Centers>
    
    <List :data="tableData" @query="query" :dataCount="dataCount">
      <el-table-column :fixed="!$store.state.common.isMobile" prop="spCode" label="受理单编号"
                       min-width="80"></el-table-column>
      <el-table-column :fixed="!$store.state.common.isMobile?false:'left'" prop="spName" label="企业名称"
                       min-width="140"></el-table-column>
      <el-table-column prop="spName" label="企业编号" min-width="140"></el-table-column>
      <el-table-column label="渠道" min-width="110">
        <template slot-scope="{row:{platform,city}}">
          <span>{{(platform,city)}}</span>
        </template>
      </el-table-column>
      <el-table-column label="计费号码" min-width="140" prop="spName"></el-table-column>
      <el-table-column label="申请人" min-width="140" prop="spName"></el-table-column>
      <el-table-column label="申请方式" min-width="140">
        <template slot-scope="{row:{status}}">{{SP_STATUS[status]}}</template>
      </el-table-column>
      <el-table-column label="受理状态" min-width="140">
        <template slot-scope="{row:{status}}">{{SP_STATUS[status]}}</template>
      </el-table-column>
      <el-table-column label="开户日期" min-width="140">
        <template slot-scope="{row:{ctime}}">
          <span>{{dateFormat(ctime)}}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" min-width="140" prop="spName"></el-table-column>
      <el-table-column :fixed="$store.state.common.isMobile?false:'right'" class="text-center" label="操作" width="190">
        <template slot-scope="{row:{spId,status}}">
          <template v-if="status == SP_STATUS_MAP.NORMAL">
            <router-link :to="{name:'spEdit',params:{id:spId}}">
              <el-button type="text" size="small">修改</el-button>
            </router-link>
            <el-button @click="cancellation(spId)" type="text" size="small">销户</el-button>
            <el-button @click="showUpdatePop(SP_STATUS_MAP.FREEZE,spId)" type="text" size="small">冻结</el-button>
          </template>
          <template v-else-if="status == SP_STATUS_MAP.PRE_OPEN">
            <router-link :to="{name:'spEdit',params:{id:spId}}">
              <el-button type="text" size="small">修改</el-button>
            </router-link>
            <el-button @click="cancellation(spId)" type="text" size="small">销户</el-button>
          </template>
          <template v-else-if="status == SP_STATUS_MAP.FREEZE">
            <router-link :to="{name:'spEdit',params:{id:spId}}">
              <el-button type="text" size="small">修改</el-button>
            </router-link>
            <el-button @click="showUpdatePop(SP_STATUS_MAP.NORMAL,spId)" type="text" size="small">解冻</el-button>
          </template>
          <template v-else-if="status == SP_STATUS_MAP.CANCELLATION"></template>
        </template>
      </el-table-column>
    </List>
    
    
    <el-dialog title="企业通知" center custom-class="pop-change-sale" :visible.sync="dialogChangeSale" width="30%">
      <el-form @submit.native.prevent="" ref="sale" :rules="rules" label-width="135px" :moel="noticeForm">
        <el-alert :closable="false" title="" :type="updatePop.type" :description="updatePop.description"
                  show-icon></el-alert>
        <el-form-item label="新帜讯销售姓名" prop="customerManagerName">
          <el-input v-model="noticeForm.customerManagerName"/>
        </el-form-item>
        <el-form-item label="新帜讯销售手机号" prop="customerManagerMdn">
          <el-input v-model.number="noticeForm.customerManagerMdn"/>
        </el-form-item>
        <el-form-item label="变更原因" prop="remark">
          <el-input type="textarea" :rows="2" placeholder="请输入原因" v-model="noticeForm.remark"/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogChangeSale = false">取 消</el-button>
        <el-button @click="toNoticeSp" type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {
    Busi_spOpen_acceptanceList,
    Busi_spManage_update,
    Busi_spManage_batchUpdate,
    Busi_spManage_batchChange
  } from '@/api/business'
  import Platform from '@/components/PlatformSelector/platformSelector'
  import {Alert} from 'element-ui'
  import Vue from 'vue'
  import {SP_STATUS, SP_STATUS_MAP, SP_TYPE} from '@/utils/constant'
  import {getCityAndPlatform, dateFormat} from '@/utils/index'
  import {validateMdn} from '@/utils/validate'
  import TimePicker from '@/components/TimePicker/TimePicker.vue'
  
  Vue.use(Alert)
  
  const searchOptions = {
    status: '',
    channelId: '',
    acceptanceNo: '',
    applyStartTime: '',
    applyEndTime: '',
    creator: '',
    type: '',
    spCode: '',
    feeMdn:''
  }
  const noticeForm = {
  
  }
  
  export default {
    name: "spManageIndex",
    data() {
      return {
        tableData: [],  // 列表数据
        dataCount: 0,   // 分页, 数据总数
        searchOptions: Object.assign({}, searchOptions),  // 搜索条件
        SP_STATUS: SP_STATUS,  // 企业状态集合
        SP_STATUS_MAP: SP_STATUS_MAP,  // 企业状态集合,
        SP_TYPE: SP_TYPE, // 企业类型集合
        dialogUpdate: false,  // 控制冻结销户操作的弹窗
        dialogChangeSale: false,  // 控制变更记录弹窗
        saleInfo: '',     // 销售弹窗的销售姓名和手机号
        updatePop: {type: '', isAll: false, description: '', status: ''},  // 控制冻结销户弹窗的内容
        upDateForm: {   // 冻结销户操作的参数
          remark: '',
          spId: '',
          status: ''
        },
        noticeForm: Object.assign({}, noticeForm), // 变更销售的请求参数
        rules: {         // 变更销售表单验证规则
          customerManagerName: [
            {required: true, message: '新帜讯销售姓名不能为空', trigger: 'blur'}
          ],
          customerManagerMdn: [
            {trigger: 'blur', validator: validateMdn}
          ],
          remark: [
            {required: true, message: '原因不能为空', trigger: 'blur'}
          ],
        },
        getCityAndPlatform: (platId, cityId) => {
          let {platform = '', city = ''} = getCityAndPlatform(platId, cityId)
          return platform + '/' + city
        },
        dateFormat: dateFormat
      }
    },
    created() {
      this.query()
    },
    components: {Platform, TimePicker},
    methods: {
      query(pageInfo = {curPage: 1, pageLimit: 10}) {
        Busi_spOpen_acceptanceList(Object.assign(this.searchOptions, {queryInfo: pageInfo})).then(({data, dataCount}) => {
          this.tableData = data
          this.dataCount = dataCount
        })
      },
      toNoticeSp(){
      
      }
    }
  }
</script>

<style type="text/scss" lang="scss" rel="stylesheet/scss">
  .export {
    font-size: 18px;
    margin-left: 5px;
    margin-top: 6px;
  }
</style>

