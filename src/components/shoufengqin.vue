<template lang="pug">
  .box
    ul
      li.list_items(v-for="(items, $index) in listArr"  :class="[activeIndex===$index?'open':(hover&&activeIndex!==$index?'close':'')]" :style="{background:'gray url('+ imgPath[$index] +')'}" @mouseenter="hoverFn($index)" @mouseleave='outFn')
</template>
<script>
  export default{
    data () {
      return {
        hover: false,
        activeIndex: -1,
        listArr: [{}, {}, {}, {}, {}],
        imgPath: [require('../img/nature1.jpg'), require('../img/nature2.jpg'), require('../img/nature3.jpg'), require('../img/nature4.jpg'), require('../img/nature5.jpg')]
      }
    },
    computed: {
    },
    methods: {
      hoverFn (index) {
        this.activeIndex = index
        this.hover = true
      },
      outFn () {
        this.activeIndex = -1
        this.hover = false
      }
    }
  }
</script>

<style lang="scss">
  .box{
    width:800px;
    height:100px;
  }
  .box ul{
    width: 100%;
    height:100%
  }
  .box ul li{
    width:160px;
    height:100%;
    float:left;
  }
  .box ul li img{
    width:100%;
  }
  .list_items.open{
    animation: opens 2s;
    -moz-animation: opens 2s;	/* Firefox */
    -webkit-animation: opens 2s;	/* Safari 和 Chrome */
    -o-animation: opens 2s;
    animation-fill-mode:forwards;
  }
  .list_items.close{
    animation: closes 2s;
    -moz-animation: closes 2s;	/* Firefox */
    -webkit-animation: closes 2s;	/* Safari 和 Chrome */
    -o-animation: closes 2s;
    animation-fill-mode:forwards;
  }
  @keyframes opens {
    0%{width: 160px; }
    100%{width:240px;}
  }
  @keyframes closes{
    0%{width:160px;}
    100%{width:140px;}
  }
</style>
