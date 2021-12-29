<template>
    <div class="student">
        <h2>student</h2>
        <h2>i am ：{{name}}</h2>
        <h2>my address ：{{address}}</h2>
        <h2>当前num: {{num}}</h2>

        <button @click="sendStudentName"> 点我获取getStudent </button>
        <button @click="RunDemo"> 点我获取getDemo </button>
        <button @click="add"> 点我获取num </button>
        <button @click="unbind"> 点我取消自定义事件getStudent</button>
        <button @click="death"> 点我Destroy</button>


    </div>
</template>

<script>
    export default {
        name:"Student",
        data(){
            return {
                name:"mlon",
                address:"上海",
                num:0
            }
        },
        props:["getDemo"],
        methods:{
            sendStudentName(){
                this.$emit('getStudent',this.name)
                // this.$emit('click')
            },
            RunDemo(){
                this.getDemo(this.name)
            },
            add(){
                console.log("add被调用了")
                this.num++
            },
            unbind(){
                this.$off('getStudent')    //解绑自定义事件，
                // this.$off(['getStudent','xxx'])    //解绑多个自定义事件，
                // this.$off()    //解绑所有自定义事件，
            },
            death(){
                this.$destroy()
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