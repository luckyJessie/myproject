import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: r => require.ensure([], () => r(require('../components//home')), 'default')
    },
    {
      path: '/formSubmit',
      name: 'formSubmit',
      component: r => require.ensure([], () => r(require('../components//formSubmit/formSubmit')), 'formSubmit')
    },
    {
      path: '/vueSwiper',
      name: 'vueSwiper',
      component: r => require.ensure([], () => r(require('../components/vue-swiper/vueSwiper')), 'vueSwiper')
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: r => require.ensure([], () => r(require('../components/echarts/echarts')), 'echarts')
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: r => require.ensure([], () => r(require('../components/listPagination/listPagination')), 'pagination')
    },
    {
      path: '/props',
      name: 'props',
      component: r => require.ensure([], () => r(require('../components/props/parent')), 'props')
    },
    {
      path: '/upload',
      name: 'upload',
      component: r => require.ensure([], () => r(require('../components/upload/upload')), 'upload')
    },
    {
      path: '/cropper',
      name: 'cropper',
      component: r => require.ensure([], () => r(require('../components/cropper/cropper')), 'cropper')
    },
    {
      path: '/videoPlayer',
      name: 'videoPlayer',
      component: r => require.ensure([], () => r(require('../components/videoPlayer/index')), 'videoPlayer')
    },
    {
      path: '/shoufengqin',
      name: 'shoufengqin',
      component: r => require.ensure([], () => r(require('../components/shoufengqin')), 'shoufengqin')
    },
    {
      path: '/screenCapture',
      name: 'screenCapture',
      component: r => require.ensure([], () => r(require('../components/screenCapter/index')), 'screenCapture')
    },
    {
      path: '/screenCropper',
      name: 'screenCropper',
      component: r => require.ensure([], () => r(require('../components/screenCapter/index2')), 'cropper')
    },
    {
      path: '/loadMore',
      name: 'loadMore',
      component: r => require.ensure([], () => r(require('../components/loadmore/index')), 'cropper')
    },
    {
      path: '/loadMore2',
      name: 'loadMore2',
      component: r => require.ensure([], () => r(require('../components/scrollLoadMore')), 'loadMore2')
    },
    {
      path: '/md5',
      name: 'md5',
      component: r => require.ensure([], () => r(require('../components/md5/md5.vue')), 'md5')
    },
    {
      path: '/canvasTool',
      name: 'canvasTool',
      component: r => require.ensure([], () => r(require('../components/canvasTools/canvasTools.vue')), 'canvasTool')
    },
    {
      path: '/canvasTool2',
      name: 'canvasTool2',
      component: r => require.ensure([], () => r(require('../components/canvasTools/canvas2.vue')), 'canvasTool')
    },
    {
      path: '*',
      name: 'notFound',
      component: r => require.ensure([], () => r(require('../components/notFound/notFound')), 'notFound')
    }
  ]
})
