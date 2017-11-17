<template lang="pug">
  #registTemplate
    .registHeader
    .registMain
      .regist(v-if="type==='regist'")
        .mainHeader
          h1 注册秒拍号
          span 您也可以
            a(@click="thirdPlatVisible=true") 使用第三方注册
            | 或者
            a(@click="toLogin") 登录已有账号
        el-form(ref="registForm" :model="registForm" :rules="registRules")
          .telBox
            el-form-item.tel(label="手机号码" prop="phone")
              el-input(v-model="registForm.phone")
            el-form-item.pcode(label="" prop="vertifyCode")
              el-input.vertifyTxt(type='text' v-model.number='registForm.vertifyCode' placeholder='填写验证码')
              el-button.icon.icon-send2(type='primary' v-html='vertifyInfo' @click='getCheckCode' :disabled='checkflag')
          el-form-item.pwd(label="设置密码" prop="passsword")
            el-input(v-model="registForm.passsword")
          button.submit(type="primary") 注册秒拍号
          p.agree 注册即意味着您同意
            router-link(to="/agree") 《秒拍用户协议》
      .login(v-if="type==='login'")
        .mainHeader
          h1 欢迎回来
          span 您也可以
            a(@click="thirdPlatVisible=true") 使用第三方登录
            | 或者
            a(@click="toRegist") 注册新账号
        el-form(ref="loginForm" :model="loginForm" :rules="loginRules")
          el-form-item.logintel(label="手机号码" prop="phone")
            el-input(v-model="loginForm.phone")
          el-form-item.loginpwd(label="密码" prop="passsword")
            el-input(v-model="loginForm.passsword")
            a(@click="toForgetPwd('forgetForm')") 忘记密码？
          button.submit(type="primary") 登录
      .forgetPwd(v-if="type==='forgetPwd'")
        .mainHeader
          h1 重置密码
          span 回想起密码了？返回
            a(@click="toLogin") 继续登录
        el-form(ref="forgetForm" :model="forgetForm" :rules="forgetRules")
          .telBox
            el-form-item.tel(label="手机号码" prop="phone")
              el-input(v-model="forgetForm.phone")
            el-form-item.pcode(label="" prop="vertifyCode")
              el-input.vertifyTxt(type='text' v-model='forgetForm.vertifyCode' placeholder='填写验证码')
              el-button.icon.icon-send2(type='primary' v-html='vertifyInfo' @click='getCheckCode' :disabled='checkflag')
          el-form-item.pwd(label="设置新密码" prop="passsword")
            el-input(v-model="forgetForm.passsword")
          button.submit(type="primary") 确认重置
    el-dialog#thirdPlat(title="" v-model="thirdPlatVisible" size="tiny")
      i.icon.icon-close(@click="thirdPlatVisible=false")
      p {{platText}}
      a.weibo(href='#')
        i.icon.icon-weibo
      a.qq(href='#')
        i.icon.icon-qq
      a.weixin(href='#')
        i.icon.icon-weixin
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'regist',
    data () {
      let checkReg = new RegExp('^[0-9]{6}$')
      let phoneValidator = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入有效的手机号码,不能为空'))
        } else if (!/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/.test(value)) {
          callback(new Error('请输入有效的手机号码'))
        } else {
          callback()
        }
      }
      let checkNumber = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入手机验证码'))
        } else if (!checkReg.test(value)) {
          callback(new Error('验证码格式错误'))
        } else {
          callback()
        }
      }
      return {
        registForm: {
          phone: '',
          passsword: '',
          vertifyCode: ''
        },
        loginForm: {
          phone: '',
          passsword: ''
        },
        forgetForm: {
          phone: '',
          passsword: '',
          vertifyCode: ''
        },
        registRules: {
          phone: [{ type: 'string', required: true, validator: phoneValidator }],
          passsword: [{ type: 'string', message: '请设置账户密码', required: true }],
          vertifyCode: [{ required: true, validator: checkNumber }]
        },
        loginRules: {
          phone: [{ type: 'string', required: true, validator: phoneValidator }],
          passsword: [{ type: 'string', message: '请输入账户密码', required: true }]
        },
        forgetRules: {
          phone: [{ type: 'string', required: true, validator: phoneValidator }],
          passsword: [{ type: 'string', message: '请设置账户密码', required: true }],
          vertifyCode: [{ required: true, validator: checkNumber }]
        },
        type: 'regist',
        thirdPlatVisible: false,
        checkflag: false,
        vertifyCode: '',
        vertifyInfo: '获取验证码',
        checkTotalTime: 60,
        getCode: false
      }
    },
    created () {
    },
    watch: {
    },
    computed: {
      platText () {
        if (this.type === 'login') {
          return '请选择要登录的第三方平台'
        } else if (this.type === 'regist') {
          return '请选择要注册的第三方平台'
        }
      },
      weibo () {
        if (this.data && this.data[this.type]) {
          return this.data[this.type].weibo
        }
        return false
      },
      qq () {
        if (this.data && this.data[this.type]) {
          return this.data[this.type].qq
        }
        return false
      },
      weixin () {
        if (this.data && this.data[this.type]) {
          return this.data[this.type].weixin
        }
        return false
      },
      ...mapState({
        accountInfo: state => state.profits.data,
        accountStatus: state => state.profits.status,
        CodeSms: state => state.profits.sendWithdrawCodeSms.message,
        CodeSmsSatus: state => state.profits.sendWithdrawCodeSms.status,
        withdrawMsg: state => state.profits.withdraw.message,
        withdrawStatus: state => state.profits.withdraw.status
      })
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      toLogin (form) {
        if (this.type === 'regist') {
          this.$refs['registForm'].resetFields()
        } else if (this.type === 'forgetPwd') {
          this.$refs['forgetForm'].resetFields()
        }
        this.type = 'login'
      },
      toRegist () {
        this.type = 'regist'
        this.$refs['loginForm'].resetFields()
      },
      toForgetPwd (form) {
        this.type = 'forgetPwd'
        this.$refs['loginForm'].resetFields()
      },
      getCheckCode: function () {
        let that = this
        if (that.checkflag === true) {
          return false
        }
        that.checkflag = true
        that.checkTotalTime = 60
        that.getCode = true
        that.sendCodeSms().then(() => {
          let timeout = null
          let timer = function () {
            if (that.CodeSmsSatus !== null) {
              clearInterval(timeout)
              let type = that.CodeSmsSatus === 200 ? 'success' : 'error'
              let message = that.CodeSmsSatus === 200 ? '发送成功！' : that.CodeSms
              that.$message({
                type: type,
                message: message
              })
              if (that.CodeSmsSatus !== 200) {
                that.dialogVisible = false
                that.checkflag = false
                that.vertifyCode = ''
                that.getCode = false
                return false
              }
              that.checkTimer = setInterval(() => {
                that.checkTotalTime = that.checkTotalTime - 1
                if (that.checkTotalTime > 0) {
                  that.vertifyInfo = that.checkTotalTime + 's后重新获取'
                } else {
                  that.checkflag = false
                  clearInterval(that.checkTimer)
                  that.vertifyInfo = '获取验证码'
                }
              }, 1000)
            }
          }
          clearTimeout(this.timeout)
          timeout = setInterval(timer, 300)
        }).catch(() => {
          that.checkflag = false
          that.getCode = false
        })
      },
      ...mapActions({
        getAccountInfo: 'profits/getAccountInfo',
        sendCodeSms: 'profits/sendWithdrawCodeSms/sendWithdrawCodeSms',
        withdraw: 'profits/withdraw/withdraw'
      })
    }
  }
