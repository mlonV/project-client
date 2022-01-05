<template>
    <div>
        <h1>人员列表</h1>
        <h3>count数量为：{{sum}}</h3>
        <input type="text" v-model="name" placeholder="请输入名字">
        <button @click="addPerson">提交</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {nanoid} from 'nanoid'
    export default {
        name:"Person",
        data() {
            return {
                name:""
            }
        },
        computed: {
            ...mapState(['personList','sum']),
        },
        methods: {
            addPerson(){
                const personObj = {id:nanoid(),name:this.name}
                this.$store.commit('addPerson',personObj)
                this.name = ''
            }
        },
    }
</script>

