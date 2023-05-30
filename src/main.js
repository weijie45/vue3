import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// vite-plugin-svg-icons
// npm i vite-plugin-svg-icons
// 在 vite.config.js 設定
import SvgIcon from "@/components/icons/SvgIcon.vue";
import 'virtual:svg-icons-register'

const app = createApp(App)

app.component('svg-icon', SvgIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
