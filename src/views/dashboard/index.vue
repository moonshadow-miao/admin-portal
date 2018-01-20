<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name:{{user.name}}</div>
    <div class="dashboard-text">role:<span v-for='role in user.roles' :key='role'>{{role}}</span></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapState('common',['user'])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
