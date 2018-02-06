<template>
  <div class="app-wrapper" :class="{hideSidebar:menuIsExpand}">
    <div class="top">
      <img class="m-l-30" src="../../assets/img/logo.png" alt="">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <svg-icon icon-class="member" class="icon"></svg-icon>
          <span class="use_name">{{user.name}}</span>
        </div>
        <el-dropdown-menu class="user-dropdown w-80" slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar/>
      <app-main/>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Sidebar from './components/Sidebar'
  import AppMain from './components/AppMain'
  import {mapState} from 'vuex'
  
  export default {
    name: 'layout',
    components: {Navbar, Sidebar, AppMain},
    computed: {
      ...mapState('common', ['platformInfo', 'menuIsExpand', 'user'])
    },
    created() {
      if (!this.platformInfo.length) {
        this.$store.dispatch('common/getPlatform')
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('common/logOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
  
  .top {
    height: 60px;
    background-color: #0097FF;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    .avatar-container {
      height: 32px;
      width: 100px;
      padding: 0 16px;
      line-height: 32px;
      border-radius: 16px;
      background-color: #28A3FF;
      color: #fff;
      display: inline-block;
      position: absolute;
      right: 35px;
      text-align: center;
      top: 14px;
      cursor: pointer;
      span {
        font-size: 14px;
      }
      .icon{
        font-size: 18px;
        color: #fff;
      }
    }
  }
</style>
