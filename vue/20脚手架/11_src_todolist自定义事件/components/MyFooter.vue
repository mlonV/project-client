<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @click="checkDone"> -->
            <input type="checkbox" v-model="isAll">
        </label>
        <span>
            <span>已完成{{ doneCount }} / 全部{{total}}</span>
        </span>
        <button class="btn btn-danger" @click="cleckAllDone">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:"MyFooter",
        // props:['todos','setDone',"DelAllDone"],
        props:['todos'],
        computed:{
            total(){
                return this.todos.length
            },
            doneCount(){
                // return this.todos.reduce((pre,current) => {
                //     return pre +  (current.done ? 1:0)
                // },0)


                // 简写形式
                return this.todos.reduce((pre,todo) => pre +  (todo.done ? 1:0),0)
            },
            isAll:{
                get(){
                    return this.total === this.doneCount && this.total > 0
                },
                set(value){
                    // this.setDone(value)
                    this.$emit('setDone',value)
                }
            },
        },
        methods:{
            // 使用计算属性 的getter 和setter也能实现
            // checkDone(e){
            //     console.log(e)
            //     this.setDone(e.target.checked)
            // },
            cleckAllDone(){
                // this.DelAllDone()
                this.$emit('DelAllDone')
            }

        }
    }
</script>

<style>
    /* footer */
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label{
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input{
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button{
        float: right;
        margin-top: 5px;
    }
</style>