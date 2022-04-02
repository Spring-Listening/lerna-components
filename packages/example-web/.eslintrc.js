/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-03-31 11:22:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-31 12:19:50
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: 0,
    'comma-dangle': 0
  }
}
