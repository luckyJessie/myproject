<style lang="stylus">
  box-sizing(arguments)
    -moz-box-sizing arguments
    -webkit-box-sizing arguments
    box-sizing arguments
  border-radius(arguments)
    -moz-border-radius arguments
    -webkit-border-radius arguments
    border-radius arguments
  .el-message-box
    .el-message-box__headerbtn
      position absolute
      top 19px
      right 20px
      color #999
      cursor pointer
      line-height 20px
      text-align center
      background none
      .el-message-box__close
        background none
        left 0
        top 0
    .el-button
      border none!important
  .cropper-wrap-box
    bottom 5px!important
  #upload
    .el-upload-dragger
      width 640px
      height 360px
      border-radius(2px)
      display block
      margin 48px auto 54px
      position relative
      img
        width 155px
        height 136px
        position absolute
        top 60px
        left 0
        right 0
        margin auto
        display block
      #uploadVideo
        width 252px
        height 40px
        font-size 14px
        line-height 40px
        text-align center
        color #23232b!important
        position absolute
        top 220px
        left 0
        right 0
        margin auto
        display block
        border-radius(100px)
        border none
        background-color #ffd600
        cursor pointer
        box-shadow 0 4px 4px 0 rgba(255, 214, 0, 0.3)
      #uploadVideo:hover
        color #23232b
      #file
        width 0.1px
        height 0.1px
        position absolute
        top 220px
        left 0
        right 0
        margin auto
        opacity 0
        border-radius(100px)
      p
        text-align center
        position absolute
        top 276px
        left 0
        right 0
        margin auto
        font-size 14px
        line-height 1.71
        color #888888
  #uploadStatus
    width 272px
    height 153px
    border-radius(2px)
    background-color #f9f9f9
    border dashed 1px #d2d2d2
    position relative
    .video-loading.cutBox
      background #000000
      overflow hidden
    .video-loading.cutBox:hover
      .mask
        display block
      img
        filter blur(5px)
        -webkit-filter blur(5px)
        -ms-filter blur(5px)
    .video-loading
      width 272px
      height 153px
      vertical-align:middle
      text-align: center
      position absolute
      top -1px
      left -1px
      border-radius(2px)
      b
        font-weight normal
      i
        display block
      .percent
        margin 22px 0 6px
        height 39px
        line-height 1
        text-align center
        font-size 32px
        .i-per
          height 18px
          line-height 1
          font-size 14px
      .upload-info
        height 18px
        margin-top 5px
        font-size 12px
        color #888
        line-height 1.5
      img.curMark
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
      .mask
        width 100%
        height 100%
        position absolute
        top 0
        left 0
        background rgba(0,0,0,0.7)
        display none
        a
          display block
          color #fff
          i
            height 36px
            width 36px
            line-height 36px
            border-radius(50%)
            border 1px solid #bababa
            text-align center
            font-size 18px
            margin-top 50px
            color #fff
          p
            margin 0
            height 20px
            line-height 20px
            margin-top 10px
      .progress
        width 224px
        height 3px
        margin 5px auto 14px
        background-color #ededed
        position relative
        .done
          height 3px
          position absolute
          left 0
          top 0
          background-color #ffd600
      p.oparate
        a
          display inline-block
          color #888888
          font-size 13px
        a:nth-of-type(1)
          margin-right 15px
          &:before
            margin-right 5px
      .icon-close-circle,.icon-play
        display block
        font-size 13px
        color #888
        cursor pointer
        &::before
          margin-right 5px
      .icon-warning
      .icon-loading
        color #ff7b4d
        font-size 40px
        margin 31px auto 10px
      .icon-loading
        width 40px
        color #ffd600
        animation: rotating 1s linear infinite
      .reUpfiles
        line-height 19px
        font-size 13px
        color #888
      .icon-restart
        display inline-block
        font-size 12px
        color #888888
      .uploadSuccess
        font-size 12px
        line-height 20px
        height 20px
        text-align center
        display block
        color #888888
        margin-top 25px
        i
          font-size 13px
          line-height 20px
          margin-right 5px
          height 20px
          display inline-block
      .uploadMymark
        width 126px
        height 32px
        display block
        margin 10px auto
        font-size 12px
        border none
        cursor pointer
        text-align center!important
        position relative
        label
          width 126px
          height 32px
          display block
          border-radius(2px)
          line-height 32px
          cursor pointer
          box-shadow 0 4px 4px 0 rgba(255, 214, 0, 0.3)
          color #23232b!important
          background-color #ffd600
          position absolute
          left 0
          top 0
          z-index 99
        input
          width 0.1px
          height 0.1px
          position absolute
          left 0
          top 0
          bottom 0
          right 0
          margin auto
          opacity 0
        input:disabled + label
          background #f3f3f3
          border 1px solid #e1e1e1!important
          box-shadow none!important
          cursor not-allowed
          color #888888!important
      .el-button
        width 126px
        height 32px
        display block
        margin 10px auto
        font-size 12px
        border-radius(2px)
        border none
        color #23232b!important
        background-color #ffd600
        box-shadow 0 4px 4px 0 rgba(255, 214, 0, 0.3)
        cursor pointer
        text-align center!important
        position relative
        &:hover
          color #23232b!important
        i
          display inline-block
      .el-button:disabled
        background #f3f3f3
        border 1px solid #e1e1e1!important
        box-shadow none!important
        cursor not-allowed
        span
          color #888888
