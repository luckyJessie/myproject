<template lang='pug'>
    div
      button#capture(@click="capture") 截屏
      el-dialog#captureMark(title="屏幕截图" v-model="captureDialogVisible" size="tiny" :before-close='handleClose')
        i.icon.icon-close(@click="closeCutMark")
        h3 截取屏幕图片
        div.imgContainer
          canvas#canvas1
          #tools1
        span(slot="footer" class="dialog-footer")
          el-button(@click="closeCutMark") 取消
          el-button(type="primary" @click="captureDone") 完成
</template>
<style type="stylus">
  #captureMark
    .el-dialog__header
      display none
    .el-dialog__body
      width 600px
      height 700px
      padding 24px 32px
      color rgb(106, 93, 72)
      font-size 14px
      position relative
      overflow visible!important
    .el-dialog--tiny
      width 70%
      height auto
    i.icon.icon-close
      position absolute
      right 20px
      top 20px
      font-size 20px
      text-align center
      line-height 20px
      cursor pointer
      color rgb(217, 206, 191)
      font-weight 400!important
    i:hover
      color #ffd600
    h3
      font-size 16px
      font-weight 500
      line-height 30px
      margin 0
      margin-bottom 24px
      text-align center
      color #23232b
    .imgContainer
      width 100%
      height auto
      position relative
      overflow hidden
      img
        width auto
        height auto
        max-height 100%
        max-width 100%
    .el-dialog__footer
      text-align center
      padding 0 20px 15px
      position relative
      .dialog-footer
        height 36px
        display block
      label
        display inline-block
        border-radius(2px)
        height 36px
        line-height 36px
        padding 0 16px
        margin 0
        border solid 1px #e1e1e1
        cursor pointer
      input
        width 0.1px
        height 0.1px
        opacity 0
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        margin auto
      .el-button
        margin 0 16px
        border-color #ffd600!important
      .el-button--primary
        background #ffd600!important
        color #23232b!important
        box-shadow 0 4px 4px 0 rgba(255, 214, 0, 0.3)!important
</style>
<style type="text/css">
  .screen-btn {
    position: fixed;
    z-index: 50;
    bottom: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #fff;
    border: none;
    outline: none;
    border: 1px solid #ddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
    line-height: normal;
    font-size: 16px;
    color: #f00;
  }
  .bg {
    width: 548px;
    margin: 1rem auto;
  }
  .bg img {
    width: 100%;
    display: block;
  }
</style>
<script>
  import html2canvas from 'html2canvas'
  import '../../assets/canvastools.css'
  import '../../assets/canvastools.js'
  export default {
    components: {
    },
    data () {
      return {
        captureDialogVisible: false,
        capturePic: '',
        cTools1: null
      }
    },
    beforeDestroy () {
    },
    created () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
      handleClose () {
      },
      capture () {
        let that = this
        that.captureDialogVisible = true
        html2canvas(document.body, {
          onrendered: function (canvas) {
            var copyDomCanvas = canvas.toDataURL()
            var canvasGroup = document.getElementById('captureMark')
            var width = (canvasGroup.offsetWidth - 6) / 3
            var canvas1 = document.getElementById('canvas1')
            console.log(canvas1)
            canvas1.width = width
            canvas1.height = 400
            var ctx1 = document.getElementById('canvas1').getContext('2d')
            var image = new Image()
            image.src = copyDomCanvas
            image.onload = function () {
              ctx1.drawImage(image, 0, 0, canvas1.width, 400)
              that.cTools1 = new CanvasTools(canvas1, {container: document.getElementById('tools1')})
            }
          }
        })
      },
      closeCutMark () {
        this.captureDialogVisible = false
      },
      captureDone () {

      }
    }
  }
</script>
