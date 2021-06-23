import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'

// import './permission' // permission control 路由过滤器，登录判断
// DIN Alternate Bold 字体
// import '@/styles/font/font.css'
import { Form, Field } from 'vant';

// element
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import 'amfe-flexible/index.js'


const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(Form);
app.use(Field);

app.mount('#app')