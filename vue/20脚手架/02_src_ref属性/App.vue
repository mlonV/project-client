<template>
    <div>

        <h2 id="h2" ref="id"> 写一行html </h2>
        <button @click="showMsg" ref="btn">点我获取元素</button>
        <School ref="sch"/>

    </div>
</template>

<script>
    import School from "./components/School.vue"
    export default {
        name:"App",
        components:{School},
        data(){
            return {
                name:"html"
            }
        },
        methods:{
            showMsg(){
                // console.log(document.getElementById('h2'))  //原生获取
                // console.log('ref获取',this.$refs)  //用ref获取
                console.log('ref获取',this.$refs.sch)  //用ref获取
            }
        }
}

</script>