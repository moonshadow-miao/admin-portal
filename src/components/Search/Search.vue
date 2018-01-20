<template>
  <div class="search">
    <div class="search-label hidden-xs-only">
      <span class="el-icon-search"></span>
    </div>
    <el-row>
      <el-col :xs="23" :sm="19" :offset="1">
        <el-form ref="form" label-width="95px" size="small">
          <div class="search-options">
            <el-row>
              <el-col :lg="7" :sm="12" :xs="23">
                <slot name="rol_first"></slot>
              </el-col>
              <el-col :lg="7" :sm="12" :xs="23">
                <slot name="rol_second"></slot>
              </el-col>
              <el-col :lg="7" :sm="13" :xs="23">
                <slot name="rol_third"></slot>
              </el-col>
              <el-col :lg="21" :sm="24">
                <el-row>
                  <el-col :lg="8" :sm="13" :xs="24">
                    <slot name="rol_merge_first"></slot>
                  </el-col>
                  <el-col :lg="16" :sm="24" :xs="24">
                    <slot name="rol_merge_second"></slot>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :lg="21" :sm="24">
                <slot name="rol"></slot>
              </el-col>
            </el-row>
          </div>
        </el-form>
      </el-col>
      <el-col :xs="24" :sm="4">
        <div class="search-query">
          <el-button class="w-100" type="primary" size="small" @click="query">搜索</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "search",
    data() {
      return {}
    },
    methods: {
      query() {
        this.$emit('query')
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/styles/variables.scss';
  
  .search {
    position: relative;
    border-bottom: 1px solid $borderColor;
  }
  
  .search-label {
    position: absolute;
    top: 10px;
    left: 0;
    height: 32px;
    width: 50px;
    background-color: $mainBg;
    text-align: right;
    padding-right: 10px;
    border-radius: 0 16px 16px 0;
    span {
      color: #fff;
      font-size: 16px;
      line-height: 30px;
      font-weight: bold;
    }
  }
  
  .search-options {
    border-right: 1px solid $borderColor;
    padding: 10px 20px 10px 0;
  }
  
  .search-query {
    padding: 10px 0;
    text-align: center;
  }
</style>
<style rel="stylesheet/scss" lang="scss">
  .empty-item {
    height: 33px;
  }
  
  .date {
    width: 250px;
    .el-date-picker__header {
      margin: 5px 10px;
    }
    .el-picker-panel__content {
      width: 240px;
      margin: 5px;
    }
  }
</style>
