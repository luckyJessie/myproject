<template lang="pug">
  #app
    main
      router-view
</template>

<script>
 // import HeaderComponent from './components/header'
  // import FooterComponent from './components/footer'
  export default {
    name: 'app'
//    components: {
//      HeaderComponent,
//      FooterComponent
//    }
  }
</script>
<style lang="stylus">
  box-sizing(arguments)
    -moz-box-sizing arguments
    -webkit-box-sizing arguments
    box-sizing arguments
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    z-index 98
    padding-top 40px
    padding-bottom 40px
    box-sizing(border-box)
    main
      width 100%
      min-height 640px
      overflow hidden
      background #ffffff
      box-sizing(border-box)
</style>
