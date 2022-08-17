import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  {path: '/', redirect: '/discover'},
  // path, component,  children,  redirect
  {
    // 主页面  ———— 一级路由
    path: '/',
    name: 'frontHomePage',
    redirect: '/discover',
    component: () => import('@/views/frontHomePage.vue'),
    children: [
      // 二级路由
      {
        path: '/discover',
        name: 'bannerCom',
        redirect: '/discover/personality',
        component: () => import('@/views/banner/bannerCom.vue'),
        // 三级路由
        children: [
          // 发现音乐
          {
            path: '/discover/personality',
            name: 'bannerBodyRecommend',
            redirect: '/discover/personality/recommend',
            component: () => import('@/views/banner/components/find/bannerLoad.vue'),
            children: [
              // 个性推荐
              {
                path: '/discover/personality/recommend',
                name: 'bannerBodyRecommend',
                component: () => import('@/components/bannerBodyRecommend/bannerBodyRecommend.vue')
              },
              // 歌单
              {
                path: '/discover/personality/musiclist',
                name: 'bannerBodyMusicList',
                component: () => import('@/components/bannerBodyMusicList/bannerBodyMusicList.vue')
              }
            ]
          },
          // 视频
          {
            path: '/discover/video',
            name: 'bannerVideo',
            component: () => import('@/views/banner/components/video/bannerVideo.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
