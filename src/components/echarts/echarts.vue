<!--参考文档： https://github.com/xlsdg/vue-echarts-v3-->
<!--echarts option参考文档： http://echarts.baidu.com/option.html#title-->
<template lang="pug">
  .echarts
    IEcharts(:option="bar")
</template>
<script>
  let echarts = require('echarts')
  import IEcharts from 'vue-echarts-v3/src/full.vue'
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/component/title'
  export default {
    name: 'view',
    components: {
      IEcharts
    },
    data: () => ({
      bar: {
        title: {
          textAlign: 'left',
          text: '大数据量面积图'
        },
        toolbox: {  // 显示工具栏，缩放，还原，下载
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {},
            magicType: {  // 切换不同的类型
              type: ['line', 'bar', 'stack', 'tiled']
            }
          }
        },
//        grid: {
//          show: false
//        },
        xAxis: {
          type: 'category',
          axisLine: {   // 坐标轴的样式
            show: true,
            lineStyle: {
              color: '#333',
              width: 1,
              type: 'solid',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 0
            }
          },
          splitLine: {    // 分割线的样式
            show: true,
            lineStyle: {
              color: ['#ccc'],
              width: 1,
              type: 'solid',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 0
            }
          },
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value',
          axisLine: {   // 坐标轴的样式
            show: true,
            lineStyle: {
              color: '#333',
              width: 1,
              type: 'solid',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 0
            }
          },
          splitLine: {  // 分割线的样式
            show: false,
            lineStyle: {
              color: ['#ccc'],
              width: 1,
              type: 'solid',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 0
            }
          },
          boundaryGap: [0, '100%']
        },
//        dataZoom: [{   // 缩放
//          type: 'inside',
//          start: 0,
//          end: 10
//        }, {
//          start: 0,
//          end: 100,
//          handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
//          handleSize: '80%',
//          handleStyle: {
//            color: '#fff',
//            shadowBlur: 3,
//            shadowColor: 'rgba(0, 0, 0, 0.6)',
//            shadowOffsetX: 2,
//            shadowOffsetY: 2
//          }
//        }],
//        axisPointer: {  // 每条记录提示信息hover时显示横竖线
//          show: true,
//          type: 'line',
//          shadowStyle: {
//            color: 'rgba(0, 0, 0, 0.03)'
//          }
//        },
        tooltip: {  // 鼠标滑过显示该处信息
          show: true,
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%']
          },
          axisPointer: {  // 坐标轴指示器配置项
            show: false,
            type: 'line',
            axis: 'x',    // 哪个 坐标轴
            snap: true,
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'red' // 0% 处的颜色
                }, {
                  offset: 1, color: 'blue' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            }
          },
          backgroundColor: 'rgba(255, 214, 0, 0.8)'  // 提示悬浮框的颜色
        },
        series: [
          {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            symbol: 'emptyCircle',  // 拐点处的标志
            showSymbol: true,
            showAllSymbol: true,
            hoverAnimation: true,
            legendHoverLink: true,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(255, 214, 0, 0.8)'
                }, {
                  offset: 1,
                  color: 'rgba(255, 214, 0, 0.1)'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(255, 214, 0, 0.8)'
                }, {
                  offset: 1,
                  color: 'rgba(255, 214, 0, 0.1)'
                }], false)
              }
            },
            data: [
              3.4, 4.5, 15, 43, 23, 32, 26
            ]
          }
        ]
      }
    }),
    methods: {
    }
  }
</script>
<style lang="stylus">
  .echarts
    width: 400px
    height: 400px
</style>
