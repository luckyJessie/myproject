<!--校验规则可以自定义和自带校验混用，且props必须制定表单属性 v-model必须绑定表单元素的值-->
<!--数字类型的验证需要在 v-model 处加上 .number 的修饰符，这是 Vue 自身提供的用于将绑定值转化为 number 类型的修饰符。-->
<!--嵌套在 el-form-item 中的 el-form-item 标签宽度默认为零，不会继承 el-form 的 label-width。如果需要可以为其单独设置 label-width 属性。-->
<!--element-ui 时间选择器(type='datetime')可以设置不可点击的的日期，通过设置format="yyyy-MM-dd HH:mm"可忽略秒-->
<!--可以设置form表单验证规则，包括自定义验证规则，提交表单完成记得重置表单，可以清空表单内容。-->
<!--可以设置单选框具有复选框的样式-->
<style lang="stylus">
  box-sizing(arguments)
    -moz-box-sizing arguments
    -webkit-box-sizing arguments
    box-sizing arguments
  border-radius(arguments)
    -moz-border-radius arguments
    -webkit-border-radius arguments
    border-radius arguments
  #formPage
    padding 32px
    .el-form-item.mark
      width 100%
      .el-radio-group
        overflow hidden
        .el-radio:hover
          .el-radio__inner
            display block!important
        .el-radio
          width 146px
          height 82px
          float left
          margin-right 3px
          position relative!important
          cursor pointer
          background #000000
          img
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
          .el-radio__input
            right 5px!important
            top 5px
            border-radius(2px)
            white-space nowrap
            cursor pointer
            outline none
            display inline-block
            line-height 1
            position absolute!important
            vertical-align middle
            .el-radio__inner
              width 14px
              height 14px
              background none
              z-index 99
              border-radius(2px)
              display none
              border 2px solid #e1e1e1!important
            .el-radio__inner::after
              border-radius(2px)!important
              box-sizing content-box
              content ""
              border 2px solid #ffd600!important
              border-left 0!important
              border-top 0!important
              height 8px
              left 3px
              position absolute
              top 0
              transform rotate(45deg) scaleY(0)
              background none!important
              width 4px
              transition transform .15s cubic-bezier(.71,-.46,.88,.6) .05s
              transform-origin center
          .el-radio__input.is-checked .el-radio__inner::after
            border-color #23232b!important
            transform rotate(45deg) scaleY(1)
            border-radius(0)!important
          .el-radio__input.is-checked .el-radio__inner
            background #ffd600!important
            display inline-block
            position relative
            border 1px solid #ffd600!important
            box-sizing(border-box)
            z-index 1
            transition border-color .25s cubic-bezier(.71,-.46,.29,1.46), background-color .25s cubic-bezier(.71,-.46,.29,1.46)
</style>

<template lang="pug">
  el-form(ref="form" :model="form" :rules="rules" label-width="80px" id="formPage")
    el-form-item(label="活动名称" prop="name")
      el-input(v-model="form.name")
    el-form-item(label="年龄" prop="age")
      el-input(v-model.number="form.age")
    el-form-item(label="活动区域" prop="region")
      el-select(v-model="form.region" placeholder="请选择活动区域")
        el-option(label="区域一" value="shanghai")
        el-option(label="区域二" value="beijing")
    el-form-item(label="活动时间" required)
      el-row
        el-col(:span="11")
          el-form-item(prop="date1")
            el-date-picker(type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;")
        el-col(class="line" :span="2")
        el-col(:span="11")
          el-form-item(prop="date2")
            el-time-picker(type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;")
    el-form-item.timePicker(label='定时发布' prop="publish_time")
      el-date-picker(type="datetime" placeholder="选择日期时间" v-model="form.publish_time" :picker-options="pickerOptions1" format="yyyy-MM-dd HH:mm")
    el-form-item(label="即时配送")
      el-switch(on-text="" off-text="" v-model="form.delivery")
    el-form-item(label="活动性质")
      el-checkbox-group(v-model="form.type")
        el-checkbox(label="美食/餐厅线上活动" name="type")
        el-checkbox(label="地推活动" name="type")
        el-checkbox(label="线下主题活动" name="type")
        el-checkbox(label="单纯品牌曝光" name="type")
    el-form-item.mark(label="活动封面")
      el-radio-group(:min="0" :max="1" v-model="sysMarkSrc")
        el-radio(v-for="mark in recentPlay" :label="mark.pic" :key="mark.pic" )
          img(:src="mark.pic")
    el-form-item(label="特殊资源")
      el-radio-group(v-model="form.resource")
        el-radio(label="线上品牌商赞助")
        el-radio(label="线下场地免费")
    el-form-item(label="活动形式")
      el-input(type="textarea" v-model="form.desc")
    el-form-item
      el-button(type="primary" @click="submitForm('form')") 立即创建
      el-button(@click="resetForm('form')") 重置
</template>
<script>
  export default {
    components: {
    },
    data () {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空或0'))
        }
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }
      return {
        sysMarkSrc: '',
        pickerOptions1: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          },
          hasSeconds: false
        },
        recentPlay: [
          {'pic': require('../../img/nature1.jpg')}, {'pic': require('../../img/nature2.jpg')}, {'pic': require('../../img/nature3.jpg')}, {'pic': require('../../img/nature4.jpg')}
        ],
        form: {
          name: '',
          age: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          publish_time: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>
