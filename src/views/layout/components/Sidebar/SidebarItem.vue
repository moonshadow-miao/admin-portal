<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden&&item.children">
      <router-link v-if="!item.children.length" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
        <el-menu-item :index="item.meta.index || item.name" class='submenu-title-noDropdown'>
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon"
                    :icon-class="item.children[0].meta.icon"></svg-icon>
          <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.meta.index || item.name" :key="item.name">
        <template slot="title">
          <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
          <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item class="nest-menu" v-if="child.children&&child.children.length>0" :parent="item.path + '/'" :routes="[child]" :key="child.path"></sidebar-item>

          <router-link v-else :to="parent + item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="child.meta.index || item.name">
              <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
              <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>
  export default {
    name: 'SidebarItem',
    props: {
      routes: {
        type: Array
      },
      parent: {
        default:''
      }
    },
  }
</script>
