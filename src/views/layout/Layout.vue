<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar/>
      <TagsView/>
      <app-main/>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Sidebar from './components/Sidebar'
  import AppMain from './components/AppMain'
  import TagsView from './components/TagsView'
  import {mapState} from 'vuex'
  
  export default {
    name: 'layout',
    components: {Navbar, Sidebar, AppMain, TagsView},
    computed: {
      ...mapState('common',['sidebar','platformInfo'])
    },
    created () {
      if(!this.platformInfo.length){
        this.$store.dispatch('common/getPlatform')
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
</style>
