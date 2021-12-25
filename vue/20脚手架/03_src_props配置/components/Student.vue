<template>
    <div class="Student">
        <h2>i am ：{{pName}}</h2>
        <h2>my age ：{{pAge}}</h2>
    </div>
</template>

<script>
    export default {
        name:"Student",
        data(){
            return {
                pName:this.name,
                pAge:this.age,
                pMale:this.male
            }
        },
        methods:{
            updateMsg(){
                this.pAge++
            }
        },
        // // 1.从外部接受参数/传递数据
        // props:["name","age","male"],

        // // 2.接受参数，且指定类型接受。若类型错误则报错，但不影响页面输出
        // props:{
        //     name:String,
        //     age:Number,
        //     male:String
        // }

        // 3.传递数据接受参数，指定默认值，且有必须选项
        props:{
            name:{
                type:String,
                required:true  // 是否为必须的
            },
            age:{
                type:Number,
                default:19     // 默认值
            },
            male:{
                type:String,
            }
        }
    }
</script>

<style>
    .Student{
        background-color: gray;
    }
</style>