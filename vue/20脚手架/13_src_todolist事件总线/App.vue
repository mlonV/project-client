<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :addTodo="addTodo" />
                <MyList :todos="todos"  />
                <MyFooter :todos="todos" :setDone="setDone"  :DelAllDone="DelAllDone" />
            </div>
        </div> 
    </div>
    
</template>

<script>
    import MyHeader from "./components/MyHeader.vue"
    import MyList from "./components/MyList.vue"
    import MyFooter from "./components/MyFooter.vue"
    export default {
        name:"App",
        components:{MyFooter,MyList,MyHeader},
        data(){
            return {
                todos:[
                    {id:"001",title:"eat",done:true},
                    {id:"002",title:"play",done:true},
                    {id:"003",title:"drink",done:false},
                    {id:"004",title:"driver",done:true}
                ]
            }
        },
        methods:{
            // 添加项
            addTodo(obj){
                this.todos.unshift(obj)
                console.log(obj)
            },
            // 勾选或者取消
            checkTodo(id){
                this.todos.forEach((todo)=>{
                    if (todo.id === id ) todo.done = !todo.done
                })
            },
            // 删除项
            deleteTodo(id){
                this.todos = this.todos.filter((todo) => {
                    if (todo.id !==id) return todo
                })
            },
            // 设置全选或者全不选
            setDone(value){
                this.todos.forEach((todo)=>{
                    todo.done = value
                })
            },
            // 清除
            DelAllDone(){
                this.todos = this.todos.filter((todo)=>{
                     return !todo.done
                })
            }
        },
        mounted(){
            this.$bus.$on('checkTodo',this.checkTodo)
            this.$bus.$on('deleteTodo',this.deleteTodo)
        },
        beforeDestroy(){
            this.$bus.$off('checkTodo')
            this.$bus.$off('deleteTodo')
        }
}
</script>

<style>
    /* base */
    body {
        background-color: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255,255, 255, 0.2), 0 1px 2px rgba(0,0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color:#fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color:#fff;
        background-color: #bd362f;
    }

    .btn:focus {
        outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }


</style>