<template>
  <el-menu class="navbar" mode="horizontal" :class="{'isRetract':!sidebar.opened}">
    <span @click="toggle" class="expand-menu" :class="sidebar.opened ?'el-icon-d-arrow-left':'el-icon-d-arrow-right'"></span>
    <breadcrumb v-if="!isMobile"></breadcrumb>
    <el-dropdown v-if="!isMobile" class="tag-container" trigger="click">
      <div class="avatar-wrapper">
        <svg-icon icon-class="menu" class="icon"></svg-icon>
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown w-120" slot="dropdown">
        <el-dropdown-item>
          <span @click="changeMode(false)" style="display:block;">单窗口浏览</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <span @click="changeMode(true)" style="display:block;">多窗口浏览</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <span class="use_name">{{user.name}}</span>
        <svg-icon icon-class="member" class="icon"></svg-icon>
        <i class="el-icon-caret-bottom"></i>
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
  </el-menu>
</template>

<script>
  import {mapState,mapMutations,mapActions} from 'vuex'
  import Breadcrumb from './Breadcrumb'
  
  export default {
    components: {Breadcrumb},
    computed: {
      ...mapState('common', ['sidebar', 'user','isMobile'])
    },
    methods: {
      ...mapMutations('common',{
        toggleSideBar:'TOGGLE_SIDEBAR',
        changeTag:'CHANGE_TAG'
      }),
      ...mapActions('common', ['addView']),
      logout() {
        this.$store.dispatch('common/logOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      },
      toggle(){
        this.toggleSideBar()
        if(this.sidebar.opened){
          IBSS.$emit('openMenu')
        }
      },
      addViewTags() {
        const route = this.$route;
        if (Object.keys(route.meta).length) {
          this.addView(route)
        }
      },
      changeMode(state){
        this.changeTag(state);
        this.addViewTags()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .control-tag{
    margin-right: 80px;
    margin-top: 17px;
    font-size: 15px;
    cursor: pointer;
  }
  .expand-menu {
    display: inline-block;
    cursor: pointer;
    font-size: 22px;
    vertical-align: 0.8em;
    margin: 15px 10px 0 15px;
  }
  
  .hamburger.is-active {
    transform: rotate(90deg);
  }
  .isRetract{
    left:35px !important;
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
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    box-shadow: 0 1px 5px rgba(0,0,0,0.2);
    position: fixed;
    right: 0;
    left: 185px;
    top: 0;
    z-index: 100;
    .hamburger-container {
      line-height: 58px;
      height: 50px;
      float: left;
      padding: 0 10px;
    }
    .screenfull {
      position: absolute;
      right: 90px;
      top: 16px;
      color: red;
    }
    .avatar-container ,.tag-container{
      height: 50px;
      display: inline-block;
      position: absolute;
      right: 35px;
      .avatar-wrapper {
        cursor: pointer;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          vertical-align: center;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -15px;
          top: 15px;
          font-size: 15px;
        }
      }
    }
    .tag-container{
      right: 190px;
      .icon{
        font-size: 16px;
      }
    }
  }
</style>

