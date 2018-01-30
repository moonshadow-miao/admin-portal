<template>
  <section>
    <search>
      <template slot="rol_first">
        <el-form-item label="企业编号">
          <el-input></el-input>
        </el-form-item>
      </template>
    </search>
    <div class="header">
      <ul class="m-b-15">
        <li>企业全称 <span class="m-l-20">企业全称企业全称企业全称企业全称</span></li>
        <li>选择通知对象</li>
        <li>
          <el-checkbox label="联系人手机号" class="width-15"></el-checkbox>
          <el-input size="small" class="width"></el-input>
          <el-checkbox label="渠道商手机号" class="width-15  m-l-30"></el-checkbox>
          <el-input size="small" class="width"></el-input>
        </li>
        <li class="border-b-t">
          <el-checkbox label="其他人员手机号" class="width-15"></el-checkbox>
          <el-input size="small" class="width"></el-input>
          <el-checkbox label="帜讯销售手机号" class="width-15  m-l-30"></el-checkbox>
          <el-input size="small" class="width"></el-input>
        </li>
        <li class="m-t-30">
          <span>选择通知内容</span>
        </li>
      </ul>
      <dl class="clearfix">
        <dt>
          <i class="el-icon-check"></i>
        </dt>
        <dd>
          <p class="title">开户成功通知</p>
          <p>尊敬的所属渠道商 您好：{您的账户已开户成功}。企业编号：{}，用户名：{}，初始密码：{}；登录网址：{}。</p>
        </dd>
      </dl>
    </div>
    <div class="footer">
      <el-button type="primary" size="small">通知企业</el-button>
    </div>
  </section>
</template>

<script>
  import {Icon} from 'element-ui';
  export default {
    name: "spNoticeIndex"
  }
</script>

<style scoped lang="scss">
  .header{
    color:#606266;
    ul{
      padding-left:30px;
      li{
        height:45px;
        line-height:45px;
        .width{
          width:20%;
        }
        .width-15{
          width:15%;
        }
      }
      .border-b-t{
        padding-bottom:35px;
        &:after{
          padding-top:25px;
          content:'';
          width:100%;
          display:block;
          border-bottom: 1px solid #e9eced;
        }
      }
    }
    dl{
      height:100px;
      width:60%;
      border:1px solid #e9eced;
      cursor: pointer;
      margin-left:30px;
      margin-bottom:30px;
      dt{
        float:left;
        width:50px;
        background:#eee;
        height:100%;
        line-height:100px;
        text-align:center;
        i{
          font-size:35px;
          color:#fff;
          font-weight: 900;
        }
      }
      dd{
        float:left;
        height:100%;
        p{
          padding:15px;
        }
        .title{
          color:#2777d2;
        }
      }
      &:hover{
        border:1px solid #42a5f5;
      }
    }
  }
  .footer{
    margin-left:30px;
    width:60%;
    text-align:right;
  }
</style>
