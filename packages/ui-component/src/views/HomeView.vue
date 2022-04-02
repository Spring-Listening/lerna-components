<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-03-31 11:21:32
 * @LastEditors:
 * @LastEditTime: 2022-03-31 14:56:19
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>
