<template>
    <div class="student">
        <h2>i am ：{{name}}</h2>
        <h2>my address ：{{address}}</h2>
        <button @click="sendStudentName"> 点我获取 </button>
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
            sendStudentName(){
                this.$emit('getStudent',this.name)
            }
        }
    }
</script>

<style scoped>
    .student{
        background-color:hotpink;
        padding: 5px;
        margin-top: 30px;
    }
</style>