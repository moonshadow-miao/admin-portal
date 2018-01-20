<template>
  <section class="spOpen-container">
    <header>
      <ul class="step">
        <li v-for="(item,index) in headTitle" :key="index" :class="{'active':nextStep===item.value}">
          <span>{{item.value}}</span>{{item.title}}
        </li>
      </ul>
    </header>
    <div class="content-container">

      <!--企业信息-->

      <el-form labelWidth="150px" size="small" v-if="nextStep===1" :model="spInfo" :rules="spInfoRule" ref="spInfo">
        <el-row :gutter="40">
          <el-col :span="12">
            <el-form-item label="企业全称" prop="spName">
              <el-input v-model="spInfo.spName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系人姓名" prop="contactName">
              <el-input v-model="spInfo.contactName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="企业类型" prop="spType">
              <el-radio-group v-model="spInfo.spType">
                <el-radio v-for="item in spType" :key="item.label" :label="item.label">{{item.text}}</el-radio>
              </el-radio-group>
            </el-form-item>

          </el-col>
          <el-col :span="12">
            <el-form-item label="联系人手机号" prop="contactPhone">
              <el-input v-model="spInfo.contactPhone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="行业分类" prop="industryTypeCopy">
              <el-input v-model="spInfo.industryTypeCopy" style="display:none;"></el-input>
              <IndustryList :checkedList.sync="spInfo.industryType"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="证件类型">
              <el-radio-group v-model="cardChecked">
                <el-radio v-for="item in cradType" :key="item.label" :label="item.label">{{item.text}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="40" v-show="cardChecked==='1'">
          <el-col :span="12">
            <el-form-item label="统一社会信用代码">
              <el-input placeholder="18位数字或者大写英文字母"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="营业执照">
              <el-upload action="/" :auto-upload="false" :limit="1" :before-upload="handleBeforUpload" list-type="picture">
                <span style="margin-right:155px;">一张叫做营业执照的照片.JPG</span>
                <el-button size="small" type="primary">点击上传</el-button>
                <span slot="tip" class="el-upload__tip m-l-20">支持2M以内的PNG、JPG格式文件</span>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="40" v-show="cardChecked==='2'">
          <el-col :span="12">
            <el-form-item label="税务登记号">
              <el-input placeholder="15位数字或者大写英文字母"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="税务登记证">
              <el-upload action="/" :auto-upload="false" :limit="1">
                <el-button size="small" type="primary">点击上传</el-button>
                <span slot="tip" class="el-upload__tip m-l-20">支持2M以内的PNG、JPG格式文件</span>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="营业执照注册号">
              <el-input placeholder="15位数字或者大写英文字母"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="营业执照证">
              <el-upload action="/" :auto-upload="false" :limit="1">
                <span style="margin-right:155px;">一张叫做营业执照的照片.JPG</span>
                <el-button size="small" type="primary">点击上传</el-button>
                <span slot="tip" class="el-upload__tip m-l-20">支持2M以内的PNG、JPG格式文件</span>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="组织机构代码">
              <el-input placeholder="9位数字或者大写英文字母"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="组织机构代码证">
              <el-upload action="/" :auto-upload="false" :limit="1">
                <span style="margin-right:155px;">一张叫做营业执照的照片.JPG</span>
                <el-button size="small" type="primary">点击上传</el-button>
                <span slot="tip" class="el-upload__tip m-l-20">支持2M以内的PNG、JPG格式文件</span>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="24">
            <el-form-item label="其他证件">
              <el-upload action="/" :auto-upload="false" :limit="1">
                <el-button size="small" type="primary">点击上传</el-button>
                <span slot="tip" class="el-upload__tip m-l-20">支持2M以内的PNG、JPG格式文件</span>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注">
              <el-input type="textarea"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label=" ">
              <el-button type="primary" @click="handleNext(2)">下一步</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <!--  渠道信息-->

      <el-form v-if="nextStep===2" labelWidth="150px" size="small" :model="channelInfo">
        <el-row>
          <el-col :span="12">
            <el-form-item label="所属渠道">
              <Platform :showCity="true" :platform.sync="channelInfo.platform" :city.sync="channelInfo.city"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="渠道商姓名">
              <el-input v-model="channelInfo.saleName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="渠道商手机号">
              <el-input v-model="channelInfo.saleMdn"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="帜讯销售姓名">
              <el-input v-model="channelInfo.customerManagerName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="帜讯销售手机号">
              <el-input v-model="channelInfo.customerManagerMdn"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label=" ">
              <el-button @click="handleNext(1)">上一步</el-button>
              <el-button type="primary" @click="handleNext(3)">下一步</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <!--账户信息-->

      <el-form v-if="nextStep===3" labelWidth="150px" size="small">
        <el-row :gutter="40">
          <el-col :span="12">
            <el-form-item label="计费号码">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="同步成本">
              <el-radio-group v-model="isCostSync">
                <el-radio v-for="item in costSync" :key="item.label" :label="item.label">{{item.text}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row :gutter="40">
          <el-col :span="12">
            <el-form-item label="付费类型">
              <el-radio-group v-model="isFeeType">
                <el-radio v-for="item in feeType" :key="item.label" :label="item.label">{{item.text}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="实时扣费">
              <el-radio-group v-model="isFeeSync">
                <el-radio v-for="item in feeSync" :key="item.label" :label="item.label">{{item.text}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="账户类型">
              <el-radio-group v-model="isAccountType" v-if="isFeeType==='0'">
                <el-radio v-for="item in accountType" :key="item.label" :label="item.label">{{item.text}}</el-radio>
              </el-radio-group>
              <template v-if="isFeeType==='1'">
                <el-radio-group>
                  <div class="m-t-5">
                    <el-radio label="0">A级信用，建议党政军、高信用度企业选择</el-radio>
                    <div class="m-t-10">
                      <el-radio-group>
                        <span class="m-r-5">停机允许消费限制:</span>
                        <el-radio>额度</el-radio>
                        <el-input style="width:80px;"></el-input>
                        <span class="m-l-5 m-r-5">元</span>
                        <el-radio>截止至</el-radio>
                        <el-input style="width:80px;"></el-input>
                        <span class="m-l-5 m-r-5">天后</span>
                        <el-radio>截至到当月倒数第</el-radio>
                        <el-input style="width:80px;"></el-input>
                        <span class="m-l-5 m-r-5">天</span>
                      </el-radio-group>
                      <el-checkbox>通知客户告警信息</el-checkbox>
                    </div>

                  </div>
                  <div class="credit-item m-t-5">
                    <el-radio label="1">C级信用，允许超套餐消费:</el-radio>
                    <el-radio-group style="margin-top: -6px">
                      <el-radio>金额</el-radio>
                      <span class="m-l-5 m-r-5">元</span>
                      <el-input style="width:80px;"></el-input>
                      <el-radio>套餐费</el-radio>
                      <el-input style="width:80px;"></el-input>
                      <span class="m-l-5">倍</span>
                    </el-radio-group>
                  </div>
                  <div class="credit-item">
                    <el-radio label="2">D级信用，只要不停机，且计费手机号码内余额足够，则允许发送</el-radio>
                  </div>
                </el-radio-group>
              </template>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label=" ">
              <el-button @click="handleNext(2)">上一步</el-button>
              <el-button type="primary" @click="handleNext(4)">下一步</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <!-- 开户成功-->

      <el-row :gutter="20" v-if="nextStep===4" style="padding:40px 0">
        <el-col :span="24" class="text-center">
          <i class="el-icon-success" style="font-size:80px;color:#65af45;"></i>
        </el-col>
        <el-col :span="24">
          <div class="sp-info">
            <h1 class="m-t-20 m-b-20 p-l-10">恭喜您，新企业开户成功！</h1>
            <ul class="m-b-10">
              <li> 企业全称<span>上海帜讯信息技术股份有限公司</span></li>
              <li> 企业编号<span>610000</span></li>
              <li> 计费号码<span>13300000000</span></li>
            </ul>
            <span class="p-l-10" style="opacity:0.8">您可继续为企业配置业务信息，以便企业可以正常使用平台功能！</span>
          </div>
        </el-col>
        <el-col :span="24" class="text-center m-t-30">
          <el-button type="primary" size="small" @click="visible=true">通知企业</el-button>
          <el-button type="primary" size="small">业务配置</el-button>
          <el-button size="small" @click="$router.push('/business/sp-manage/index')">企业列表</el-button>
        </el-col>
      </el-row>
    </div>

    <!--通知企业-->
    <el-dialog :visible.sync="visible" title="企业通知" width="40%" custom-class="sp-message">
      <p class="alert">请输入企业的手机号码或邮箱地址，选择通知方式，告知企业开户信息！</p>
      <el-form size="small" labelWidth="150px">
        <el-form-item label="企业通知：">
          <el-input type="textarea" autosize></el-input>
        </el-form-item>
        <el-form-item label="联系人号码：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="渠道商销售号码：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="帜讯销售号码：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="其他人员号码：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="企业邮箱：">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="visible=false">取消</el-button>
        <el-button size="small" type="primary" @click="visible=false">确定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
  import vue from 'vue';
  import {Upload, Checkbox, RadioGroup, Dialog} from 'element-ui';

  vue.use(Upload).use(Checkbox).use(RadioGroup).use(Dialog);
  import Platform from '@/components/PlatformSelector/platformSelector';
  import IndustryList from '@/components/IndustryList/Industries.vue';

  export default {
    name: "spOpenIndex",
    data() {
      const validateSpName=(rule,value,callback)=>{
        if(!value){
          return callback(new Error('请输入企业名称'));
        }
        callback();
      };
      const validateContactName=(rule,value,callback)=>{
        if(!value){
          return callback(new Error('请输入联系人姓名'));
        }
        callback();
      };
      const validateContactPhone=(rule,value,callback)=>{
        if(!value){
          return callback(new Error('请输入联系人手机号'));
        }
        if(!/^1[3|4|5|7|8]\d{9}$/.test(value)){
          return callback(new Error('手机号码不合法'));
        }
        callback();
      };
      const validateIndustryType=(rule,value,callback)=>{
        console.log(this.spInfo.industryType);
      };
      return {
        headTitle: [{
          title: '企业信息',
          value: 1
        }, {
          title: '渠道信息',
          value: 2
        }, {
          title: '账户信息',
          value: 3
        }, {
          title: '开户成功',
          value: 4
        }],
        nextStep: 1,
        spType: [{text: '正式', label: '1'}, {text: '体验', label: '2'}, {text: '测试', label: '3'}, {
          text: '联通',
          label: '4'
        }],
        cardChecked: '1',
        cradType: [{text: '三证合一（一照一码）', label: '1'}, {text: '三证分离', label: '2'}],
        isCostSync: '0',
        costSync: [{text: '开启', label: '0'}, {text: '关闭', label: '1'}],
        isFeeSync: '0',
        feeSync: [{text: '开启', label: '0'}, {text: '关闭', label: '1'}],
        isFeeType: '0',
        feeType: [{text: '预付费', label: '0'}, {text: '后付费', label: '1'}],
        isAccountType: '0',
        accountType: [{text: '计收', label: '0'}, {text: '免收', label: '1'}],
        visible: false,
        spInfo:{
          spName:'',
          contactName:'',
          contactPhone:'',
          spType:'1',
          industryTypeCopy:''
        },
        spInfoRule:{
          spName:[{required:true,trigger:'blur',validator:validateSpName}],
          contactName:[{required:true,trigger:'blur',validator:validateContactName}],
          contactPhone:[{required:true,tigger:'blur',validator:validateContactPhone}],
          spType:[{required:true}],
          industryTypeCopy:[{required:true,message:'请选择行业信息'}]
        },
        channelInfo:{
          platform:'',
          city:'',
          saleName:'',
          saleMdn:'',
          customerManagerName:'',
          customerManagerMdn:''
        }
      }
    },
    components: {
      Platform, IndustryList
    },
    watch:{
      'spInfo.industryType'(newVal){
        this.spInfo.industryTypeCopy=newVal.length>0 ?newVal.length:'';
      }
    },
    methods: {
      handleNext(val) {
//        this.$refs['spInfo'].validate((valid)=>{
//
//        });
        this.nextStep = val;

      },
      handleBeforUpload(file){
        console.log(file);
        const isJPG = file.type === 'image/jpeg' || 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是PNG、JPG格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style scoped lang='scss'>
  .spOpen-container {
    padding: 20px;
    .step {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f7f7f7;
      border-bottom: 1px solid #e9eced;
      text-align: center;
      overflow: hidden;
      li {
        height: 46px;
        line-height: 46px;
        flex: 1;
        position: relative;
        span {
          display: inline-block;
          width: 26px;
          height: 26px;
          font-size: 16px;
          border-radius: 50%;
          background-color: #f7f7f7;
          line-height: 26px;
          text-align: center;
          color: #757575;
          margin-right: 6px;
          font-weight: bold;
          border: 1px solid #BDBDBD;
        }
        &:before {
          position: absolute;
          right: -19px;
          top: -2px;
          content: '';
          width: 0;
          height: 0;
          border-top: 25px solid transparent;
          border-bottom: 25px solid transparent;
          border-left: 18px solid #e9eced;
          z-index: 1;
        }
        &:not(:last-child):after {
          position: absolute;
          right: -16px;
          top: 0;
          content: '';
          width: 0;
          height: 0;
          border-top: 23px solid transparent;
          border-bottom: 23px solid transparent;
          border-left: 16px solid #f7f7f7;
          z-index: 1;
        }
        &.active {
          background-color: #2994dd;
          border-right: none;
          color: #FFFFFF;
          span {
            color: #2994dd;
            background-color: #FFFFFF;
            border: 1px solid #f6fafc;
          }
          &:after {
            border-left: 16px solid #2994dd;
          }
        }
      }
    }
    .content-container {
      margin-top: 30px;
      .el-form-item {
        label {
          text-align: center;
        }
      }
      .credit-item {
        height: 50px;
        line-height: 50px;
      }
      .sp-info {
        margin: 0 auto;
        width: 400px;
        text-align: left;
        li {
          padding: 10px;
          > span {
            padding-left: 10px;
            color: #169BD5;
          }
        }
      }
    }
    .alert {
      margin: 15px auto;
      background-image: none;
      box-shadow: none;
      text-shadow: none;
      padding: 9px 19px 9px 15px;
      border-radius: 3px;
      background-color: #daeffd;
      color: #2b6a94;
      border-color: #2b6a94;
    }
  }

</style>
<style lang="scss">
  .sp-message {
    .el-dialog__body {
      padding: 0 20px;
    }
  }
</style>
