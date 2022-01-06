<template>
    <div class="count">
        <h1>当前求和为：{{sum}}</h1>
        <!-- getters调用方式 -->
        <!-- <h1>当前求和*10为：{{$store.getters.GetTenSum}}</h1> -->
        <h1>当前求和*10为：{{GetTenSum}}</h1>
        <h3 style="color:red">personList人数为：{{personList.length}}</h3>

        <!-- 调用state里面的数据 -->
        <!-- <h4>i'm {{ $store.state.name }},learn {{$store.state.project}}</h4> -->
        <h4>i'm {{ name }},learn {{project}}</h4>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increase(n)">+</button>
        <button @click="decrease(n)">-</button>
        <button @click="increaseOdd(n)">奇数在加</button>
        <button @click="increaseWait(n)">等一等在加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
        name:"Count",
        data() {
            return {
                n:1,
            }
        },
        computed:{
            ...mapState('countObj',['name','sum','project']),
            ...mapState('personObj',['personList']),
            ...mapGetters('countObj',['GetTenSum']),
        },
        methods:{
            ...mapMutations('countObj',{'increase':'MutationIncrease','decrease':'MutationDecrease'}),
            ...mapActions('countObj',{'increaseOdd':'ActionIncreaseOdd','increaseWait':'ActionIncreaseWait'}),
        }
    }
</script>

<style scoped>
    button {
        margin-left: 5px;
    }
</style>