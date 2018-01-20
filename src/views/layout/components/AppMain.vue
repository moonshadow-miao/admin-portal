<template>
  <section class="app-main" :style="{marginTop:showTag ?'35px':'0'}">
    <router-view>
    </router-view>
  </section>
</template>

<script>
  export default {
    name: 'AppMain',
    computed: {
      showTag() {
        return this.$store.state.common.showTag
      }
    }
  }
</script>
