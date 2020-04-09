<template>
  <div class="profile_container">
    <van-sticky>
      <van-nav-bar title="我的" />
    </van-sticky>
    <div class="profile_main">
      <div class="login">
        <div class="profile" v-if="!hasToken" @click="$router.push('/login')">
          <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt />
          <span style="margin-left:14px;">请先登录</span>
        </div>
        <div class="profile" v-else>
          <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt />
          <span style="margin-left:14px;">{{ profileInfo.user.name }}</span>
        </div>
        <van-icon name="arrow" style="font-size:20px;" />
      </div>
      <div class="subject" @click="$router.push('/selectsubject')">
        <div class="subject_section">
          <van-icon name="label" color="#09f" />
          <span style="margin-left:10px;">课程</span>
        </div>
        <van-icon name="arrow" />
      </div>
      <div class="others">
        <div class="items">
          <div>
            <van-icon name="star" color="#FF6666" />
            <span style="margin-left:10px;">收藏</span>
          </div>
          <van-icon name="arrow" />
        </div>
        <div class="items">
          <div>
            <van-icon name="graphic" color="#996699" />
            <span style="margin-left:10px;">待办事项</span>
          </div>
          <van-icon name="arrow" />
        </div>
        <div class="items">
          <div>
            <van-icon name="friends" color="#FF6666" />
            <span style="margin-left:10px;">小组</span>
          </div>
          <van-icon name="arrow" />
        </div>
         <div class="items">
          <div>
            <van-icon name="column" color="#00CC00" />
            <span style="margin-left:10px;">笔记</span>
          </div>
          <van-icon name="arrow" />
        </div>
         <div class="items">
          <div>
            <van-icon name="cluster" color="#09f" />
            <span style="margin-left:10px;">云盘</span>
          </div>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="subject" @click="logout">
          <div> <van-icon name="setting" color="#ccc" />
            <span style="margin-left:10px;">设置</span></div>
            <van-icon name="arrow" />
      </div>
    <div class="version">
          <span>版本号：1.0.0</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['profileInfo'])
  },
    data() {
        return {
            hasToken: ''
        }
    },
    created() {
      this.hasToken = sessionStorage.getItem('token')
    },
    methods: {
      logout() {
        this.hasToken = ''
        this.$toast('退出成功')
      }
    },
};
</script>

<style lang="scss" scoped>
.profile_container {
  color: #646566;
  height: 92.5%;
  .profile_main {
    height: 100%;
    background-color: #f2f2f2;
    .login {
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      .profile {
        display: flex;
        align-items: center;
        img {
          width: 24%;
          border-radius: 50%;
        }
      }
    }
    .subject {
      background-color: #fff;
      padding: 16px;
      margin-top: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
          display: flex;
          align-items: center;
      }
      i {
        font-size: 18px;
      }
    }
    .others {
      margin-top: 6px;
      background-color: #fff;
      div {
          display: flex;
          align-items: center;
      }
      i {
        font-size: 18px;
      }
      .items {
          display: flex;
          justify-content: space-between;
          padding: 16px;
      }
    }
  .version {
      padding: 8px 0;
      font-size: 12px;
      letter-spacing: 1px;
      display: flex;
      justify-content: center;
      color: #666;
  }
  }
}
</style>