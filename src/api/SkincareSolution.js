import request from '../utils/request'

// 访问方案记录（外用）
export function visitprogram(data) {
    return request({
      url: '/visitprogram',
      method: 'post',
      data
    })
  }
// 访问测试记录（外用）
export function visittest(data) {
    return request({
      url: '/visittest',
      method: 'post',
      data
    })
  }
  
  // 展示导师信息（外用）
  export function showone(data) {
    return request({
      url: '/showone',
      method: 'post',
      data
    })
  }
  
  // 获取产品信息（外用）
  export function getspecs(data) {
    return request({
      url: '/getspecs',
      method: 'post',
      data
    })
  }
  