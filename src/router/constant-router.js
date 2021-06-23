
 const constantRouterMap =  [{
    path: '/',
    name:'index',
    meta: {
        title: 'index'
      },
    component: () => import('@/views/index.vue')
},

  {
    path: '/About',
    name: 'About',
    meta: {
      title: 'About'
    },
    component: () => import('@/views/About.vue')
  },
{
    path: '/404',
    name: "404",
    component: () => import('@/views/error/404.vue')
}]


export default constantRouterMap