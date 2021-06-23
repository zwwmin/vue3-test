<template>
  <div class="about">
    <div class="about_bg_img">
      <div class="about_box">
        <img src="../assets/icon_logo@3x.png" alt="">
        <div class="system oaName">寻木美系统</div>
        <div class="system trackdata">随时掌握数据</div>
        <div>
          <van-form autocomplete="on" @submit="login">
            <van-field
              v-model="loginForm.name"
              name="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
              autocomplete="off"
              show-error-message="false"
              show-error
            />
            <van-field
              v-model="loginForm.password"
              type="password"
              name="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
              autocomplete="off"
            />
            <van-checkbox
              v-model="loginForm.checked"
              class="checkbox-mrgin"
              icon-size="36px"
              name="记住密码"
              shape="square"
              checked-color="#3C71F4"
            >记住寻木美账号</van-checkbox>
            <div class="submit_btn">
              <van-button
                round
                block
                type="info"
                color="#3C71F4"
                native-type="submit"
              >绑定账号</van-button>
            </div>
          </van-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Login } from '@/api/dynamic'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      loginForm: {
        name: '',
        password: '',
        checked: ''
      }
    }
  },
  created() {},
  methods: {
    ...mapMutations(['changeLogin']),
    login() {
      const _this = this
      if (this.loginForm.name === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空')
      } else {
        Login(_this.loginForm)
          .then((res) => {
            console.log(res.data)
            _this.userToken = 'Bearer ' + res.data.access_token
            // 将用户token保存到vuex中
            _this.changeLogin({ Authorization: _this.userToken })
            _this.$router.push('/About')
            // alert('登陆成功')
          })
          .catch((error) => {
            alert('账号或密码错误')
            console.log(error)
          })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.van-cell {
  padding-bottom: 0px;
  margin-bottom: 10px;
}
.about_bg_img {
  width: 100%;
  height: 816px;
  // height: 100vh;
  background: url("../assets/bg_picture@3x.png") no-repeat 0px 0px;
  background-size: 100% 100%;
  padding: 127px 37px 0px 37px;
  box-sizing: border-box;
  .about_box {
    width: 300px;
    height: 466px;
    background: #fff;
    border-radius: 8px;
    text-align: center;
    color: #333333;
    box-sizing: border-box;
    padding: 0px 16px;
    position: relative;
    .system {
      position: relative;
      top: -20px;
    }
    .oaName {
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: bold;
      line-height: 20px;
    }
    .trackdata {
      font-weight: bold;
      margin-top: 6px;
    }
  }
}
.van-cell::after {
  border-bottom: 1px solid #000;
}
.checkbox-mrgin {
  margin: 10px 0px 0px 16px;
  font-size: 10px;
  color: #999;
}
.submit_btn {
  left: 0;
  right: 0;
  bottom: 40px;
  position: absolute;
  padding: 0px 33px;
}
// .passwordtext::after{
// border-bottom: 1px solid #000;
// }
</style>
