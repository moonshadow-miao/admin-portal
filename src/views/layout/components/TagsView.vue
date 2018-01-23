<template>
  <div class="tags-view-container" v-show="showTag">
    <div class="tags-view-wrapper">
      <router-link ref='tag' class="tags-view-item" :class="isActive(tag)?'active':''" v-for="tag in cachedViews" :to="tag.path" :key="tag.name">
        {{tag.meta.title}}
        <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapState('common', ['currentView', 'cachedViews', 'showTag'])
    },
    watch: {
      $route() {
        this.addViewTags()
      }
    },
    mounted() {
      this.addViewTags()
    },
    methods: {
      ...mapActions('common', ['addView', 'delView']),
      isActive(route) {
        return route.name === this.$route.name
      },
      addViewTags() {
        const route = this.$route;
        if (Object.keys(route.meta).length) {
          this.addView(route)
        }
      },
      closeSelectedTag(view) {
        this.delView(view.name).then(views => {
          view ? this.$router.push(views.path) : this.$router.push('/')
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .tags-view-container {
    position: fixed;
    top: 50px;
    background-color: #fff;
    width: 100%;
    z-index: 100;
    .tags-view-wrapper {
      background: #fff;
      height: 34px;
      border-bottom: 1px solid #d8dce5;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
      .tags-view-item {
        display: inline-block;
        position: relative;
        height: 26px;
        line-height: 26px;
        border: 1px solid #d8dce5;
        color: #495060;
        background: #fff;
        padding: 0 8px;
        font-size: 12px;
        margin-left: 5px;
        margin-top: 4px;
        &:first-of-type {
          margin-left: 15px;
        }
        &.active {
          background-color: #42b983;
          color: #fff;
          border-color: #42b983;
          &::before {
            content: '';
            background: #fff;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            position: relative;
            margin-right: 2px;
          }
        }
      }
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss">
  //reset element css of el-icon-close
  .tags-view-wrapper {
    .tags-view-item {
      .el-icon-close {
        width: 16px;
        height: 16px;
        vertical-align: 2px;
        border-radius: 50%;
        text-align: center;
        transition: all .3s cubic-bezier(.645, .045, .355, 1);
        transform-origin: 100% 50%;
        &:before {
          transform: scale(.6);
          display: inline-block;
          vertical-align: -3px;
        }
        &:hover {
          background-color: #b4bccc;
          color: #fff;
        }
      }
    }
  }
</style>
