<!--三栏布局-->
<!--element-ui pagination-->
<template lang="pug">
.list 列表
  ul
    li(v-for="items in results.list")
      .left
        img(:src="items.cover")
      .right
        .top
          i.el-icon-share
          i.el-icon-star-off
        .bottom
          el-button(type="primary")
            i.el-icon-delete
            | 删除
          el-button(type="primary")
            i.el-icon-edit
            | 修改
      .info
        h3 {{items.title}}
        p {{items.title}}
  el-pagination(:total="page.total" @current-change="handleChange" :page-size="page.count" layout="prev, pager, next")
</template>
<script>
  export default {
    name: 'view',
    components: {
    },
    data () {
      return {
        results: {
          count: 3,
          list: [
            {scid: 'Wh50nDMCCdpq6PWnz~j~Pd-4he88L3K4EitiYw__', cover: 'http://bsyimg6.cdn.krcom.cn/stream/Wh50nDMCCdpq6PWnz~j~Pd-4he88L3K4EitiYw___4o1i.jpg', title: 'sdsfsdfsfsfs'},
            {scid: 'Wh50nDMCCdpq6PWnz~j~Pd-4he88L3K4EitiYw__', cover: 'http://bsyimg6.cdn.krcom.cn/stream/Wh50nDMCCdpq6PWnz~j~Pd-4he88L3K4EitiYw___4o1i.jpg', title: '测试视频状态改变'},
            {scid: 'snCbniNiZfCRbx5N98s9yV4lb9adaSj0U8OZyQ__', cover: 'http://bsyimg6.cdn.krcom.cn/stream/Wh50nDMCCdpq6PWnz~j~Pd-4he88L3K4EitiYw___4o1i.jpg', title: '测试检测视屏发布状态'},
            {scid: '0U4WTUsXpl~E3GIumzXoTGQ5LB7szp7M3DvT8A__', cover: 'http://bsyimg6.cdn.krcom.cn/stream/Wh50nDMCCdpq6PWnz~j~Pd-4he88L3K4EitiYw___4o1i.jpg', title: '爽肤水是否是否'},
            {scid: 'Zfr6GBIKYxI9T~Rnm~dCZjAferfpn6LOuFKkmw__', cover: 'http://bsyimg6.cdn.krcom.cn/stream/Wh50nDMCCdpq6PWnz~j~Pd-4he88L3K4EitiYw___4o1i.jpg', title: '适当放松放松是'},
            {scid: '2owmBai~uBWHQ16s0fi5mGOy9FluffOvHiQbAg__', cover: 'http://bsyimg6.cdn.krcom.cn/stream/Wh50nDMCCdpq6PWnz~j~Pd-4he88L3K4EitiYw___4o1i.jpg', title: '是发生的发生发生的'}
          ],
          page: 1,
          total: 6
        },
        page: {
          count: 3,
          total: 0,
          currentPage: 1
        }
      }
    },
    created () {
      this.page.currentPage = this.results.page
      this.page.count = this.results.count
      this.page.total = this.results.total
    },
    methods: {
      handleChange (page) {
        this.page.currentPage = page
      }
    }
  }
</script>
<style lang="stylus">
  box-sizing(arguments)
    -moz-box-sizing arguments
    -webkit-box-sizing arguments
    box-sizing arguments
  .list
    >ul
      margin 0
      padding 0
      overflow hidden
      >li:hover
        background #f9f9f9
        .right
          display block
      li
        width 100%
        height 200px
        padding 32px
        box-sizing(border-box)
        .left
          width 136px
          height 136px
          float left
          img
              width 100%
              height 100%
        .info
          width 100%
          height 100%
          padding 0 216px 146px
          box-sizing(border-box)
          text-align left
          h3,p
            margin 0
            padding 0
        .right
          width 206px
          height 136px
          display none
          float right
          .top
            height 36px
            line-height 36px
            i
              display inline-block
              margin 0 10px
              cursor pointer
          .bottom
            height 36px
            margin-top 64px
            color #23232b
            .el-button
              display inline-block
              margin 0 10px
              i
                margin-right 5px
    .el-pagination
      float right
      margin 20px
</style>
