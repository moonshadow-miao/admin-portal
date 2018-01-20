<template>
  <transition name="fade" mode="out-in">
    <keep-alive :include="cachedRule">
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>

<script>
  export default {
    name: "container",
    computed:{
      cachedRule(){
        return this.$store.getters.cachedRule
      }
    }
  }
</script>

