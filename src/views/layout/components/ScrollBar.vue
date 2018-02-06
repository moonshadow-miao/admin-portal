<template>
  <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll">
    <div class="logo">
      <div class="menu_search">
        <el-input size="mini" suffix-icon="el-icon-search" @change="showSearch = false" @blur="showSearch = false" @focus="handleSearch" @input="handleSearch" v-model="searchContent" placeholder="搜索：导航菜单"></el-input>
      </div>
      <div class="search-list" v-show="showSearch">
        <ul v-if="searchList.length>0">
          <li v-for="item in searchList" :key="item.path" @click="handleJump(item)" class="overflow-ellipsis">
            {{item.name}}
          </li>
        </ul>
        <ul v-else>
          <li v-if="searchContent" class="overflow-ellipsis">暂未找到<span class="label">{{searchContent}}</span></li>
        </ul>
      </div>
    </div>
    <div class="scroll-wrapper" ref="scrollWrapper" :style="{top: top + 'px'}">
      <slot></slot>
    </div>
    <div class="expand clearfix">
      <div @click="expand" v-show="menuIsExpand">
        <svg-icon class="fr icon" icon-class="menu_expand"></svg-icon>
      </div>
      <div @click="expand" v-show="!menuIsExpand">
        <svg-icon class="fr icon" icon-class="menu_close"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
  const delta = 15

  export default {
    name: 'scrollBar',
    data() {
      return {
        top: 0,
        searchList: [],
        searchContent: '',
        showSearch:false
      }
    },
    computed:{
      menuIsExpand(){
        return this.$store.state.common.menuIsExpand
      }
    },
    methods: {
      handleScroll(e) {
        const eventDelta = e.wheelDelta || -e.deltaY * 3
        const $container = this.$refs.scrollContainer
        const $containerHeight = $container.offsetHeight
        const $wrapper = this.$refs.scrollWrapper
        const $wrapperHeight = $wrapper.offsetHeight
        if (eventDelta > 0) {
          this.top = Math.min(0, this.top + eventDelta)
        } else {
          if ($containerHeight - delta < $wrapperHeight) {
            if (this.top < -($wrapperHeight - $containerHeight + delta)) {
              this.top = this.top
            } else {
              this.top = Math.max(this.top + eventDelta, $containerHeight - $wrapperHeight - delta)
            }
          } else {
            this.top = 0
          }
        }
      },
      handleSearch() {
        this.searchList = [];
        this.showSearch = true
        const value =  this.searchContent
        if(!value){
          this.showSearch = false
          return
        }
        const routes = this.$router.options.routes;
        const filterPath = (item, path) => {
          path += '/' + item.path;
          if (item.children && item.children.length) {
            filterData(item.children, path);
          } else {
            if (item.meta && item.meta.title && value && item.meta.title.indexOf(value) > -1) {
              this.searchList.push({
                path: path.slice(1), name: item.meta.title
              });
            }
          }
        };
        const filterData = (data, path = "") => {
          data.forEach((item) => {
            filterPath(item, path);
          })
        };
        filterData(routes);
      },
      handleJump(item) {
        this.$router.push(item.path);
        this.searchList = [];
        this.searchContent = "";
      },
      expand(){
        this.$store.commit('common/TOGGLE_MENU')
        if(!this.menuIsExpand){
          IBSS.$emit('openMenu')
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/styles/variables.scss';
  .scroll-container {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: $menuBg;
    .scroll-wrapper {
      position: absolute;
      width: 100% !important;
      margin-top: 43px;
    }
    .logo {
      padding: 5px 10px;
      height: 42px;
      width: 100%;
      position: relative;
      border-bottom: 1px solid $borderColor;
      color: #fff;
      input {
        width: 100%;
        height: 30px;
        background-color: #fff;
        padding-left: 20px;
      }
      .search-list {
        background-color: #fff;
        position: absolute;
        border: 1px solid $borderColor;
        top: 41px;
        width: 160px;
        z-index: 100;
        ul {
          padding: 6px 0;
          position: relative;
          z-index: 11;
          &:before{
            position: absolute;
            content: '';
            border: 1px solid $borderColor;
            width: 6px;
            height: 6px;
            border-bottom: none;
            border-right: none;
            top: -5px;
            left: 22px;
            background-color: #fff;
            transform: rotate(45deg);
          }
          li {
            padding-left: 20px;
            line-height: 34px;
            height: 34px;
            cursor: pointer;
            color: #616161;
            font-size: 12px;
            &:hover {
              color: $textColor;
              background-color: $menuBg;
            }
          }
          .label {
            padding: 3px 1px;
            font-size: 12px;
            background-color: #e6e6e6;
            font-weight: normal;
            white-space: nowrap;
            border-radius: .25em;
            margin-left: 5px;
          }
        }
      }
    }
    .expand{
      position: fixed;
      z-index: 101;
      bottom: 0;
      width: 180px;
      height: 35px;
      border-top:1px solid #EAEAEA ;
      .icon{
        cursor: pointer;
        font-size: 20px;
        margin-top: 7px;
      }
    }
  }
</style>
