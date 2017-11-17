<template>
  <div class="advise">
    <iscroll-view ref="iscroll" class="scroll-view" :scrollerStyle="{color: 'red'}" :scrollerClass="{scroller: true}" :options="{preventDefault: false}" @scrollStart="log" @pullUp="load" @pullDown="refresh">
      <ul>
        <li v-for="items in loadArr">{{items}}</li>
      </ul>
    </iscroll-view>
  </div>
</template>
<style>
  .scroll-view {
    /* -- Attention: This line is extremely important in chrome 55+! -- */
    touch-action: none;
    /* -- Attention-- */
    overflow-y:scroll;
    width:100%;
    height:100%;
  }
  .scroller {
    background: blue
  }
  .scroller ul{
     margin:0;
  }
  .advise{
    width:300px;
    height:200px;
    position:fixed;
    right:50px;
    bottom:50px;
    background: red;
  }
</style>
<script>
  import Vue from 'vue'
  import IScrollView from 'vue-iscroll-view'
  import IScroll from 'iscroll'
  Vue.use(IScrollView, IScroll)
  export default {
    data () {
      return {
        loadArr: ['wwrwwer', 'wwrwwer', 'rwerwrw', 'rwerwrwe', 'rewrwr', 'rwrewrwer', 'rwerwsdf', 'rwerwrw', 'rwerwrwe', 'rewrwr', 'rwrewrwer', 'rwerwsdf', 'wwrwwer', 'rwerwrw', 'rwerwrwe', 'rewrwr', 'rwrewrwer', 'rwerwsdf']
      }
    },
    components: {
      IScrollView,
      IScroll
    },
    methods: {
      log (iscroll) {
        console.log(iscroll)
      },
      scrollToTop () {
        const iscroll = this.$refs.iscroll
        iscroll.scrollTo(0, 0, 100)
        iscroll.refresh()
      },
      refresh (iscroll) {
        // Refresh current data
      },
      load (iscroll) {
        // Load new data
      }
    }
  }
</script>
