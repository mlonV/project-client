<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)" />
            <!-- 不建议使用v-model -->
            <!-- <input type="checkbox" v-model="todo.done" /> -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo,$event)" ref="inputTitle">
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)" >删除</button>
        <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)" >编辑</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:"MyItem",
        props:['todo'],
        methods:{
            handleCheck(id){
                // this.checkTodo(id)
                this.$bus.$emit('checkTodo',id)
            },
            handleDelete(id){
                // this.deleteTodo(id)   //函数名字，父组件的函数名
                // this.$bus.$emit('deleteTodo',id)   //事件名，全局事件总线的事件名
                pubsub.publish('GetID',id)         //发布订阅的消息名
                console.log('send id')
            },
            handleEdit(todo){
                if (todo.hasOwnProperty.call(todo,'isEdit')){
                    todo.isEdit = true
                }else{
                    this.$set(todo,'isEdit',false)
                }
                // //这里是先要解析执行获取input的焦点在去解析模板，所以不加timeout会获取不到，正常官方做法nextTick
                // setTimeout(()=>{
                //     this.$refs.inputTitle.focus()
                // })
                // //等到下次解析dom在执行该内容
                this.$nextTick(function(){
                    this.$refs.inputTitle.focus()
                })
            },
            handleBlur(todo,e){
                todo.isEdit = false
                // console.log('updateTodo',todo.id,e)
                if (!e.target.value.trim()) return alert('数据不能为空')
                this.$bus.$emit('updateTodo',todo.id,e)
            }
        }
    }
</script>

<style scoped>


    /* item */
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor:pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover {
        background-color: #ddd;
    }

    li:hover button {
        display: block;
    }
</style>