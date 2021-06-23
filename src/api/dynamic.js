import request from '../utils/request'

// 登录
export function Login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

// 动态--详情
export function sunnySponsorSponsorInfo(data) {
  return request({
    url: '/sponsorInfo',
    method: 'post',
    data
  })
}

// 募资金额
export function totalMoney(data) {
  return request({
    url: '/totalMoney',
    method: 'post',
    data
  })
}

// 学生--详情
export function studentInfo(data) {
  return request({
    url: '/studentInfo',
    method: 'post',
    data
  })
}

// 团队--列表
export function sunnyTeamTeamList(data) {
  return request({
    url: '/teamList',
    method: 'post',
    data
  })
}

// 团队--详情
export function teamInfo(data) {
  return request({
    url: '/teamInfo',
    method: 'post',
    data
  })
}
