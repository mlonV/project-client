<template>
    <div class="demo">
        <h2>Student</h2>
        <h2>i am ：{{name}}</h2>
        <h2>my address ：{{address}}</h2>
        <button @click="sendMsgToSchool">点我给School发数据</button>
    </div>
</template>

<script>
    export default {
        name:"Student",
        data(){
            return {
                name:"mlon",
                address:"上海"
            }
        },
        methods:{
            sendMsgToSchool(){
                this.$bus.$emit('sendMsgStudent',this.name)
            }
        }

    }
</script>

<style scoped>
    .demo{
        background-color:hotpink;
    }
</style>