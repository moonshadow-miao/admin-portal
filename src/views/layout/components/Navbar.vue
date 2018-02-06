<template>
  <el-menu class="navbar" mode="horizontal" :class="{expand:menuIsExpand}">
    <breadcrumb></breadcrumb>
  </el-menu>
</template>

<script>
  import {mapState,mapMutations,mapActions} from 'vuex'
  import Breadcrumb from './Breadcrumb'
  
  export default {
    components: {Breadcrumb},
    computed: {
      menuIsExpand(){
        return this.$store.state.common.menuIsExpand
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar.expand{
    left: 50px;
  }
  .hamburger.is-active {
    transform: rotate(90deg);
  }
  .use_name{
    font-size: 16px;
  }
  .icon{
    font-size: 20px;
  }
  .user-dropdown{
    left: 90%;
    top: 30px!important;
    right: 15px;
  }
  .navbar {
    padding-right: 10px;
    height: 80px;
    line-height: 50px;
    border-radius: 0px !important;
    position: fixed;
    right: 0;
    left: 180px;
    top: 60px;
    z-index: 100;
  }
</style>

