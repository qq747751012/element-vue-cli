<template>
    <div class="login-container">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm login-form">
       <h3>系统登录</h3>
      <el-form-item prop="username">
        <el-input v-model="input" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="input" placeholder="密码"></el-input>
      </el-form-item>
     </el-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
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
</style>

