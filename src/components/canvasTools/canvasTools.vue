<style lang="stylus">
  border-radius(arguments)
    -moz-border-radius arguments
    -webkit-border-radius arguments
    border-radius arguments
  .feedWrapper
    position fixed
    right 50px
    bottom 50px
    z-index 1000
    .feedBackIcon
      width 56px
      height 56px
      line-height 56px
      text-align center
      background-color #ffffff
      border-radius(50%)
      border 1px solid #ededed
      box-shadow 0 3px 5px 0 rgba(0, 0, 0, 0.04)
      i.icon-message
        color #888888
        font-size 20px
    .feedbackBox
      background #ffffff
      width 656px
      max-height 502px
      overflow-y scroll
      padding 20px
      border-radius(3px)
      box-shadow 0 4px 10px 0 rgba(35, 35, 43, 0.06), 0 30px 48px 0 rgba(0, 0, 0, 0.04)
      border solid 1px #ededed
      .icon-close
        width 30px
        height 30px
        line-height 30px
        text-align center
        position absolute
        bottom -42px
        right 0
        color #888888
        font-size 16px
        border-radius(50%)
        background-color #ffffff
        box-shadow 0 3px 5px 0 rgba(0, 0, 0, 0.04)
        border solid 1px #ededed
      ul.uploadPic
        overflow hidden
        margin 20px 0 0 0
        li
          width 192px
          height 108px
          float left
          margin-right 10px
          margin-bottom 5px
          position relative
          -webkit-backdrop-filter blur(8px)
          backdrop-filter blur(8px)
          background #f9f9f9
          border 1px dashed #d2d2d2
          overflow hidden
          img
            width auto
            height auto
            max-width 100%
            max-height 100%
            position absolute
            left 0
            top 0
            bottom 0
            right 0
            margin auto
          .mask
            width 100%
            height 100%
            position absolute
            left 0
            top 0
            background rgba(0,0,0,0.5)
            display none
            text-align center
            padding-top 20px
            color #ffffff
            font-size 13px
            p
              margin 0
              cursor pointer
          i.icon-delete1
            width 40px
            height 40px
            line-height 40px
            display block
            border solid 1px #bababa
            border-radius(50%)
            cursor pointer
            margin auto
            margin-bottom 10px
            font-size 13px
            text-align center
            &:before
              color #ffffff
          i.icon-delete1:hover
            border-color #ffffff
          label
            position absolute
            left 0
            top 0
            width 100%
            height 100%
            font-size 13px
            color #23232b
            text-align center
            cursor pointer
            display block
            i.icon-upload2
              font-size 40px
              height 46px
              line-height 46px
              color #bababa
              display block
              margin 10px auto
          input
            width 0.1px
            height 0.1px
            position absolute
            left 0
            top 0
            opacity 0
      ul.uploadPic li:not(:last-child):hover
        img
          filter blur(5px)
          -webkit-filter blur(5px)
          -ms-filter blur(5px)
        .mask
          display block
      .upload
        margin 10px 0
        overflow hidden
        height 34px
        line-height 34px
        clear both
        ul
          float left
          margin 0
          li
            display inline-block
            margin-right 15px
            position relative
            color #888888
            font-size 13px
            label
              color #888888
              font-size 13px
            i
              color #bababa
              margin-right 5px
            input
              width 0.1px
              height 0.1px
              position absolute
              left 0
              top 0
              opacity 0
        .commit,.cancel
          float right
          border none!important
        .cancel
          margin-right 10px
      .allFeedbacks
        .quickFeedback
          color #888888
          margin 0
          font-size 13px
        ul.questionType
          li
            height 32px
            line-height 32px
            border-radius 2px
            padding 0 10px
            text-align center
            display inline-block
            margin-right 10px
            margin-bottom 5px
            color #888888
            font-size 13px
            background-color #f3f3f3
            cursor pointer
          li:hover
            color #23232b
        .reFeedback
          h3
            margin-top 137px
            font-size 16px
            text-align center
            i
              background #ffd600
              width 20px
              height 20px
              display inline-block
              margin-right 10px
              color #23232b
              border-radius(50%)
              &:before
                font-size 12px
                font-weight normal
          p
            color #888888
            font-size 14px
            height 24px
            margin 0
            line-height 1.71
            text-align center
            a
              text-decoration underline
              color #888888
      .myFeedbacks
        .el-collapse
          border none
          .el-collapse-item__header
            padding-left 5px
            .el-collapse-item__header__arrow
              line-height 43px
              float right
              color #888888
              &:before
                font-size 1px!important
            .title
              color #23232b
              span
                float right
                color #888888
                margin-right 10px
          .el-collapse-item__content
            padding 10px 0
            ul.uploadedPic
              margin 10px 0 15px 0
              li
                width 92px
                height 68px
                border 1px dashed #d2d2d2
                margin-right 10px
                display inline-block
            .message
              border-radius(3px)
              margin-bottom 20px
              background-color: rgba(38, 38, 38, 0.8)
              position relative
              i.trigle
                width 10px
                height 10px
                border 6px solid transparent
                border-bottom-color  rgba(38, 38, 38, 0.8)
                position absolute
                top -12px
                left 10px
                display block
                font-size 0
              .wrapper
                width 100%
                height 100%
                padding 10px
                overflow hidden
                .title
                  color #888888
                  margin 0
                  i
                    margin-right 5px
                .messageCont
                  color #ffffff
                  margin 0
                  padding 0 20px
                .answer
                  float right
                  color #FFD600
                  text-align right
                  margin-right 20px
        p.more
          margin-top 20px
          height 20px
          line-height 20px
          font-size 13px
          text-align center
          a
            color #888888
  #captureMark
    .el-dialog__header
      display none
    .el-dialog__body
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
  #cutMark
    .el-dialog__header
      display none
    .el-dialog__body
      padding 24px 32px
      color rgb(106, 93, 72)
      font-size 14px
      position relative
      overflow visible!important
    .el-dialog--tiny
      width 640px
      height 540px
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
      height 100%
      .cropper-crop-box:after
        content '请尽量避免在深色区域内出现文字，以便让封面有更好的效果'
        color #fff
        width 100%
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        height 36px
        line-height 36px
        text-align center
        position absolute
        bottom 0
        left 0
        font-size 12px
        background rgba(0,0,0,0.7)
        display none
      .cropper-view-box
        outline 1px solid #ffd600
        outline-color #ffd600
      .cropper-point
        background-color #ffd600
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
<template lang='pug'>
  div#feedback
    div.feedWrapper
      div.feedBackIcon(v-show="unFeedBack" @click='showFeedbackBox')
        i.icon.icon-message
      div.feedbackBox(id='scrollBox' ref='scrollBox' v-show="FeedBacking" v-scroll='scrollFn')
        i.icon.icon-close(@click="closeFeedBackBox")
        el-tabs(v-model="activeTab" @tab-click="handleClick")
          el-tab-pane.allFeedbacks(label="意见反馈" name="allFeedbacks")
            div.preFeedback(v-if="preFeedback")
              p.quickFeedback 快速选择提问
              ul.questionType
                li 无法上传视频
                li 无法上传视频
                li 无法上传视频
                li 无法上传视频
                li 无法上传视频
                li 无法上传视频
                li 无法上传视频
                li 无法上传视频
              el-input.feedbackContent(type="textarea" :rows="3" placeholder="请输入内容" v-model="feedbackContent")
              ul.uploadPic(v-if="uploadPicData.length > 0")
                li(v-for="(cItem, cindex) in uploadPicData")
                  img(:src="cItem")
                  .mask
                    p(@click="deletePic(cindex)")
                      i.icon.icon-delete1
                      | 删除
                li
                  label.id_upload(for="id_pic3")
                    i.icon.icon-upload2
                    span 继续上传图片
                  input(type='file' id='id_pic3' ref='id_pic3' accept='image/png, image/jpg, image/jpeg' :disabled='submitDisabled' @change="changeIdPic" class='hide')
              .upload
                ul
                  li
                    label.id_upload(for="id_pic4")
                      i.icon.icon-upload2
                      | 上传图片
                    input(type='file' id='id_pic4' ref='id_pic4' accept='image/png, image/jpg, image/jpeg' :disabled='submitDisabled' @change="changeIdPic" class='hide')

                  li(@click="capture")
                    i.icon.icon-photo_image
                    | 屏幕截屏
                el-button(type="primary").commit 提交反馈
            div.reFeedback(v-if="reFeedback")
              h3
                i.icon.icon-check
                | 反馈提交成功
              p
                | 我们已经收到了您的反馈，稍后您可在
                a(@click="activeTab='myFeedbacks'")  意见反馈-我的反馈
                | 中查看
              p {{closeTime}}秒后窗口将自动关闭
          el-tab-pane.myFeedbacks(label="我的反馈" name="myFeedbacks")
            el-collapse(v-model="activeNames" @change="handleChange" accordion)
              el-collapse-item(v-for='(feeds, findex) in fdata' :name='findex')
                template(slot="title")
                  .title Consistency
                    span 2017-10-18
                div 与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                ul.uploadedPic
                  li
                    img
                  li
                    img
                  li
                    img
                div.message
                  i.trigle
                  div.wrapper
                    p.title
                      i.icon.icon-headset
                      | 客服回复
                    p.messageCont
                      | 您可以选择别的浏览器，您可以选择别的浏览器您可以选择别的浏览器您可以选择别的浏览器
                    span.answer(@click="showAddMore=true") 追加提问
                div.addmessage(v-show="showAddMore")
                  el-input.feedbackContent(type="textarea" :rows="3" placeholder="请输入内容" v-model="feedbackContent")
                  ul.uploadPic(v-if="uploadPicData.length > 0")
                    li(v-for="(cItem, cindex) in uploadPicData")
                      img(:src="cItem")
                      .mask
                        p(@click="deletePic(cindex)")
                          i.icon.icon-delete1
                          | 删除
                    li
                      label.id_upload(for="id_pic1")
                        i.icon.icon-upload2
                        span 继续上传图片
                      input(type='file' id='id_pic1' ref='id_pic1' accept='image/png, image/jpg, image/jpeg' :disabled='submitDisabled' @change="changeIdPic" class='hide')
                  .upload
                    ul
                      li
                        label.id_upload(for="id_pic2")
                          i.icon.icon-upload2
                          | 上传图片
                        input(type='file' id='id_pic2' ref='id_pic2' accept='image/png, image/jpg, image/jpeg' :disabled='submitDisabled' @change="changeIdPic" class='hide')
                      li(@click="capture")
                        i.icon.icon-photo_image
                        | 屏幕截屏
                    el-button(type="primary").commit(@click="commitAdd") 提交反馈
                    el-button(type="primary").cancel(@click="cancelAdd") 取消
            p.more
              a(v-show="showMore") 加载更多最近3个月的问题反馈 >>
    el-dialog#captureMark(title="屏幕截图" v-model="captureDialogVisible" size="tiny" :before-close='handleClose')
      i.icon.icon-close(@click="closeCutMark")
      h3 截取屏幕图片
      div.imgContainer
        img(:src="capturePic")
      span(slot="footer" class="dialog-footer")
        el-button(@click="closeCutMark") 取消
        el-button(type="primary" @click="captureDone") 完成
    el-dialog#cutMark(title="" v-model="cutMarkVisible" size="tiny" :before-close='handleClose')
      i.icon.icon-close(@click="closeCutMarkDialog")
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
        input(type="file" id="upload2" ref='uploadMyMark' style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="changeIdPic")
        el-button(type="primary" @click="finish2") 完成
