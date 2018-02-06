<template>
  <section class="spOpen-container">
    <header>
      <ul class="step">
        <li v-for="(item,index) in headTitle" :key="index" :class="{'active':nextStep===item.value}">
          <svg-icon className="step-icon" iconClass="step" v-if="index<headTitle.length-1"></svg-icon>
          <span>{{item.value}}</span>{{item.title}}
        </li>
      </ul>
    </header>
    <div class="content-container">

      <!--企业信息-->
      <div v-show="nextStep===1">
        <div class="title">
          <span class="line p-l-5">企业信息</span>
        </div>
        <sp-info  @handleNext="handleNext" :preData="spInfo" />
      </div>

      <!--  渠道信息-->
      <channel-info v-show="nextStep===2" @handleNext="handleNext" :preData="channelInfo" />

      <!--账户信息-->
      <account-info v-show="nextStep===3" @handleNext="handleNext"/>

      <!-- 开户成功-->
      <el-row :gutter="20" v-show="nextStep===4" style="padding:40px 0">
        <el-col :span="24" class="text-center">
          <i class="el-icon-success" style="font-size:80px;color:#65af45;"></i>
        </el-col>
        <el-col :span="24">
          <div class="sp-info">
            <h1 class="m-t-20 m-b-20 p-l-10">恭喜您，新企业开户成功！</h1>
            <ul class="m-b-10">
              <li> 企业全称<span>{{successInfo.spName}}</span></li>
              <li> 企业编号<span>{{successInfo.spCode}}</span></li>
              <li> 管理员账号<span>{{successInfo.name}}</span></li>
              <li> 管理员手机号<span>{{successInfo.mobile}}</span></li>
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
  import Vue from 'vue'
  import {Upload} from 'element-ui'
  import SpInfo from './components/SpInfo'
  import ChannelInfo from './components/ChannelInfo'
  import AccountInfo from './components/AccountInfo'

  Vue.use(Upload)
  export default {
    name: "spOpenIndex",
    data() {
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
        visible: false,
        spInfo:{},
        successInfo:{},
        channelInfo:{}
      }
    },
    components: {
      SpInfo,ChannelInfo,AccountInfo
    },
    methods: {
      handleNext(val,data,result) {
        this.nextStep = val;
        switch(val+''){
          case '1':
            console.log(data);
            this.spInfo=data;
            break;
          case '2':
            if(data){
              this.successInfo=data;
            }
            if(result){
              this.channelInfo=result;
            }
            break;
        }
      }
    }
  }
</script>

<style scoped lang='scss'>
  .spOpen-container {
    padding: 40px;
    .step {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f7f7fb;
      text-align: center;
      overflow: hidden;
      li {
        height: 46px;
        line-height: 46px;
        flex: 1;
        position: relative;
        color:#959698;
        font-size: 16px;
        span {
          display:inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          line-height: 24px;
          text-align: center;
          color: #757575;
          margin-right: 15px;
          font-weight: bold;
          border: 1px solid #959698;
        }
        &.active {
          border-right: none;
          color: #3399ff;
          span {
            color: #fff;
            background-color: #3399ff;
            border: 1px solid #f6fafc;
          }
        }
      }
    }
    .content-container {
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
  @import "src/styles/variables.scss";
  .sp-message {
    .el-dialog__body {
      padding: 0 20px;
    }
  }
  .spOpen-container{
    .el-input__inner{
     // width:320px;
    }
  }

  .content-container{

    .title {
      padding-top:40px;
      border-bottom: 1px solid $borderColor;
      padding-bottom: 20px;
      span {
        color: $mainBg;
        font-size:14px;
        position:relative;
        &.line::before {
          content: '';
          background-color: $mainBg;
          position: absolute;
          height: 100%;
          width: 2px;
          left:-0;
          top:0;
        }
      }
    }
  }
  .step-icon{
    font-size:23px;
    position:absolute;
    right:-23px;
    top:12px;
    fill:#c0c7cc;
  }
</style>
