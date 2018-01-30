<template>
  <section class="content-container">
    <div class="title">
      <span class="line p-l-5">企业信息</span>
    </div>
    <sp-info></sp-info>
    <div class="title">
      <span class="line p-l-5">渠道信息</span>
    </div>
    <channel-info></channel-info>
    <div class="title">
      <span class="line p-l-5">账户信息</span>
    </div>
    <account-info></account-info>
    <div class="title">
      <span class="line p-l-5">业务信息</span>
    </div>
    <div class="footer text-center">
      <el-button size="small">取消</el-button>
      <el-button type="primary" size="small">保存</el-button>
      <el-button type="primary" size="small">提交审核</el-button>
    </div>
  </section>
</template>

<script>
  import spInfo from './components/SpInfo';
  import channelInfo from './components/ChannelInfo';
  import accountInfo from './components/AccountInfo';
  export default {
    name: "applyOpenIndex",
    components: {
      spInfo,channelInfo,accountInfo
    }
  }
</script>

<style lang="scss">
  @import "src/styles/variables.scss";
  .content-container {
    padding: 20px;
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

    .title {
      padding: 10px 15px;
      border-bottom: 1px solid $borderColor;
      margin-bottom: 20px;
      span {
        color: $mainBg;
        position: relative;
        &.line::before {
          position: absolute;
          content: '';
          background-color: $mainBg;
          height: 18px;
          width: 3px;
          left: -5px;
          top: -1px;
        }
      }
    }
  }

</style>
