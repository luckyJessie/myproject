<template lang="pug">
  .swiper
    swiper(:options="swiperOption")
      swiper-slide(v-for="list in recentPlay" :key="list.pic")
        li
          img(:src="list.pic")
      .swiper-pagination(slot="pagination")
      .swiper-button-prev(slot="button-prev")
      .swiper-button-next(slot="button-next")
</template>

<script>
// 参考文档   https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/15-infinite-loop.vue
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      recentPlay: [
        {'pic': require('../../img/nature1.jpg')}, {'pic': require('../../img/nature2.jpg')}, {'pic': require('../../img/nature3.jpg')}, {'pic': require('../../img/nature4.jpg')}
      ],
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        autoplay: 2500,
        slidesPerView: 1,
        centeredSlides: true,
        autoplayDisableOnInteraction: false, // 可解决用户操作后不能autoplay
        loop: true,
        freeMode: true
      }
    }
  }
}
</script>
<style lang="stylus">
  .swiper
      width 100%
      height 300px
      overflow hidden
      .swiper-container,.swiper-wrapper
        width 100%
        height 100%
      .swiper-slide
          width 100%!important
          height 100%
          li
            width 100%
            height 100%
            img
              width 100%
              height 100%
</style>
