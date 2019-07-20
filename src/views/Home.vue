<template>
  <div class="home">
    <router-link :to="{path:'/'}">home</router-link>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item,index) in matchedRouter"
        :key="'router-'+index"
        :to="{ path: item.path }"
      >{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { setInterval } from 'timers';

export default {
  name: "home",
  data() {
    return {
      matchedRouter: [],
      beWatched: 1
    };
  },
  // updated () {
  //   console.log(this.$route.matched);
  // },
  watch: {
    // 这是非深度监听
    // 这个的意思就是如果data里面的 beWatched属性值变了的话就会做啥子
    beWatched(newValue, oldValue) {
      console.log('beWatched的值发生了变化:',newValue)
    },

    // 深度监听 要用deep属性来标识，文档里有说明
    // 为什么要用watch来监听路由的变化？
    $route: {
      handler: function(val, oldVal) {
        this.matchedRouter = val.matched;
        console.log(this.matchedRouter);
      },
      // 深度观察监听
      deep: true
    }
  },
  mounted() {
    // 关键点一？什么matched，他的作用是啥子
    // matched是匹配的路由 是一个数组 相当于是当前路由是由哪些路由组成的
    this.matchedRouter = this.$route.matched;
  //   this.timer = setInterval(()=>{
  //     this.beWatched = +new Date()
  //   },1000)
  },
  components: {}
};
</script>
