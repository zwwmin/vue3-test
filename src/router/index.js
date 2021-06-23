import { createRouter, createWebHistory } from "vue-router";
// createWebHashHistory 正常模式 ;createWebHistory  不带 #号
// hash 与 history
import constantRouterMap from './constant-router'

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})
export default  router