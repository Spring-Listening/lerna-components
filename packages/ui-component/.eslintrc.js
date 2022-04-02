/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-03-31 11:21:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-31 14:56:41
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: 0,
    'import/no-unresolved': 0,
  },
};
