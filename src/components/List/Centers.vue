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
    height: 53px;
    padding: 10px 20px;
    .title{
      color: #006fbb;
      line-height: 32px;
      font-size: 14px;
    }
  }
</style>
