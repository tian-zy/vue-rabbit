//引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 懒加载
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from '@/components'

import App from './App.vue'
import router from './router'

// 引入持久化插件
import persist from 'pinia-plugin-persistedstate'

const app = createApp(App)

app.use(createPinia().use(persist))
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
