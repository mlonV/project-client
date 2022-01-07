<template>
    <div class="col-xs-offset-2 col-xs-8"> 
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="go">测试go</button>
    </div>
</template>

<script>
    export default {
        name:"Banner",
        methods:{

            // 三个函数，
            //  back 可以回退到上一个页面
            //  forward，前进一个页面
            //  go 浏览器前进或者后退由传入的正负数来决定
            back(){
                this.$router.back()
            },
            forward(){
                this.$router.forward()
            },
            go(){
                // 浏览器前进或者后退由传入的正负数来决定
                this.$router.go(-2)  // -2代表后退两次
            },
        }
    }
</script>
