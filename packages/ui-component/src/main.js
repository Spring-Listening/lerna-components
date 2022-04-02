/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-03-31 11:21:32
 * @LastEditors:
 * @LastEditTime: 2022-03-31 14:56:56
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
