<template>
    <div class="Student">
        <h2 @click="showMsg">i am ：{{name}}</h2>
        <h2>my age ：{{address}}</h2>
    </div>
</template>

<script>
    // 局部导入
    // import { mixin } from '../mixin.js'

    export default {
        name:"Student",
        data(){
            return {
                name:"lirigou",
                address:"五角场"
            }
        },
        // mixins:[mixin]
    }
</script>

<style>
    .Student{
        background-color: gray;
    }
</style>