</style>
<template lang="pug">
  .upload
    #upload
      vue-file-upload(
        url="https://upload.qbox.me"
        ref="vueFileUploader"
        v-bind:events = 'cbEvents'
        v-bind:filters = 'filters'
        v-bind:disabled = 'disabled'
        v-bind:disable = 'disable'
        v-bind:request-options = 'reqopts'
        v-on:onAdd = 'onAddItem')
    #uploadStatus(v-if="files")
      .video-loading.uploading(v-if="files.isUploading || files.isStopped")
        p.percent
          | {{files.progress.percent}}
          b.i-per %
        p.upload-info(v-if="files.isUploading === true") 上传速度 <b>{{files.progress.speed}}</b>，剩余<b>{{files.progress.stTime}}</b>秒
        p.upload-info(v-if="files.isUploading === false") 上传暂时中断
        p.progress
          i.done(v-bind:style="{ width:files.progress.percent + '%' }")
        p.oparate
          a.icon.icon-pause(v-if="files.isUploading === true" @click='cancelItem(files)') 暂停上传
          a.icon.icon-play(v-if="files.isUploading === false" @click='uploadItem(files)') 继续上传
          a.icon.icon-close-circle(@click='removeItem(files)') 取消上传
      .video-loading.error(v-if="files.isError===true")
        i.icon.icon-warning
        a.reUpfiles(@click="uploadItem(files)")
          i.icon.icon-restart
          | 上传失败，点此重新上传
      .video-loading.success(v-if="files.isSuccess && form.hideCutMark")
        span.uploadSuccess(v-if="!form.showSysMark")
          i.el-icon-loading
          | 正在转码，完成后可选取缩略图
        span.uploadSuccess(v-if="form.showSysMark")
          i.icon.icon-check
          | 上传完成
        .uploadMymark
          input(type="file" id='uploadMyMark' ref='uploadMyMark' style="position:absolute; " accept="image/png, image/jpeg, image/gif, image/jpg" @change="setImage" :disabled='!form.uploadComplete')
          label(for="uploadMyMark") 上传自定义封面
        el-button(@click="uploadSysMark" :disabled='!form.showSysMark') 选择视频缩略图
      .video-loading.cutBox(v-if="files.isSuccess && !form.hideCutMark")
        img.curMark(:src="form.cutMarkSrc" alt="")
        div.mask
          a(@click="uploadMark")
            i.icon.icon-restart
            p 更换封面
</template>
<script>
  import VueFileUpload from './vue-file-upload2'
  import { MessageBox } from 'element-ui'

  export default {
    components: {
      VueFileUpload
    },
    data () {
      return {
        files: {},
        reqopts: {
          formData: {},
          responseType: 'json',
          withCredentials: false
        },
        cbEvents: {
          onCompleteUpload: (file, response, status, header) => {
            if (file.progress.percent === 100 && file.isSuccess === true) {
              console.log(file)
            }
          },
          onAddFileSuccess: (file) => {
          }
        },
        filters: [
          {
            name: 'imageFilter',
            fn (file) {
              if ((file.size / 1000000) > 2 * 1024) {
                MessageBox.alert('暂时仅支持大小在1G内的文件素材上传，请尝试压缩后重新上传', '温馨提示', {
                  confirmButtonText: '知道啦'
                })
                return false
              }
              var type = file.name.slice(file.name.lastIndexOf('.') + 1).toLowerCase()
              if (type.indexOf('avi') === -1 && type.indexOf('flv') === -1 && type.indexOf('mov') === -1 && type.indexOf('3gp') === -1 && type.indexOf('mp4') === -1) {
                MessageBox.alert('暂不支持此种视频格式上传，请重新选择', '温馨提示', {
                  confirmButtonText: '知道啦'
                })
                return false
              } else {
                return true
              }
            }
          }
        ],
        disabled: false,
        disable: false
      }
    },
    methods: {
      onAddItem (files) {
        let that = this
        that.disabled = true
        that.disable = true
      }
    }
  }
</script>
