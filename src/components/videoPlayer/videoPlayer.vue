<!--引入js文件，要使它不进行eslint规则检测可在代码开头加上/* eslint-disable */注释即可-->
<template lang="pug">
  div(class="video_section" v-if="videoSrc")
    div(v-if="isSupportFullscreen" class="no-support-fullscreen") 您的浏览器不支持全屏幕
    div(class="vidoe-poster" @click="startVideo" :class="{ isHide: hidePoster }" :style="{ backgroundImage: 'url(' + videoPoster + ')' }")
    div.videoBox
      video(id="video" name="media" @loadstart="loadstart" @progress="progress" @canplay="canplay")
        source(:src="videoSrc" :type="videoType")
      div.playVideo
        i.iconfont.icon-play
        p 播放
      div.pauseVideo
        i.iconfont.icon-pause
        p 暂停
      div.replayVideo
        i.iconfont.icon-restart
    div(class="video-bar" v-if="isShowPlaying")
      div(class="video-play" @click="play")
        i(class="iconfont icon-play")
      div(class="video-pause" @click="pause")
        i(class="iconfont icon-pause")
      div(class="video-progress")
        span.reload
        span.preload
      div(class="video-volume" @click="muted")
        i(class="iconfont icon-volumeOn")
      div(class="video-fullscreen" v-if="!isFullScreen" @click="openFullscreen")
        i(class="iconfont icon-fullscreen")
      div(class="video-unfullscreen" v-if="isFullScreen" @click="closeFullscreen")
        i(class="iconfont icon-unfullscreen")

</template>

<script>
  (function () {
    const fullScreenApi = {
      supportsFullScreen: false,
      isFullScreen () { return false },
      requestFullScreen () {},
      cancelFullScreen () {},
      fullScreenEventName: '',
      prefix: ''
    }
    const browserPrefixes = 'webkit moz o ms khtml'.split(' ')

    // check for native support
    if (typeof document.cancelFullScreen !== 'undefined') {
      fullScreenApi.supportsFullScreen = true
    } else {
      // check for fullscreen support by vendor prefix
      for (let i = 0, il = browserPrefixes.length; i < il; i += 1) {
        fullScreenApi.prefix = browserPrefixes[i]
        if (typeof document[`${fullScreenApi.prefix}CancelFullScreen`] !== 'undefined') {
          fullScreenApi.supportsFullScreen = true
          break
        }
      }
    }

    // update methods to do something useful
    if (fullScreenApi.supportsFullScreen) {
      fullScreenApi.fullScreenEventName = `${fullScreenApi.prefix}fullscreenchange`
      fullScreenApi.isFullScreen = () => {
        switch (fullScreenApi.prefix) {
          case '':
            return document.fullScreen
          case 'webkit':
            return document.webkitIsFullScreen
          default:
            return document[`${fullScreenApi.prefix}FullScreen`]
        }
      }
      fullScreenApi.requestFullScreen = el => ((fullScreenApi.prefix === '') ? el.requestFullScreen() : el[`${fullScreenApi.prefix}RequestFullScreen`]())
      fullScreenApi.cancelFullScreen = () => ((fullScreenApi.prefix === '') ? document.cancelFullScreen() : document[`${fullScreenApi.prefix}CancelFullScreen`]())
    }

    // export api
    window.fullScreenApi = fullScreenApi
  })()
  export default {
    name: 'videoplayer',
    data () {
      return {
        $video: '',
        isSupportFullscreen: false,
        isFullScreen: false,
        isShowPlaying: false,
        hidePoster: false,
        videoPoster: require('../../img/nature1.jpg'),
        videoSrc: require('../../img/video.mp4'),
        videoType: 'video/mp4',
        fullScreenApi: window.fullScreenApi
      }
    },
    mounted () {
      this.initVideo()
      this.$el.addEventListener(this.fullScreenApi.fullScreenEventName, () => {
        if (this.fullScreenApi.isFullScreen()) {
          this.$el.classList.add('fullscreen')
        } else {
          this.$el.classList.remove('fullscreen')
        }
      })
    },
    methods: {
      initVideo () {
        this.$video = this.$el.querySelector('#video')
      },
      startVideo () {
        // 影片開始：
        // 影片非靜音狀態
        // 影片封面隱藏
        this.play()
        this.unmuted()
        this.hidePoster = true
      },
      muted () {
        this.$video.muted = !this.$video.muted
      },
      unmuted () {
        this.$video.muted = false
      },
      play () {
        this.isShowPlaying = true
        this.$video.play()
      },
      pause () {
        this.isShowPlaying = false
        this.$video.pause()
      },
      load () {
        this.$video.load()
        this.hidePoster = false
      },
      openFullscreen () {
        this.isFullScreen = true
        this.fullScreenApi.requestFullScreen(this.$el)
        if (this.fullScreenApi.supportsFullScreen === false) {
          this.isSupportFullscreen = true
        }
      },
      closeFullscreen () {
        this.isFullScreen = false
        this.fullScreenApi.cancelFullScreen()
      },
      loadstart () {
        // console.log('loadstart');
      },
      progress () {
        // console.log('progress');
      },
      canplay () {
        // console.log('canplay');
      }
    }
  }
</script>

<style lang="stylus">
  // 16:9
  .video_section
    position relative
    width 640px
    height 360px
    video
      width 100%
      height 100%
      /*background-color #000000*/
      &.fullscreen
        width 100%
        height 100%
    .no-support-fullscreen
      position absolute
      top 15px
      right 15px
      display flex
      justify-content center
      align-items center
      padding 5px
      background-color red
      color #ffffff
      font-size 13px
      border-radius 5px
      cursor pointer
  .vidoe-poster
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background-size cover
    cursor pointer
    z-index 9
    &.isHide
      display none
  .video-bar
    position absolute
    left 0
    right 0
    bottom 0
    z-index 10
    background rgba(0,0,0,0.5)
    .video-play,
    .video-pause,
    .video-volume,
    .video-fullscreen,
    .video-unfullscreen
      float left
      width 22px
      height 22px
      svg
        width 100%
        height 100%

</style>
