<!--父子组件传值，父组件引用子组件，并向子组件传值-->
<!--子组件通过props接收父组件传递过来的值-->
<!--当子组件需要改变父组件传递过来的参数的值时，可以将参数放在一个对象中传递过来-->
<style lang="stylus">
  box-sizing(arguments)
    -moz-box-sizing arguments
    -webkit-box-sizing arguments
    box-sizing arguments
  border-radius(arguments)
    -moz-border-radius arguments
    -webkit-border-radius arguments
    border-radius arguments
  #formPage
    padding 32px
    .el-form-item.mark
      width 100%
      .el-radio-group
        overflow hidden
        .el-radio:hover
          .el-radio__inner
            display block!important
        .el-radio
          width 146px
          height 82px
          float left
          margin-right 3px
          position relative!important
          cursor pointer
          background #000000
          img
            width auto
            height auto
            max-width 100%
            max-height 100%
            position absolute
            left 0
            right 0
            top 0
            bottom 0
            margin auto
          .el-radio__input
            right 5px!important
            top 5px
            border-radius(2px)
            white-space nowrap
            cursor pointer
            outline none
            display inline-block
            line-height 1
            position absolute!important
            vertical-align middle
            .el-radio__inner
              width 14px
              height 14px
              background none
              z-index 99
              border-radius(2px)
              display none
              border 2px solid #e1e1e1!important
            .el-radio__inner::after
              border-radius(2px)!important
              box-sizing content-box
              content ""
              border 2px solid #ffd600!important
              border-left 0!important
              border-top 0!important
              height 8px
              left 3px
              position absolute
              top 0
              transform rotate(45deg) scaleY(0)
              background none!important
              width 4px
              transition transform .15s cubic-bezier(.71,-.46,.88,.6) .05s
              transform-origin center
          .el-radio__input.is-checked .el-radio__inner::after
            border-color #23232b!important
            transform rotate(45deg) scaleY(1)
            border-radius(0)!important
          .el-radio__input.is-checked .el-radio__inner
            background #ffd600!important
            display inline-block
            position relative
            border 1px solid #ffd600!important
            box-sizing(border-box)
            z-index 1
            transition border-color .25s cubic-bezier(.71,-.46,.29,1.46), background-color .25s cubic-bezier(.71,-.46,.29,1.46)
</style>
<template lang="pug">
  div.parent
    childcomponent(:form="form")
</template>
<script>
  import childcomponent from './child'
  export default {
    components: {
      childcomponent
    },
    data () {
      return {
        form: {
          name: 'hello',
          age: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          publish_time: ''
        }
      }
    },
    methods: {
    }
  }
</script>
