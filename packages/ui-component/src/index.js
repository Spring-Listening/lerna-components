/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-03-31 11:21:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-10 09:57:27
 */
import Button from './components/Button';
import Upload from './components/Upload';

const components = [Button, Upload];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export { install, Button, Upload };
export default {
  install,
  Button,
  Upload,
};
