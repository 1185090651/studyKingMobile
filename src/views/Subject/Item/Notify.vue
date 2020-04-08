<template>
  <div>
    <van-search v-model="searchValue" shape="round" placeholder="请输入搜索关键词" />

    <van-notice-bar
      color="#1989fa"
      background="#ecf9ff"
      left-icon="info-o"
      wrapable
      v-for="item in notifyList"
      :key="item.id"
    ><span class="title">{{item.title}}</span>：{{item.content}}</van-notice-bar>
  </div>
</template>

<script>
import { getNotify } from "@/network/api.js";
export default {
  data() {
    return {
        searchValue:'',
      notifyList: []
    };
  },
  created() {
    this.getNotify();
  },
  methods: {
    async getNotify() {
      let res = await getNotify({ sub_id: 1 });
      if (res.meta.code !== 200) return;
      this.notifyList = res.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
    font-weight: 800;
}
</style>