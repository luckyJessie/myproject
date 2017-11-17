<style lang="stylus">
  box-sizing(arguments)
    -moz-box-sizing arguments
    -webkit-box-sizing arguments
    box-sizing arguments
  border-radius(arguments)
    -moz-border-radius arguments
    -webkit-border-radius arguments
    border-radius arguments
  .uploadMymark
    width 200px
    height 40px
    line-height 40px
    margin 50px auto
    input
      width 0.1px
      height 0.1px
      margin 0 auto
      opacity 0
    label
      display block
      border-radius(40px)
      background #ffd600
  .cutBox:hover
    .mask
      display block
    img
      filter blur(5px)
      -webkit-filter blur(5px)
      -ms-filter blur(5px)
  .cutBox
    width 200px
    height 200px
    border 1px solid #ededed
    border-radius(2px)
    margin auto
    position relative
    overflow hidden
    img
      width auto
      height auto
      max-width 100%
      max-height 100%
      margin auto
    .mask
      display none
      width 100%
      height 100%
      position absolute
      left 0
      top 0
      background rgba(0,0,0,0.7)
      color #ffffff
      a
        display block
        input
          width 0.1px
          height 0.1px
          margin 0 auto
          opacity 0
        label
          width 70px
          margin 0 auto
          display block
          i
            display block
            margin 70px auto 10px
  #uploadMark,#cutMark
    .el-dialog--small
      width 640px
      height 540px
    .el-dialog__header
      display none
    .el-icon-circle-cross
      color #e1e1e1
      position absolute
      right -36px
      top 0
      font-size 20px
      cursor pointer
  #uploadMark
    h3
      text-align left
    input
      width 0.1px
      height 0.1px
      margin 0 auto
      opacity 0
    label
      width 200px
      height 40px
      line-height 40px
      margin 20px auto
      display block
      border-radius(40px)
      background #ffd600
  #cutMark
    .dialog-footer
      input
        width 0.1px
        height 0.1px
        margin 0 auto
        opacity 0
      label
        display inline-block
        line-height 1
        white-space nowrap
        cursor pointer
        background #fff
        padding 10px 15px
        border 1px solid rgb(217, 215, 191)
        border-radius(4px)
        margin-right 10px
</style>
<template lang="pug">
  div
    .uploadMymark
      input(type="file" id='uploadMyMark2' ref='uploadMyMark2' style="position:absolute; " accept="image/png, image/jpeg, image/gif, image/jpg" @change="setImage")
      label(for="uploadMyMark2") 上传封面
    .cutBox(v-if="showCutMark")
      img.curMark(:src="cutMarkSrc" alt="")
      div.mask
        a
          input(type="file" id='uploadMyMark3' ref='uploadMyMark3' style="position:absolute; " accept="image/png, image/jpeg, image/gif, image/jpg" @change="setImage")
          label(for="uploadMyMark3")
            i.el-icon-edit
            | 更换封面
    el-dialog#cutMark(title="" v-model="cutMarkVisible" :before-close='handleClose')
      i.el-icon-circle-cross(@click="closeCutMark")
      h3 裁剪封面
      div.imgContainer
        VueCropper(
        ref = "cropper"
        guides = false
        drag-mode = "crop"
        background = true
        rotatable = true
        alt="Source Image"
          :img-style="markOption.imgStyle"
            :min-container-width = "markOption.minwidth"
            :min-container-height = "markOption.minheight"
            :auto-crop-area = "markOption.cropArea"
            :view-mode = "markOption.viewMode"
            :dragMode="markOption.dragMode"
            :background="markOption.background"
            :aspectRatio="markOption.aspectRatio"
            :src='markOption.img'
            :autoCrop="markOption.autoCrop"
            :minCropBoxWidth="markOption.minCropBoxWidth"
            :minCropBoxheight="markOption.minCropBoxheight")
      span(slot="footer" class="dialog-footer")
        label(for="upload2") 重新上传
        input(type="file" id="upload2" ref='uploadMyMark1' style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="setImage")
        el-button(type="primary" @click="finish2") 完成
</template>
<script>
  import VueCropper from 'vue-cropperjs'
  export default {
    components: {
      VueCropper
    },
    data () {
      return {
        dialogVisible: false,
        cutMarkVisible: false,
        showCutMark: false,
        cutMarkSrc: '',
        markOption: {
          img: '',
          dragMode: 'crop',
          minheight: 363,
          minwidth: 576,
          background: false,
          viewMode: 2,
          aspectRatio: 1,
          imgStyle: { 'width': '640px', 'height': '360px' },
          cropArea: 0.9,
          autoCrop: true,
          minCropBoxWidth: 30,
          minCropBoxHeight: 30
        }
      }
    },
    methods: {
      setImage (e) {
        var file = e.target.files[0]
        let that = this
        if (!e.target.value) {
          return false
        }
        if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
          this.$message('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
          return false
        }
        if (file.size > 5242880) {
          this.$message('设置封面图大小不超过5M')
          this.clearFile()
          return false
        }
        if (typeof FileReader === 'function') {
          var reader = new FileReader()
          reader.onload = (event) => {
            that.markOption.img = event.target.result
            that.cutMarkVisible = true
            that.dialogVisible = false
            if (this.$refs.cropper) {
              this.$refs.cropper.replace(event.target.result)
            }
          }
          reader.readAsDataURL(file)
          that.clearFile()
        } else {
          alert('Sorry, FileReader API not supported')
          that.clearFile()
        }
      },
      finish2 (type) {
        this.cutMarkSrc = this.$refs.cropper.getCroppedCanvas().toDataURL()
//        this.$refs.cropper.getCropBoxData().width
//        this.$refs.cropper.getCropBoxData().height
        this.cutMarkVisible = false
        this.showCutMark = true
        this.clearFile()
      },
      closeCutMark () {
        this.clearFile()
        this.cutMarkVisible = false
        this.dialogVisible = false
      },
      clearFile () {
        if (this.$refs.uploadMyMark1) {
          this.$refs.uploadMyMark1.value = ''
        }
        if (this.$refs.uploadMyMark2) {
          this.$refs.uploadMyMark2.value = ''
        }
        if (this.$refs.uploadMyMark3) {
          this.$refs.uploadMyMark3.value = ''
        }
      },
      handleClose () {
      }
    }
  }
</script>
