import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  {
    // 主页面
    path: '/',
    name: 'frontHomePage',
    component: () => import('@/views/frontHomePage.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
