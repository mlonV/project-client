<template>
    <div class="demo">
        <h2>School</h2>
        <h2>i am ：{{SchoolName}}</h2>
        <h2>my age ：{{address}}</h2>
        <!-- <button @click="sendMsgToStudent">点我给Student发数据</button> -->
    </div>
</template>

<script>
    import pubsub from "pubsub-js"
    export default {
        name:"School",
        data(){
            return {
                SchoolName:"lirigou xxx",
                address:"五角场"
            }
        },
        mounted(){
            // 1.订阅消息接收两个参数，一个是消息名第二个是数据
            // 2.函数内的this是未定义，想使用vc可以用箭头函数或者定义在method中使用this.funcname
            //      this.pubID = pubsub.subscribe('school',this.getschool)
            // 3.mounted时订阅，在beforeDestory时取消订阅， 订阅函数会返回一个id需要用ID来取消订阅
            this.pubID = pubsub.subscribe('school',function(funcName,data){
                console.log("school pubsub",data)
            })
        },
        beforeDestroy(){
            pubsub.unsubscribe(this.pubID)
        }
    }
</script>

<style scoped>
    .demo{
        background-color:peru;
    }
</style>