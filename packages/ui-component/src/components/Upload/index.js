/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-04-10 09:55:03
 * @LastEditors:
 * @LastEditTime: 2022-04-10 09:56:20
 */
import Upload from './src/upload.vue';

Upload.install = (Vue) => {
  Vue.component(Upload.name, Upload);
};

export default Upload;
