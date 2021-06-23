
const util = {
  /**
   *  判断是否是微信浏览器打开
   * */
  isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) === 'micromessenger') {
      return true
    } else {
      return false
    }
  }
}

export default util