</script>
<style lang="stylus">
  border-radius(arguments)
    -moz-border-radius arguments
    -webkit-border-radius arguments
    border-radius arguments
  body
    padding 0
  .wrapper .view
    padding 0
  #registTemplate
    width 100%
    height 100%
    min-height 800px
    padding 0
    position relative
    .registHeader
      width 100%
      height 25%
      position absolute
      top 0
      left 0
      background-image linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02))
      border-bottom 1px solid #e7e7e7
    .registMain
      width 100%
      height 75%
      position absolute
      top 25%
      left 0
      background #fff
      .regist,.login,.forgetPwd
        width 576px
        height auto
        margin auto
        .mainHeader
          height 48px
          line-height 48px
          margin 102px 0 40px
          h1
            font-size 28px
            margin 0
            display inline-block
            margin-right 24px
          span
            display inline-block
            font-size 13px
            a
              color #FFD600
              margin 0 5px
              text-decoration underline
        .el-form-item
          .el-input
            input
              border-color 1px solid rgb(217, 206, 191)
          .el-input input:focus
            border-color #ffd600!important
          .el-input input:focus + .el-input-group__append
            border-color #ffd600!important
        button.submit
          width 200px
          height 40px
          display block
          margin 40px auto 20px
          border none
          font-size 14px
          border-radius(100px)
          background-color #ffd600
          box-shadow 0 4px 4px 0 rgba(255, 214, 0, 0.3)
        p.agree
          display block
          height 20px
          margin 0 auto
          font-size 13px
          line-height 1.54
          text-align center
          color #888888
          a
            color #888888
            text-decoration underline
        .el-form-item.loginpwd
          position relative
          .el-input
            display inline-block
          a
            position absolute
            width 150px
            right -174px
            color #888888
            font-size 13px
        .telBox
          height 72px
          margin-bottom 20px
          clear both
          .el-form-item.tel
            width 276px
            margin-right 24px
            display inline-block
            float left
          .el-form-item.pcode
            width 276px
            float left
            position relative
            height 36px
            margin-top 36px
            .el-button
              width 131px
              margin 0
              padding 0
              height 34px
              font-size 14px
              position absolute
              right 1px
              top 1px
              text-align center
              display block
              border none
              color #23232b!important
              background #fff
              cursor pointer
              box-shadow none!important
              &:before
                margin-right 5px
                color #23232b!important
            .el-button:hover
              color #ffd600!important
              background #fff
              &:before
                color #ffd600!important
            .el-button:disabled
              color #888888!important
              &:before
                color #888888!important
    #thirdPlat
      .el-dialog.el-dialog--tiny
        width 400px
        height 168px
        position relative
      .el-dialog__header
        display none
      i.icon.icon-close
        width 20px
        height 20px
        border-radius(50%)
        background #bababa
        color #23232b
        position absolute
        right -30px
        top 0
        font-size 12px
        text-align center
        line-height 20px
      p
        text-align center
        line-height 28px
        color #23232b
        margin 0
        margin-bottom 20px
      a
        width 40px
        height 40px
        margin-right 16px
        display inline-block
        color #ffffff
        border-radius(20px)
        text-align center
        line-height 40px
      a.weibo
        margin-left 104px
        background-color #ff6c55
        box-shadow 0 4px 4px 0 rgba(255, 108, 85, 0.4)
      a.qq
        background-color #09bb07
        box-shadow 0 4px 4px 0 rgba(9, 187, 7, 0.3)
      a.weixin
        background-color #1aaefd
        box-shadow 0 4px 4px 0 rgba(26, 174, 253, 0.3)
</style>
