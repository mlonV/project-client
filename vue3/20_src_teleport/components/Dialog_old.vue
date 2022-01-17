<template>
  <div>
    <button @click="isShow = true">点我弹窗</button>
    <div v-if="isShow" class="dialog">
      <h4>Iam Dialog</h4>
      <h4>Iam Dialog</h4>
      <h4>Iam Dialog</h4>
      <h4>Iam Dialog</h4>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
  export default {
    name: 'Dialog',
    setup(){
      let isShow = ref(true)
      return {
        isShow
      }
    }
  }
</script>

<style>
    .dialog{
      background-color: greenyellow;
      padding: 10px;
    }
</style>