<template>
  <div class="center">
    <span class="title">{{title}}</span>
    <div class="fr">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "center",
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped  rel="stylesheet/scss" lang="scss">
  .center{
    height: 43px;
    padding: 10px 20px 0;
    .title{
      color: #006fbb;
      line-height: 32px;
      font-size: 14px;
    }
    .el-button--small{
      padding: 0 10px;
      line-height: 32px;
    }
  }
</style>