</template>
<script>
  //   import $ from 'jquery'
  import VueCropper from 'vue-cropperjs'
  import { mapActions } from 'vuex'
  import html2canvas from 'html2canvas'
  export default {
    components: {
      VueCropper
    },
    data () {
      return {
        unFeedBack: true,
        FeedBacking: false,
        capturing: false,
        activeTab: 'allFeedbacks',
        activeNames: '',
        feedbackContent: '',
        closeTime: 60,
        reFeedback: false,
        preFeedback: true,
        submitDisabled: false,
        showAddMore: false,
        position: {scrollTop: 0, scrollLeft: 0},
        showMore: false,
        idPicSrc: '',
        uploadPicData: [],
        fdata: ['', '', '', '', '', '', '', '', '', ''],
        capturePic: '',
        cutPic: '',
        captureDialogVisible: false,
        cutMarkVisible: false,
        markOption: {
          img: '',
          dragMode: 'crop',
          minheight: 363,
          minwidth: 576,
          background: false,
          viewMode: 2,
          aspectRatio: 16 / 9,
          imgStyle: { 'width': '640px', 'height': '360px' },
          cropArea: 0.9,
          autoCrop: true,
          minCropBoxWidth: 30,
          minCropBoxHeight: 30
        }
      }
    },
    beforeDestroy () {
    },
    created () {
    },
    computed: {
//            showMore: function () {
//                if (this.FeedBacking) {
//                    if (this.$refs.scrollBox.scrollHeight - this.$refs.scrollBox.clientHeight - this.position.scrollTop < 1) {
//                        return true
//                    } else {
//                        return false
//                    }
//                }
//            }
    },
    watch: {
    },
    methods: {
      handleClose () {
      },
      closeCutMark () {
        this.capturePic = ''
        this.captureDialogVisible = false
        this.FeedBacking = true
      },
      closeCutMarkDialog () {
        this.clearFile()
        this.cutPic = ''
        this.cutMarkVisible = false
      },
      clearFile () {
        if (this.$refs.id_pic1 !== undefined) {
          this.$refs.id_pic1.value = ''
        }
        if (this.$refs.uploadMyMark !== undefined) {
          this.$refs.uploadMyMark.value = ''
        }
        if (this.$refs.id_pic2 !== undefined) {
          this.$refs.id_pic2.value = ''
        }
        if (this.$refs.id_pic3 !== undefined) {
          this.$refs.id_pic3.value = ''
        }
        if (this.$refs.id_pic4 !== undefined) {
          this.$refs.id_pic4.value = ''
        }
      },
      scrollFn (e, position) {
        this.position = position
        if (this.$refs.scrollBox.scrollHeight - this.$refs.scrollBox.clientHeight - this.position.scrollTop < 1) {
          this.showMore = true
        } else {
          this.showMore = false
        }
      },
      showFeedbackBox () {
        this.unFeedBack = false
        this.FeedBacking = true
      },
      handleClick () {
      },
      handleChange () {
        this.showMore = false
        this.showAddMore = false
      },
      closeFeedBackBox () {
        this.unFeedBack = true
        this.FeedBacking = false
      },
      clearIdFile () {
        if (this.$refs.id_input1 !== undefined) {
          this.$refs.id_input1.value = ''
        }
        if (this.$refs.id_input2 !== undefined) {
          this.$refs.id_input2.value = ''
        }
      },
      changeIdPic (e) {
        let that = this
        var file = e.target.files[0]
        if (!e.target.value) {
          return false
        }
        if (!/\.(jpg|png|JPG|PNG)$/.test(e.target.value)) {
          this.$message('图片类型必须是.jpg、.png中的一种')
          return false
        }
        if (file.size > 2 * 1024 * 1024) {
          this.clearIdFile()
          this.$message('暂时仅支持大小在2MB内的图片文件上传，请尝试压缩后重新上传')
          return false
        }
        this.submitDisabled = true
        let formData = new FormData()
        formData.append('file', file)
        this.uploadimg(formData).then((data) => {
          if (data.code === 200) {
            if (this.$refs.cropper) {
              this.$refs.cropper.replace(data.data)
            }
            that.submitDisabled = false
            that.markOption.img = data.data
            that.cutMarkVisible = true
            that.clearFile()
          } else {
            that.submitDisabled = false
            that.$message({
              type: 'error',
              message: '图片上传到服务器失败，请重新选择一次图片'
            })
            that.clearFile()
            return false
          }
        })
      },
      captureDone () {
        let that = this
        that.uploadPicData.unshift(that.capturePic)
        that.captureDialogVisible = false
        that.FeedBacking = true
        that.capturing = false
      },
      finish2 () {
        let that = this
        that.cutPic = that.$refs.cropper.getCroppedCanvas().toDataURL()
        console.log(that.cutPic)
        that.uploadPicData.unshift(that.cutPic)
        that.closeCutMarkDialog()
      },
      capture () {
        this.FeedBacking = false
        this.capturing = true
        let that = this
        html2canvas(document.body, {
          onrendered: function (canvas) {
            var copyDomCanvas = canvas
            // document.body.appendChild(copyDomCanvas)
            that.capturePic = copyDomCanvas.toDataURL()
            that.captureDialogVisible = true
          }
        })
      },
      deletePic (index) {
        this.uploadPicData.splice(index, 1)
      },
      cancelAdd () {
        this.showAddMore = false
      },
      commitAdd () {
        this.showAddMore = false
      },
      ...mapActions({
        uploadimg: 'apply/uploadimg/uploadimg'
      })
    }
  }
</script>
