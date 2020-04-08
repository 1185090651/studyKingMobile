<template>
  <div class="material_container">
    <van-search v-model="searchValue" shape="round" placeholder="请输入搜索关键词" />
    <div class="material_box">
      <div class="material_item" v-for="item in materialList" :key="item.filename">
        <div class="info_box">
          <van-icon name="idcard" class="icon" />
          <div class="info">
            <span class="title">{{item.filename}}</span>
            <span class="size">{{item.size | sizeFormat}}</span>
          </div>
        </div>
        <van-icon name="down" color="#09f" @click="download(item.filename)"/>
      </div>
    </div>
  </div>
</template>

<script>
import { getResource } from "@/network/api.js";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["profileInfo"])
  },
  data() {
    return {
      searchValue: "",
      materialList: [],
    };
  },
  created() {
    this.getResource();
  },
  methods: {
    async getResource() {
      let res = await getResource("teacher001");
      if (res.meta.code !== 200) return;
      this.materialList = res.data;
    },
    async download(filename) {
      let a = document.createElement("a");
      let event = new MouseEvent("click");
      a.href = `http://localhost:7000/api/resource/download?username=teacher001&data=${JSON.stringify([filename])}`;
      a.dispatchEvent(event);
    }
   
  }
};
</script>

<style lang="scss" scoped>
.material_container {
  .material_box {
    .material_item {
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      padding: 10px 20px;
      border-bottom: 1px solid #eee;
      .info_box {
        display: flex;
        align-items: center;
        .icon {
          font-size: 32px;
          color: #09f;
        }
        .info {
          margin-left: 16px;
          display: flex;
          flex-direction: column;
          .title {
            font-size: 16px;
            font-weight: 300;
            display: inline-block;
            white-space: nowrap;
            width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .size {
            margin-top: 5px;
            font-size: 14px;
            font-weight: 300;
            color: #666;
          }
        }
      }
    }
  }
}
</style>