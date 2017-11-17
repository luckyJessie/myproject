<template lang="pug">
  .footer footer
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
  .footer
    width 100%
    height 40px
    line-height 40px
    border-top 1px solid #ededed
    z-index 999
    background #ffffff
    box-sizing(border-box)
    position fixed
    left 0
    bottom 0
</style>
