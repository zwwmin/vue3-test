<template>
  <div class="about">
    <div class="about_finsh">
      <img class="about_finsh_img" src="../assets/icon_finsh@2x.png" alt="">
      <div class="bangding_text">绑定成功</div>
    </div>
    <div class="about_explain">
      <p>1、账号已经建立绑定关系</p>
      <p>
        2、当前帐号已经登陆移动端，您可以使用此帐号随时关注公众号并获取相关数据哦
      </p>
    </div>
    <div class="about_btn">
      <van-button
        class="btn_title"
        round
        block
        type="info"
        color="#3C71F4"
      >我知道了</van-button>
    </div>
    <div class="essential_box">
      <div class="essential">
        <p>基本信息：</p>
      </div>
      <div class="basics">
        <p class="basics_name">账号：<span class="basice_data">动物世界</span></p>
        <p class="basics_name">
          手机号码：<span class="basice_data">15527904092</span>
        </p>
        <p class="basics_name">
          入职时间：<span class="basice_data"> 2020-03-20 17:27:52</span>
        </p>
      </div>
    </div>

    <div />
  </div>
</template>
<script>
import {} from '@/api/dynamic'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  created() {
    // this.getMoney()
    // // this.getTeam(this.$route.query.id)
    // this.getTeamList()
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
p {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 20px;
}
.about {
  padding: 16px 16px;
  box-sizing: border-box;
}
.about_top {
  .aboutTop_binding {
    display: inline-block;
    width: 93%;
    text-align: center;
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }
}
.about_finsh {
  text-align: center;
  margin: 110px 128px 82px 130px;
  .about_finsh_img{
    width: 60px;
    height: 60px;
  }
}
.bangding_text {
  // margin-top: 10px;
  font-size: 16px;
  color: #333;
}
.about_explain {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  height: 70px;
}
.about_btn {
  margin: 52px 52px;
  .btn_title {
    width: 234px;
    height: 40px;
  }
}
.essential {
  position: relative;
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-top: 100px;
}
.basics {
  margin-top: 10px;
  .basics_name {
    margin-bottom: 4px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
  }
  .basice_data {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
  }
}

</style>
