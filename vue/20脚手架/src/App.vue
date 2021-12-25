<template>
    <div class="app">
        <!-- <Student @getStudent="getStudentName" /> -->
        <!-- <Student v-on:getStudent="getStudentName" /> -->
        <Student v-on:getStudent.once="getStudentName" />
        <!-- <Student ref="student" /> -->

        <School :getSchoolName="getSchoolName" />
    </div>
</template>

<script>
    import School from "./components/School.vue"
    import Student from "./components/Student.vue"
    export default {
        name:"App",
        components:{Student,School},
        methods:{
            getSchoolName(name){
                console.log("getSchoolName",name)
            },
            getStudentName(name){
                console.log("getStudentName",name)
            }
        },
        mounted(){
            // 直接调用和用生命周期区别，可以延时操作
            setTimeout(()=>{
                // this.$refs.student.$on('getStudent',this.getStudentName)
                this.$refs.student.$once('getStudent',this.getStudentName)
            },3000)
        }
}
</script>

<style>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>