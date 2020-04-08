<template>
  <div class="do_container">
    <van-sticky>
      <van-nav-bar @click-left="$router.go(-1)" :title="$route.query.title" left-arrow></van-nav-bar>
    </van-sticky>
    <div class="main">
      <div class="item" v-for="(item, index) in questionList" :key="item.id">
        <span class="title">{{index+1}}.{{ item.title }}</span>
        <van-checkbox-group v-model="result[item.id]" style="margin:10px 0;color:#ccc;">
          <van-checkbox name="A" icon-size="16" checked-color="#07c160">{{ item.A }}</van-checkbox>
          <van-checkbox name="B" icon-size="16" checked-color="#07c160">{{ item.B }}</van-checkbox>
          <van-checkbox name="C" icon-size="16" checked-color="#07c160">{{ item.C }}</van-checkbox>
          <van-checkbox name="D" icon-size="16" checked-color="#07c160">{{ item.D }}</van-checkbox>
        </van-checkbox-group>
      </div>
    </div>
    <div class="bottom">
        <van-button round type="info" block @click="submit">提交试题</van-button>
    </div>
  </div>
</template>

<script>
import { getQuestion, submitAnswer } from "@/network/api.js";
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['profileInfo'])
    },
  data() {
    return {
      questionList: [],
      result: {},
      selectIndexArr: [],
      unSelectArr: []
    };
  },
  created() {
    this.getQuestion(this.$route.query);
  },
  methods: {
    async getQuestion(info) {
      let res = await getQuestion(info);
      this.questionList = res.data;
    },
    submit() {
        for (const key in this.result) {
            if (this.result.hasOwnProperty(key)) {
                this.selectIndexArr.push(key)
            }
        }
        this.questionList.forEach((item, index) => {
            if(!this.selectIndexArr.includes(item.id.toString())) {
                this.unSelectArr.push(index+1)
            }
        })
        if(this.unSelectArr.length) {
            this.$dialog.confirm({message: `第${this.unSelectArr.toString()}题没做呢，确认提交吗？`}).then(async () => {
                this.sendAnswer()
            }).catch(() => {
                this.unSelectArr = []
            })
        }else{
            this.$dialog.confirm({message: '确定要提交吗？'}).then(async () => {
                this.sendAnswer()
            }).catch(() => {
                this.unSelectArr = []
            })
        }
    },
    async sendAnswer() {
        let arr = []
                for (const key in this.result) {
                    if (this.result.hasOwnProperty(key)) {
                        const element = this.result[key];
                        let obj = {}
                        obj[key] = element.toString().replace(',','')
                        arr.push(obj)
                    }
                }
                let res = await submitAnswer({stu_id:this.profileInfo.user.id, hw_title: this.$route.query.title,hw_id:this.$route.query.id,answer:arr,sum:this.$route.query.sum})
                this.$toast(`考试结束，得分${res.data}`)
                this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
.do_container {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  .main {
      flex:1;
      overflow: auto;
    padding: 20px 10px;
    padding-bottom: 60px;
    .item {
      .title {
        font-weight: 400;
        font-size: 16px;
      }
    }
  }
  .bottom {
      background-color: #fff;
      width: 100%;
      height: 60px;
      padding: 10px 80px;
      position: absolute;
      bottom: 0;
      right:0;
  }
}
</style>