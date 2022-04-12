<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-03-31 11:22:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-10 10:03:02
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-button class="hehe" @click="handleClick">是否可了多少</el-button>
    <ui-upload></ui-upload>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button, Upload } from 'ui-component'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    [Button.name]: Button,
    [Upload.name]: Upload
  },
  setup() {
    const handleClick = (e) => {
      console.log(e);
    }
    return {
      handleClick
    }
  }
}
</script>
