<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-04-09 16:28:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-12 14:51:31
-->
<template>
  <div class="upload-box">
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </el-upload>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { ElUpload } from 'element-plus'
import 'element-plus/theme-chalk/src/upload.scss'
// import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/src/base.scss'
import { UploadFilled } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'UiUpload',
  components: {
    ElUpload,
    UploadFilled,
  },
  setup() {
    return {}
  },
})

</script>
<style lang="scss" scoped>
.upload-box {

}
</style>
