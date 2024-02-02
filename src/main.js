import { createApp } from 'vue'
import { createPinia } from 'pinia'

// CSS初始化样式的替代方案 normalize.css
import "normalize.css/normalize.css";
// 全局样式
import './styles/index.scss'
// UnoCSS 即时原子CSS引擎
import 'virtual:uno.css'

// vant函数式组件样式
import 'vant/es/toast/style'; // Toast
import 'vant/es/dialog/style'; // Dialog
import 'vant/es/notify/style'; // Notify
import 'vant/es/image-preview/style'; // ImagePreview

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
