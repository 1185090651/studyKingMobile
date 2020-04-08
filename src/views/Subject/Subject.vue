<template>
  <div class="subject_container">
      <van-sticky>
      <van-nav-bar @click-left="$router.push('/selectsubject')" title="计算机基础" left-arrow>
        <template #right>
          <van-icon name="wap-home-o" size="18" @click="$router.push('/index')"/>
        </template>
      </van-nav-bar>
    </van-sticky>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="chat-o" to="/subject/1/notify">通知</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/subject/1/material">资料</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/subject/1/discussion">讨论</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o" to="/subject/1/homework">作业</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.subject_container {
  height: 100%;
  background-color: #f8f8f8;
}
.van-notice-bar {
  margin-bottom: 5px;
}
</style>