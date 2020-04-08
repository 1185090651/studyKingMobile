<template>
  <div class="dis_container">
    <van-search v-model="searchValue" shape="round" placeholder="请输入搜索关键词" />

    <div class="item_box" v-for="item in discussionList" :key="item.id">
      <div class="header">
        <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt />
        <span class="info">
          <span class="title">{{ item.dis_title }}</span>
          <span style="color:#bbb;">{{ item.create_time | timeFormats }}</span>
        </span>
      </div>
      <div class="content">
        <div class="content_main">{{ item.dis_content }}</div>
      </div>
      <div class="answer">
        <div v-for="i in item.children" :key="i.id" style="margin-bottom:5px;">
            <span style="color:#09f;">{{ i.name === profileInfo.user.name ? "我" :i.name }}：</span>
        <span style="line-height:16px;">{{ i.dis_content }}</span>
        </div>
      </div>
      <div class="search">
          <van-icon name="orders-o" /><input type="text" placeholder="回复" @keyup.enter="addReply($event,item.dis_title)">
      </div>
    </div>
  </div>
</template>

<script>
import { getDiscussion, addDisStu } from "@/network/api.js";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["profileInfo"])
  },
  data() {
    return {
      searchValue: "",
      discussionList: [],
      replay: ''
    };
  },
  created() {
      this.getDiscussion()
  },
  methods: {
    async getDiscussion() {
      let res = await getDiscussion({ subject_id: 1, tea_id: 1 });
      this.discussionList = res.data
    },
    async addReply(e,dis_title) {
        let res = await addDisStu({dis_content:e.target.value, dis_title, stu_id: this.profileInfo.user.id, tea_id:1, subject_id:1})
        this.$toast(res.meta.msg)
        this.getDiscussion()
        e.target.value = ''
    }
  }
};
</script>

<style lang="scss" scoped>
.dis_container {
  .item_box {
    background-color: #fff;
    padding: 10px;
    .header {
      height: 36px;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      img {
        width: 36px;
      }
      .info {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        .title {
          font-size: 14px;
          color: #09f;
          margin-bottom: 3px;
        }
      }
    }
    .content {
      padding-left: 16px;
      .content_main {
        margin-top: 10px;
        font-size: 14px;
      }
    }
    .answer {
      margin-left: 16px;
      margin-top: 10px;
      font-size: 12px;
      color: #bbb;
    }
    .search {
        background-color: #f8f8f8;
        color: #666;
        margin: 10px 20px;
        display: flex;
        align-items: center;
        input {
            margin-left: 6px;
            background-color: #f8f8f8;
            outline: none;
            border: none;
            padding: 5px 0px;
            width: 100%;
        }
    }
  }
}
</style>