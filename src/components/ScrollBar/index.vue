<template>
  <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll">
    <div class="logo">
      <input type="text" placeholder="搜索：导航菜单" @input="handleSearch" v-model="searchContent">
      <div class="search-list">
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
        searchContent: ''
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
      handleSearch(e) {
        this.searchList = [];
        const value = e.target.value;
        this.searchContent = value;
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
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../styles/variables.scss';

  .scroll-container {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: $menuBg;
    .scroll-wrapper {
      position: absolute;
      width: 100% !important;
      margin-top: 116px;
    }
    .logo {
      background: url('http://res.test.ums86.com/6admin/img/com/logo.png') no-repeat center 25px/140px 41px #2994dd;
      height: 116px;
      width: 100%;
      position: relative;
      color: #fff;
      input {
        width: 100%;
        height: 30px;
        color: #fff;
        background-color: #177dc2;
        position: absolute;
        left: 0;
        bottom: 5px;
        padding-left: 20px;
        &::-webkit-input-placeholder {
          color: ghostwhite;
        }
      }
      .search-list {
        background-color: #177dc2;
        border-top: 2px solid #2994dd;
        position: absolute;
        top: 112px;
        width: 100%;
        z-index: 1000;
        ul {
          margin: 0 20px;
          li {
            border-bottom: 1px solid #2e8dce;
            line-height: 30px;
            height: 30px;
            cursor: pointer;
          }
          .label {
            padding: 3px 1px;
            font-size: 12px;
            text-shadow: none;
            background-color: #e6e6e6;
            font-weight: normal;
            color: #626262;
            white-space: nowrap;
            border-radius: .25em;
            margin-left: 5px;
          }
        }
      }
    }
  }
</style>
