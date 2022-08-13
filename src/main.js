import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/normalize.css'
import '@/assets/style/element.css'

import router from './router'
import store from './store'

const app = createApp(App)

// 图标进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store).use(router).mount('#app')
