/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-04-09 16:38:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-09 18:00:28
 */
import ElButton from './src/button.vue';

ElButton.install = (Vue) => {
  Vue.component(ElButton.name, ElButton);
};

export default ElButton;
