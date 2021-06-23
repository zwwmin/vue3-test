<template>
  <div class="news">
    <div class="news_box">
      <div class="news_imgbox">
        <img
          class="news_img"
          src="../assets/icon_follow_up_reminder@2x.png"
          alt=""
        >
      </div>
      <div class="news_titlebox" @click="details">
        <p class="news_title">客户回访</p>
        <p class="news_text">今天您有<span class="news_textColor">"13"</span>位客户待回访</p>
        <p class="news_time">2021-05-12 17:00:03</p>
      </div>
    </div>
    <div class="news_box">
      <div class="news_imgbox">
        <img
          class="news_img"
          src="../assets/icon_work_reminder@2x.png"
          alt=""
        >
      </div>
      <div class="news_titlebox" @click="details">
        <p class="news_title">工作提醒</p>
        <p class="news_text">今天您有<span class="news_textColor">"28"</span>条待处理的工作</p>
        <p class="news_time">2021-05-12 17:00:03</p>
      </div>
    </div>
    <div class="news_box">
      <div class="news_imgbox">
        <img
          class="news_img"
          src="../assets/icon_work_reminder@2x.png"
          alt=""
        >
      </div>
      <div class="news_titlebox" @click="details">
        <p class="news_title">客户回访</p>
        <p class="news_text">今天您有<span class="news_textColor">"13"</span>位客户待回访</p>
        <p class="news_time">2021-05-12 17:00:03</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    details() {
      console.log('1213')
    }
  }
}
</script>
<style lang="scss" scoped>
p {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 20px;
}
.news {
  padding: 20px;
  .news_box {
    margin-top: 10px;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    .news_imgbox {
        margin: auto 0;
    //   height: 80px;
    //   line-height: 50px;
      .news_img {
        width: 30px;
        height: 30px;
      }
    }
    .news_titlebox{
        margin-left: 10px;
        margin-bottom: 10px;
        width: 300px;
        .news_title{
            font-size: 16px;
            color: #333;
        }
        .news_text{
            line-height: 30px;
            font-size: 14px;
            color: #333;
            .news_textColor{
                color: #3C71F4;
            }
        }
        .news_time{
            font-size: 12px;
            color: #999;
        }
    }
  }
}
</style>
