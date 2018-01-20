<template>
  <div class="search-options">
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
        <el-form-item label="开户日期:">
          <el-date-picker @change="dateLink" popper-class="date" v-model="searchOptions.startTime" style="width:48%" value-format="yyyy-MM-dd" type="date" placeholder="开始日期"></el-date-picker>
          <el-date-picker ref="endDate" popper-class="date" v-model="searchOptions.endTime" style="width:48%" value-format="yyyy-MM-dd" type="date" placeholder="结束日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="企业名称:">
          <el-input v-model="searchOptions.spName"></el-input>
        </el-form-item>
      </div>
      <div slot="rol_third">
        <el-form-item label="企业类型:">
          <el-select v-model="searchOptions.spType" placeholder="请选择企业类型">
            <el-option label="全部" value=""></el-option>
            <el-option label="正式" value="1"></el-option>
            <el-option label="测试" value="1"></el-option>
            <el-option label="体验" value="2"></el-option>
            <el-option label="联通" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="企业联系人">
          <el-input v-model="searchOptions.customerManagerMdn"></el-input>
        </el-form-item>
      </div>
      <div slot="rol_merge_first">
        <el-form-item label="帜讯销售:">
          <el-input v-model="searchOptions.customerManagerName"></el-input>
        </el-form-item>
      </div>
      <div slot="rol_merge_second">
        <el-form-item label="企业状态:">
          <el-checkbox-group v-model="searchOptions.status">
            <el-checkbox label="1" name="status">正常</el-checkbox>
            <el-checkbox label="2" name="status">预开户</el-checkbox>
            <el-checkbox label="3" name="status">冻结</el-checkbox>
            <el-checkbox label="5" name="status">销户</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </div>
    </Search>
    
    <Centers title="企业列表">
      <el-dropdown size="small" trigger="click" @command="batchOperation">
        <el-button class="w-100" size="small" type="primary">批量操作<i class="el-icon-caret-bottom el-icon--right"></i>
        </el-button>
        <el-dropdown-menu class="w-100" slot="dropdown">
          <el-dropdown-item command="freeze">冻结</el-dropdown-item>
          <el-dropdown-item command="thaw">解冻</el-dropdown-item>
          <el-dropdown-item command="changeSale">变更销售</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </Centers>
    
    <List :selectList.sync="selectList" :selection="true" :data="tableData" @query="query" :dataCount="dataCount">
      <el-table-column :fixed="!$store.state.common.isMobile" prop="spCode" label="企业编号" min-width="80"></el-table-column>
      <el-table-column :fixed="!$store.state.common.isMobile?false:'left'" prop="spName" label="企业名称" min-width="140"></el-table-column>
      <el-table-column label="省份/地市" min-width="110">
        <template slot-scope="{row:{platform,city}}">
          <span>{{platform +'/'+ city}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="开户日期" min-width="140"></el-table-column>
      <el-table-column prop="spType" label="企业类型" min-width="75"></el-table-column>
      <el-table-column prop="customerManagerName" label="帜讯销售" min-width="75"></el-table-column>
      <el-table-column prop="customerManagerMdn" label="帜讯销售号码" min-width="105"></el-table-column>
      <el-table-column prop="certification" label="证件" min-width="50"></el-table-column>
      <el-table-column label="企业状态" min-width="65">
        <template slot-scope="{row}">{{SP_STATUS[row.status]}}</template>
      </el-table-column>
      <el-table-column :fixed="$store.state.common.isMobile?false:'right'" class="text-center" label="操作" width="190">
        <template slot-scope="{row}">
          <router-link :to="{name:'spEdit',params:{id:row.id}}">
            <el-button type="text" size="small">修改</el-button>
          </router-link>
          <el-button @click="cancellation(row.id)" type="text" size="small">销户</el-button>
          <el-button @click="showUpdatePop(row.status == SP_STATUS_MAP.FREEZE ?SP_STATUS_MAP.NORMAL:SP_STATUS_MAP.FREEZE,row.id)" type="text" size="small">{{row.status == SP_STATUS_MAP.FREEZE?'解冻':'冻结'}}
          </el-button>
          <el-button @click="changeSale(row)" type="text" size="small">变更销售</el-button>
        </template>
      </el-table-column>
    </List>
    
    <el-dialog custom-class="pop-with-remark" :visible.sync="dialogUpdate" width="30%">
      <el-alert :closable="false" title="" :type="updatePop.type" :description="updatePop.description" show-icon></el-alert>
      <p class="p-5">{{updatePop.status == SP_STATUS_MAP.NORMAL ? '解冻' :SP_STATUS [upDateForm.status]}}原因 :</p>
      <el-input type="textarea" :rows="2" placeholder="请输入原因" v-model="upDateForm.remark">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogUpdate = false">取 消</el-button>
        <el-button @click="toUpdateStatus" type="primary">确 定</el-button>
      </span>
    </el-dialog>
  
    <el-dialog title="帜讯销售变更" center custom-class="pop-change-sale" :visible.sync="dialogChangeSale" width="30%">
      <el-form @submit.native.prevent="" ref="sale" :rules="rules" v-show="!changeAll" label-width="135px" :model="changeSaleForm">
        <el-form-item label="帜讯销售">
          <span>{{saleInfo}}</span>
        </el-form-item>
        <el-form-item label="新帜讯销售姓名" prop="customerManagerName">
          <el-input v-model="changeSaleForm.customerManagerName"/>
        </el-form-item>
        <el-form-item label="新帜讯销售手机号" prop="customerManagerMdn">
          <el-input v-model.number="changeSaleForm.customerManagerMdn"/>
        </el-form-item>
        <el-form-item label="变更原因" prop="remark">
          <el-input type="textarea" :rows="2" placeholder="请输入原因" v-model="changeSaleForm.remark" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogChangeSale = false">取 消</el-button>
        <el-button @click="toChangeSale" type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {Busi_spManage_getSpList,Busi_spManage_update,Busi_spManage_batchUpdate,Busi_spManage_batchChange,Busi_spManage_changSale} from '@/api/business'
  import Platform from '@/components/PlatformSelector/platformSelector'
  import {SP_STATUS, SP_STATUS_MAP} from '@/utils/constant'
  import {validateMdn} from '@/utils/validate'
  
  const searchOptions = {
    spType: '',
    status: [],
    platform: '',
    city: '',
    startTime:'',
    endTime:'',
    customerManagerName:'',
    customerManagerMdn:'',
    spName:'',
    spCode:'',
  }
  const changeSaleForm = {
    customerManagerName:'',
    customerManagerMdn:'',
    remark:'',
    spId:''
  }
  
  export default {
    name: "spManageIndex",
    data() {
      return {
        tableData: [],  // 列表数据
        dataCount: 0,   // 分页, 数据总数
        selectList: [], // 选中项的id集合
        searchOptions: Object.assign({},searchOptions),  // 搜索条件
        SP_STATUS: SP_STATUS,  // 企业状态集合
        SP_STATUS_MAP: SP_STATUS_MAP,  // 企业状态集合
        dialogUpdate: false,  // 控制冻结销户操作的弹窗
        dialogChangeSale:false,  // 控制变更记录弹窗
        changeAll:false,   // 控制是否批量变更销售,
        saleInfo:'',     // 销售弹窗的销售姓名和手机号
        updatePop: {type: '', isAll:false , description: '', status: ''},  // 控制冻结销户弹窗的内容
        upDateForm: {   // 冻结销户操作的参数
          remark: '',
          spId:''
        },
        changeSaleForm: Object.assign({},changeSaleForm), // 变更销售的请求参数
        rules: {         // 变更销售表单验证规则
          customerManagerName: [
            { required: true, message: '新帜讯销售姓名不能为空', trigger: 'blur' }
          ],
          customerManagerMdn: [
            { trigger: 'blur',validator: validateMdn }
          ],
          remark: [
            { required: true, message: '原因不能为空', trigger: 'blur' }
          ],
        }
      }
    },
    created() {
      this.query()
    },
    components: {Platform},
    methods: {
      dateLink() {
        this.$refs.endDate.focus()
      },
      query(pageInfo = {curPage: 1,pageSize:10}) {
        console.log(this.searchOptions);
        Busi_spManage_getSpList(Object.assign(this.searchOptions, pageInfo)).then(({data, dataCount}) => {
          this.tableData = data
          this.dataCount = dataCount
        })
      },
      batchOperation(type) {
        if (!this.selectList.length) {
          this.$message({message: '请至少选择一个企业!', type: 'warning'});
          return
        }
        switch (type) {
          case 'freeze':
            this.showUpdatePop(SP_STATUS_MAP.FREEZE,null,true);
            break;
          case 'thaw':
            this.showUpdatePop(SP_STATUS_MAP.NORMAL,null,true);
            break;
          case 'changeSale':
            this.changeSale(null,true);
            break;
        }
      },
      changeSale(row,isAll){
        Object.assign(this.changeSaleForm,changeSaleForm,{spId:row.id})
        this.saleInfo = row ? `${row.customerManagerName} (${row.customerManagerMdn})` : ''
        this.changeAll = isAll
        this.dialogChangeSale = true
        this.$nextTick(()=>{this.$refs.sale.clearValidate()})
      },
      async toChangeSale(){
        let valid = await this.$refs.sale.validate()
        if(!valid) return
        let res = null
        if(this.changeAll){
          let param = Object.assign({},this.changeSaleForm,{spIds:this.selectList})
          delete param.spId
          res = await Busi_spManage_batchChange(param)
        }else {
          res = await Busi_spManage_changSale(this.changeSaleForm)
        }
        if(!res) return
        this.$message({message: res.msg, type: 'success'})
        this.query()
        this.dialogChangeSale = false
      },
      cancellation(id) {
        this.upDateForm.remark = ''
        this.dialogUpdate = true
        this.updatePop = {
          type: 'warning',
          description: `此操作无法撤回！销户后，企业将无法再恢复正常状态，是否确定销户？`,
          status:SP_STATUS_MAP.CANCELLATION,
          isAll:false,
        }
        Object.assign(this.upDateForm,{spId: id, operationType: SP_STATUS_MAP.CANCELLATION})
      },
      showUpdatePop(status, id ,isAll) {
        this.upDateForm.remark = ''
        this.dialogUpdate = true
        let allow = status == SP_STATUS_MAP.NORMAL ? '可以' : '不能'
        let type = status == SP_STATUS_MAP.NORMAL ? '解冻' : '冻结'
        this.updatePop = {
          type: 'warning',
          description: `${type}后，企业将${allow}进行任何业务操作，且${allow}登录一信通企业信息服务平台,是否确认${type}？`,
          status: status,
          isAll:isAll,
        }
        Object.assign(this.upDateForm ,{spId: id, operationType: status})
      },
      async toUpdateStatus() {
        if(!this.upDateForm.remark){
          this.$message({message: '原因不能为空', type: 'warning'});
          return
        }
        let res = null
        if(this.updatePop.isAll){
          let param = Object.assign({},this.upDateForm,{spIds:this.selectList})
          delete param.spId
          res = await Busi_spManage_batchUpdate(param)
        }else {
          res = await Busi_spManage_update(this.upDateForm)
        }
        if(!res) return
        this.$message({message: res.msg, type: 'success'})
        this.query()
        this.dialogUpdate = false
      }
    }
  }
</script>

<style type="text/scss" lang="scss" rel="stylesheet/scss">
  .pop-change-sale{
    .el-dialog__header{
      padding-top: 15px;
      border-bottom: 1px solid #e9eced;
    }
    .el-dialog__body{
      padding: 0 15px;
    }
    .el-form-item{
      margin-bottom: 20px;
      padding-right: 10px;
    }
    .el-dialog__footer{
      padding-bottom: 20px;
      padding-top: 0;
    }
  }
</style>

