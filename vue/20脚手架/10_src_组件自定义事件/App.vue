<template>
    <div class="app">
        <h1>{{msg}},学生姓名是: {{StudentName}}</h1>

        <!-- <Student @getStudent="getStudentName" /> -->
        <!-- <Student v-on:getStudent="getStudentName" /> -->
        <!-- <Student :getDemo="getDemo"  v-on:getStudent="getStudentName" /> -->
        <Student ref="student" @click.native="show" />

        <School :getSchoolName="getSchoolName" />
    </div>
</template>

<script>
    import School from "./components/School.vue"
    import Student from "./components/Student.vue"
    export default {
        name:"App",
        data(){
            return {
                msg:"你好啊",
                StudentName:""
            }
        },
        components:{Student,School},
        methods:{
            getSchoolName(name){
                console.log("getSchoolName",name)
            },
            getStudentName(name){
                console.log("getStudentName",name)
                this.StudentName = name
            },
            getDemo(name){
                console.log("getDemo",name)
            },
            show(){
                console.log('@ show')
                alert('@ show')
            }
        },
        mounted(){
            // 直接调用和用生命周期区别，可以延时操作
            // setTimeout(()=>{
            //     // this.$refs.student.$on('getStudent',this.getStudentName)
            //     this.$refs.student.once('getStudent',this.getStudentName)
            // },3000)

            // 这里面的this是VC  除非使用尖头函数，找不到this 找到上级的mounted的vm指向vm才能生效
            this.$refs.student.$on('getStudent',(name)=>{
                console.log(name)
                this.StudentName = name
            })
            // //  写成箭头函数
            // this.$refs.student.$on('getStudent',(name)=>{
            //     console.log(name)
            //     this.StudentName = name
            // })
            

            // this.$refs.student.$on('getStudent',this.getStudentName)


        }
}
</script>

<style>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>