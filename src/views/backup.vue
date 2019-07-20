<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    gsj(position) {
      // 当数据改变之后界面没变化的时候的解决方案1：用vue的set   地址：https://cn.vuejs.org/v2/api/#Vue-set
      // this.$set(this.list,position,"555")

      // 方案2  forceUpdate   https://cn.vuejs.org/v2/api/#vm-forceUpdate
      // this.list[position] = "555";
      // this.$forceUpdate()

      // 方案3 改变key值  即可刷新
      // this.list[position] = "555";
      // this.keyId = Math.random()+''
      

      // 方案4  宇宙最强！  JSON.parse(JSON.stringify())
      this.list[position] = "555";
      let copyData = JSON.parse(JSON.stringify(this.list));
      this.list = copyData;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>