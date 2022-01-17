<template>
  <div>
    <button @click="isShow = true">点我弹窗</button>
    <!-- 此处使用teleport ，传送到body，可不受层级约束 -->
    <teleport to='body'>
      <div class="mask" v-if="isShow">
        <div v-if="isShow" class="dialog">
          <h4>Iam Dialog</h4>
          <h4>Iam Dialog</h4>
          <h4>Iam Dialog</h4>
          <h4>Iam Dialog</h4>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
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
  .mask{
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    background-color: rgba(0,0,0, 0.5);
  }
  .dialog{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    background-color: greenyellow;
    width: 300px;
    height: 300px;
  }
</style>