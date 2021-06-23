import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { getToken } from '@/utils/auth'
// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000  // request timeout
})
console.log(import.meta.env.VITE_APP_TITLE)
console.log(import.meta.env.VITE_APP_BASE_API)
console.log('process.env.VUE_APP_BASE_API')
// request interceptor
// 请求前的拦截
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (!(config.data && config.data.company_id) && (store.getters.CellID && config.data)) {
      config.data.company_id = store.getters.CellID
    }
    // if (store.getters.token) {
    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    config.headers['Authorization'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (response.status !== 200) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    if (error.response.status === 401) {
      ElMessage({
        message: '登录过期,即将跳转登录页',
        type: 'error',
        duration: 5 * 1000
      })
      // 跳转重新登录
      // store.dispatch('user/resetToken').then(() => {
      //   setTimeout(function() {
      //     location.reload()
      //   }, 2000)
      // })
      return error
    } else if (error.response.status === 403) {
      if (error.response.data.message !== '') {
        ElMessage({
          message: error.response.data.message,
          type: 'error',
          duration: 5 * 1000
        })
      } else {
        ElMessage({
          message: '你没有权限这样做',
          type: 'error',
          duration: 5 * 1000
        })
      }
      return Promise.reject(error)
    } else if (error.response.status === 422) {
      const rous = Object.values(error.response.data.errors)
      let res = '验证错误,'
      rous.forEach(route => {
        const tmp = { ...route }
        res += tmp[0]
      })
      ElMessage({
        message: res,
        type: 'error',
        duration: 2 * 1000
      })
      return Promise.reject(error)
    } else if (error.response.status === 503) {
      ElMessage({
        message: '系统正在维护中，暂不支持登录',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    } else {
      let errtitle = ''
      if (error.response.data.errors !== undefined) {
        const rous = Object.values(error.response.data.errors)
        let res = '验证错误,'
        rous.forEach(route => {
          const tmp = { ...route }
          res += tmp[0]
        })
        ElMessage({
          message: '网络错误',
          type: 'error',
          duration: 5 * 1000
        })
        errtitle = res
      } else {
        ElMessage({
          message: '网络错误',
          type: 'error',
          duration: 5 * 1000
        })
        errtitle = error.response.data.message
      }
      return Promise.reject(error)
    }
  }

)

export default service
