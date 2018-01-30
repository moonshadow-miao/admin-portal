<template>
  <el-form labelWidth="150px" size="small" :model="formData" :rules="ruleForm">
    <el-row :gutter="40">
      <el-col :span="12">
        <el-form-item label="计费号码" prop="feeMdn">
          <el-input :disabled="preview==='preview'"  v-model.number="formData.feeMdn" style="width:50%"></el-input>
          <label>号码归属地：</label>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="同步成本">
          <el-radio-group :disabled="preview==='preview'" v-model="formData.isCostSync">
            <el-radio v-for="item in costSync" :key="item.label" :label="item.label">{{item.text}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>

    </el-row>
    <el-row :gutter="40">
      <el-col :span="12">
        <el-form-item label="付费类型">
          <el-radio-group :disabled="preview==='preview'" v-model="formData.isFeeType">
            <el-radio v-for="item in feeType" :key="item.label" :label="item.label">{{item.text}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="实时扣费">
          <el-radio-group :disabled="preview==='preview'" v-model="formData.isFeeSync">
            <el-radio v-for="item in feeSync" :key="item.label" :label="item.label">{{item.text}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="账户类型">
          <el-radio-group :disabled="preview==='preview'" v-model="formData.isAccountType" v-if="formData.isFeeType==='0'">
            <el-radio v-for="item in accountType" :key="item.label" :label="item.label">{{item.text}}</el-radio>
          </el-radio-group>
          <template v-if="formData.isFeeType==='1'">
            <el-radio-group :disabled="preview==='preview'" v-model="formData.creditLevel">
              <div class="m-t-5">
                <el-radio label="0"  @change="handleRadioChange">A级信用，建议党政军、高信用度企业选择</el-radio>
                <div class="m-t-10">
                  <el-radio-group :disabled="preview==='preview'" v-model="formData.levelPolicy_A">
                    <span class="m-r-5">停机允许消费限制:</span>
                    <el-radio label="1" :disabled="formData.creditLevel!=='0'">额度</el-radio>
                    <el-input  style="width:80px;" v-model.number="formData.creditVal_A1" :disabled="formData.creditLevel!=='0'"></el-input>
                    <span class="m-l-5 m-r-5">元</span>
                    <el-radio label="2" :disabled="formData.creditLevel!=='0'">截止至</el-radio>
                    <el-input style="width:80px;" v-model="formData.creditVal_A2" :disabled="formData.creditLevel!=='0'"></el-input>
                    <span class="m-l-5 m-r-5">天后</span>
                    <el-radio label="3" :disabled="formData.creditLevel!=='0'">截至到当月倒数第</el-radio>
                    <el-input style="width:80px;" v-model="formData.creditVal_A3" :disabled="formData.creditLevel!=='0'"></el-input>
                    <span class="m-l-5 m-r-5">天</span>
                  </el-radio-group>
                  <template v-if="preview==='preview'">
                    <el-checkbox :disabled="preview==='preview'"  v-model="formData.creditIsRemind">通知客户告警信息</el-checkbox>
                  </template>
                  <template else>
                    <el-checkbox  :disabled="formData.creditLevel!=='0'" v-model="formData.creditIsRemind">通知客户告警信息</el-checkbox>
                  </template>

                </div>

              </div>
              <div class="credit-item m-t-10">
                <el-radio label="1" v-model="formData.creditLevel" @change="handleRadioChange">C级信用，允许超套餐消费:</el-radio>
                <el-radio-group style="margin-top: -6px" v-model="formData.levelPolicy_C">
                  <el-radio label="1" :disabled="formData.creditLevel!=='1'">金额</el-radio>
                  <span class="m-l-5 m-r-5">元</span>
                  <el-input style="width:80px;" :disabled="formData.creditLevel!=='1'"></el-input>
                  <el-radio label="2" :disabled="formData.creditLevel!=='1'">套餐费</el-radio>
                  <el-input style="width:80px;" :disabled="formData.creditLevel!=='1'"></el-input>
                  <span class="m-l-5">倍</span>
                </el-radio-group>
              </div>
              <div class="credit-item m-t-5">
                <el-radio label="2" v-model="formData.creditLevel" @change="handleRadioChange">D级信用，只要不停机，且计费手机号码内余额足够，则允许发送</el-radio>
              </div>
            </el-radio-group>
          </template>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row v-if="!preview">
      <el-col :span="12">
        <el-form-item label=" ">
          <el-button @click="next(2)">上一步</el-button>
          <el-button type="primary" @click="next(4)">下一步</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
  import editMixin from '../../spManage/components/editMixin'
  export default {
    name: "accountInfo",
    data(){
      const validateFeeMdn=(rule,value,callback)=>{
        if(!value){
           callback('计费号码不能为空');
        }else{
          if(!Number.isInteger(value)){
            callback('计费号码不合法');
          }else{
            callback();
          }
        }
      };
      return {
        formData:{
          feeMdn:'',
          isCostSync:'0',
          isFeeType:'0',
          isFeeSync:'0',
          isAccountType:'0',
          creditLevel:'2',
          levelPolicy_C:'1',
          levelPolicy_A:'1',
          creditVal_A1:'',
          creditVal_A2:'',
          creditVal_A3:'',
          creditIsRemind:false
        },
        ruleForm:{
          feeMdn:[{trigger:'blur',validator:validateFeeMdn}]
        },
        costSync: [{text: '开启', label: '0'}, {text: '关闭', label: '1'}],
        feeSync: [{text: '开启', label: '0'}, {text: '关闭', label: '1'}],
        feeType: [{text: '预付费', label: '0'}, {text: '后付费', label: '1'}],
        accountType: [{text: '计收', label: '0'}, {text: '免收', label: '1'}],
      }
    },
    mixins:[editMixin],
    methods:{
      next(step){
        this.$emit('handleNext',step);
      },
      handleRadioChange(val){

      }
    }
  }
</script>

