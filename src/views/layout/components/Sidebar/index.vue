<template>
  <scroll-bar>
    <el-menu background-color="#f7f7fb" text-color="#7b848c" :collapse="isCollapse" ref="menu" mode="vertical" class="menu" unique-opened :default-active="$route.meta && $route.meta.index">
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
  import ScrollBar from '../ScrollBar'
  import SidebarItem from './SidebarItem'
  export default {
    components: {SidebarItem, ScrollBar},
    computed: {
      routes() {
        return this.$router.options.routes
      },
      isCollapse() {
        return this.$store.state.common.menuIsExpand
      }
    },
    mounted(){
      this.$nextTick(()=>{
        IBSS.$on('openMenu',()=>{
          let menuIndex = this.$route.matched[1].name
          this.$refs.menu.open(menuIndex)
        })
      })
    },
    beforeDestroy(){
      IBSS.$off('openMenu')
    }
  }
</script>
