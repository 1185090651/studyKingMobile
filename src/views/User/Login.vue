<template>
  <div class="login_container">
      <van-nav-bar
      @click-left="$router.push('/index/profile')"
  title="用户中心"
  left-arrow
/>
    <div class="title">登录</div>
    <div class="login_main">
      <van-form @submit="onSubmitLogin">
  <van-field
    name="username"
    placeholder="请输入用户名"
    v-model="username"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    type="password"
    name="password"
    placeholder="请输入密码"
    v-model="password"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
      <div class="login_box">
          <van-button type="info" block class="login" native-type="submit">登录</van-button>
      </div>
      </van-form>
      <div class="other">
          <span @click="$router.push('/registry')">新用户注册</span>
          <span @click="$toast('功能未开发')">手机号验证码登录</span>
      </div>
    </div>
      <footer>
          <div>登录即表示同意学习通<span>《隐私政策》</span>和<span>《用户协议》</span></div>
      </footer>
  </div>
</template>

<script>
import { Login } from '@/network/api.js'
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        async onSubmitLogin(obj) {
            let res = await Login(obj)
            if (res.meta.code !== 200) return 
            this.$toast(res.meta.msg)
            this.$store.commit('saveProfile', res.data)
            sessionStorage.setItem('token', res.data.token)
            this.$router.push('/index/profile')
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
  .other {
        margin: 18px 20px;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        color: #09f;
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