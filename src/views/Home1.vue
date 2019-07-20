<template>
  <div>
    <router-link :to="{path:'/home1'}">home1</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    // 单个路由拦截
    beforeRouteEnter (to, from, next) {
      // console.log('home1----',to)
      next()
    },
  }
</script>

<style lang="scss" scoped>

</style>