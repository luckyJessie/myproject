<template lang="pug">
  .header 头部信息
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style lang="stylus">
  box-sizing(arguments)
    -moz-box-sizing arguments
    -webkit-box-sizing arguments
    box-sizing arguments
  .header
    width 100%
    height 40px
    line-height 40px
    position fixed
    top 0
    left 0
    border-bottom 1px solid #ededed
    z-index 99
    background #ffffff
    box-sizing(border-box)
</style>
