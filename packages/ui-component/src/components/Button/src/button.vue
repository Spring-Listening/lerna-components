<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-04-09 14:54:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-10 10:00:02
-->
<template>
    <button class="ui-button" @click="handleClick"><slot></slot></button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElButton',
  setup(props, { emit }) {
    const handleClick = (evt) => {
      emit('click', evt)
      evt.preventDefault();
    }
    return {
      handleClick,
    }
  },
})

</script>

<style lang="scss">
.ui-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background: #409EFF;
  border-radius: 4px;
  padding: 6px 8px;
  color: #fff;
  white-space: nowrap;
  cursor: pointer;
  border: none;
  &:hover{
    background: #79bbff;
    color: #fff;
  }
}
</style>
