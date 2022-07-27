import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import rvRequest from './service/index'
import 'normalize.css'
import './assets/css/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'
// import RVRequest from './service/request'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
setupStore()

// rvRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })

// rvRequest.request({
//   url: '/home/multidata',
//   method: 'GET'
// })

// rvRequest.get()
