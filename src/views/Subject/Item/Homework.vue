<template>
  <div class="homework_container">
    <div class="not_do">
      <div class="title">有效的作业</div>
      <div class="little_box">
        <div
          v-for="item in notDo"
          :key="item.id"
          class="item_box"
          @click="goDo(item.id,item.hw_title,item.start_index,item.sum,item.grade)"
        >
          <span class="main">
            <span class="item_title">{{ item.hw_title }}</span>
            <span
              style="font-size:12px;margin:8px 0;color:#09f;"
            >截止时间：{{item.deadline | timeFormats}}</span>
          </span>
          <span class="status">{{ item.grade !== null? item.grade+"分": "未做" }}</span>
        </div>
      </div>
    </div>
    <div class="deadline">
      <div class="title">过期的作业</div>
      <div class="little_box" @click="$toast('已过期')">
        <div v-for="item in deadline" :key="item.id" class="item_box">
          <span class="main">
            <span class="item_title">{{ item.hw_title }}</span>
            <span
              style="font-size:12px;margin:8px 0;color:red;"
            >截止时间：{{item.deadline | timeFormats}}</span>
          </span>
          <span class="status">{{ item.grade ? item.grade+"分": "未做" }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getHwStu } from "@/network/api.js";
export default {
  computed: {
    ...mapState(["profileInfo"])
  },
  data() {
    return {
      notDo: [],
      deadline: []
    };
  },
  created() {
    this.getHwStu();
  },
  methods: {
    async getHwStu() {
      let res = await getHwStu({
        sub_id: 1,
        tea_id: 1,
        stu_id: this.profileInfo.user.id
      });
      this.notDo = res.data.notDo;
      this.deadline = res.data.deadline;
    },
    goDo(id, title, startIndex, sum, grade) {
      if (grade !== null) {
        this.$toast("题目已经做过了");
      } else {
        this.$router.push({
          path: "/dohomework",
          query: { id, title, startIndex, sum }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.homework_container {
  .title {
    color: #bbb;
    font-size: 14px;
    margin: 5px 10px;
  }
  .little_box {
    padding: 0 10px;
    background-color: #fff;
    .item_box {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f2f2f2;
      .main {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        .item_title {
          font-weight: 400;
        }
      }
      .status {
        color: red;
        font-size: 14px;
        font-weight: 400;
        margin-top: 20px;
      }
    }
  }
}
</style>