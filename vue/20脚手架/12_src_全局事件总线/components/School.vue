<template>
    <div class="demo">
        <h2>School</h2>
        <h2>i am ：{{SchoolName}}</h2>
        <h2>my age ：{{address}}</h2>
        <!-- <button @click="sendMsgToStudent">点我给Student发数据</button> -->
    </div>
</template>

<script>
    export default {
        name:"School",
        data(){
            return {
                SchoolName:"lirigou xxx",
                address:"五角场"
            }
        },
        mounted(){
            this.$bus.$on('sendMsgStudent',(name)=>{
                this.SchoolName = name
            })
        }
    }
</script>

<style scoped>
    .demo{
        background-color:peru;
    }
</style>