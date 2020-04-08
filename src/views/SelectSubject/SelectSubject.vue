<template>
  <div class="subject_container">
    <van-sticky>
      <van-nav-bar @click-left="$router.push('/index')" title="选择课程" left-arrow>
        <template #right>
          <van-icon name="plus" size="18" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <main>
       <div class="item" @click="$router.push('/subject/1')">
        <div class="main">
            <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt />
          <div class="info">
            <div class="title">计算机基础</div>
            <div class="tea_name">老师一</div>
          </div>
        </div>
        <van-icon name="arrow" style="font-size:20px;"/>
      </div>
    </main>
  </div>
</template>



<style lang="scss" scoped>
.subject_container {
  color: #646566;
  height: 100%;
  background-color: #f7f8fa;
  main {
    .item {
      margin: 0 12px;
      margin-top: 16px;
      background-color: #fff;
      border: 1px solid #ebeef5;
      border-radius: 6px;
      box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
      padding: 10px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .main {
          display: flex;
              img {
                  width: 40px;
              }
          .info {
              margin-left: 10px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              .tea_name {
                  font-size: 12px;
                  margin-top: 5px;
              }
          }
      }
    }
  }
}
</style>