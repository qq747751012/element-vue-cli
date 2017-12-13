<template>
    <div class="login-container">
      <el-form status-icon :model="ruleForm"  label-width="100px" ref="ruleForm" :rules="rules1" class="demo-ruleForm login-form">
       <h3>系统登录</h3>
      <el-form-item prop="username">
        <span class="svg-container">
          <icon-svg icon-class="people" />
        </span>
        <el-input v-model="ruleForm.username" type="text" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <icon-svg icon-class="attention_light" />
        </span>
        <el-input v-model="ruleForm.password" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <el-button type="primary" style="width:100%;margin-bottom:30px;" @click="submitForm('ruleForm')">登录</el-button>
     </el-form>
    </div>
</template>

<script>

export default {
  data() {
    return {
      ruleForm: {
        username: 'admin',
        password: '123456',
        loading: false
      },
      rules1: {
        username: [
          { required: true, message: '请输入用户名' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          this.$store.dispatch('LoginByUsername', this.ruleForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
                  // this.showDialog = true
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style type="stylesheet/scss" lang="scss">
  $bg: #2d3a4b;
  .login-container{
    width: 100%;
    height:100%;
    background: $bg;
    height: 100vh;
    position: relative;
  }
  .login-form{
    width: 330px;
    padding: 35px 35px 15px 35px;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: 120px auto;
  }
  .login-form h3{
    text-align: center;
    color: #fff;
    margin-bottom: 30px;
    font-size:26px;
  }
  .login-container .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
}
.login-container .svg-container {
    padding: 6px 0px 6px 0px;
    color: #889aa4;
    vertical-align: middle;
    width: 29px;
    display: inline-block;
}
.login-container .el-input{
  width: 85%;
}
.login-container input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 0px;
    color: #eee;
    height: 47px;
}
.login-container input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;//屏蔽自动填充表单变成黄色
    -webkit-text-fill-color: #fff !important;
}
.login-form .el-form-item__content{
  margin-left:20px !important;
}
.thirdparty-button{
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
</style>

