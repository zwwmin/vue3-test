/*
 * @Date: 2020-04-01 10:16:39
 * @LastEditors: zww
 * @LastEditTime: 2020-04-13 17:45:00
 */
import router from './router'
import store from './store'
import { ElMessage } from 'element-plus';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect', '/signup', '/sig'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // determine whether the user has logged in
  const hasToken = getToken()
  console.log("hasToken")
  console.log(hasToken)
  if (hasToken) {
    console.log("to.path")
    console.log(to.path)
    next()
    return
    if (to.path === '/login') {
      console.log(12312)
      // if is logged in, redirect to the home page
      next({ path: '/login' })
      NProgress.done()
    } else {

      // determine whether t
      // he user has obtained his permission roles through getInfo
      const hasRoles = store.getters.userID
      const hasOptions = store.getters.options
      if (hasRoles && hasOptions) {
        next()
      } else {
        next()
        return
        try {
          // get user info
          await store.dispatch('menuController/getOptions')
          await store.dispatch('user/getInfo')
          const roles = await store.dispatch('user/paseCell')
          let accessRoutes = []
          accessRoutes = await store.dispatch('permission/generateRoutes', roles.data.count)
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          ElMessage.error(error)
          next('/login')
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next()
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
