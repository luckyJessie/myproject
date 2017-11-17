<template>
  <div class="screenshot">
    <h1>截图</h1>
    <canvas></canvas>
    <button @click="capture"></button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        status: 'init',
        imgsrc: {
          url: null,
          img: null,
          file: null,
          pos: {x: -1, y: -1},
          size: {width: 0, height: 0}
        },
        cursor: 'auto',
        imgdest: null
      }
    },
    methods: {
      capture () {
        if (this.status === 'init') {
          this.canvas = document.getElementsByClassName('canvas-cut')[0]
          var ctx = this.canvas.getContext('2d')
          var imgdest = ctx.getImageData(0, 0, 500, 500)
          this.canvas.width = 500
          this.canvas.height = 500
          this.canvas.style.top = 100 + 'px'
          this.canvas.style.left = 100 + 'px'
          var ctx = this.canvas.getContext('2d')
          ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
          ctx.putImageData(imgdest, 0, 0)
          this.imgdest.url = this.canvas.toDataURL()
        }
      },
      updateArea () {
        var ctx = this.canvas.getContext('2d')
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        ctx.drawImage(this.imgsrc.img,
          this.imgsrc.pos.x,
          this.imgsrc.pos.y,
          this.imgsrc.size.width,
          this.imgsrc.size.height)
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
        ctx.fillRect(this.area.start.x,
          this.area.start.y,
          this.area.end.x - this.area.start.x,
          this.area.end.y - this.area.start.y)
      },
      drawImage (image) {
        var canvasWH = this.canvas.width / this.canvas.height
        var imgWH = image.width / image.height
        var srcX = 0
        var srcY = 0
        var sw = 0
        var sh = 0
        if (canvasWH > imgWH) {   // 判断canvas分辨率和图片分辨率
          sh = this.canvas.height
          sw = sh * imgWH
          srcX = this.canvas.width * 0.5 - sw * 0.5
        } else {
          sw = this.canvas.width
          sh = sw / imgWH
          srcY = this.canvas.height * 0.5 - sh * 0.5
        }
        this.imgsrc.pos.x = srcX
        this.imgsrc.pos.y = srcY
        this.imgsrc.size.width = sw
        this.imgsrc.size.height = sh
        this.updateArea(this)
      }
    }
  }
</script>
