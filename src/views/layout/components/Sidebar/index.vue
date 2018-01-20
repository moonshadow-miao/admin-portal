<template>
  <scroll-bar>
    <el-menu ref="menu" mode="vertical" class="menu" unique-opened :default-active="$route.meta && $route.meta.index" :collapse="isCollapse">
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
  import ScrollBar from '@/components/ScrollBar'
  import SidebarItem from './SidebarItem'
  export default {
    components: {SidebarItem, ScrollBar},
    computed: {
      sidebar() {
        return this.$store.state.common.sidebar
      },
      routes() {
        return this.$router.options.routes
      },
      isCollapse() {
        return !this.sidebar.opened
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
