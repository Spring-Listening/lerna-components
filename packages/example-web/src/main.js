/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-03-31 11:22:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-09 15:52:29
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app');
