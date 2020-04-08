<template>
  <div class="login_container">
      <van-nav-bar
      @click-left="$router.push('/login')"
  title="用户中心"
  left-arrow
/>
    <div class="title">注册</div>
    <div class="login_main">
      <van-form @submit="onSubmitRegister">
  <van-field
    name="username"
    placeholder="请输入用户名"
    v-model="username"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    name="mobile"
    placeholder="请输入手机号"
    v-model="mobile"
    :rules="[{ required: true, message: '请填写手机号' }]"
  />
  <van-field
    type="name"
    name="name"
    placeholder="请输入姓名"
    v-model="name"
    :rules="[{ required: true, message: '请填写姓名' }]"
  />
  <van-field
    type="password"
    name="password"
    placeholder="请输入密码"
    v-model="password"
    :rules="[{ required: true, message: '请填写密码' }]"
  />

      <div class="login_box">
          <van-button type="info" block class="login" native-type="submit">注册</van-button>
      </div>
      </van-form>
    </div>
      <footer>
          <div>注册即表示同意学习通<span>《隐私政策》</span>和<span>《用户协议》</span></div>
      </footer>
  </div>
</template>

<script>
import { Register } from '@/network/api.js'
export default {
    data() {
        return {
            username: '',
            mobile: '',
            name:'',
            password: ''
        }
    },
    methods: {
        async onSubmitRegister(obj) {
            let res = await Register(obj)
            this.$toast(res.meta.msg)
            if (res.meta.code !== 200) return 
            this.$router.push('/login')
        }
    },
};
</script>

<style lang="scss" scoped>
.login_container {
  color: #646566;
  .title {
    padding: 0 16px;
    padding-top: 50px;
    font-size: 26px;
  }
  .login_main {
      margin-top: 20px;
      .login_box {
          margin: 16px 20px;
          .login {
              border-radius: 5px;
          }
      }
  }
  footer {
      width: 100%;
      position: absolute;
      font-size: 12px;
      bottom: 40px;
      display: flex;
      justify-content: center;
      span {
          color: #09f;
      }
  }
}
</style>