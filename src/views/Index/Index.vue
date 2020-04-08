<template>
  <div class="index_container">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item icon="wap-home-o" to="/index/home">首页</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/index/message">消息</van-tabbar-item>
      <van-tabbar-item icon="edit" to="/index/note">笔记</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/index/profile">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.index_container {
    height: 100%;
}
</style>