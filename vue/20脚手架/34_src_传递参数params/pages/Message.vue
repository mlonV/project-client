<template>
    <div>
        <ul>
            <li v-for="m in msgList" :key="m.id">
                <!-- 给路由穿参数 params 第一种写法 需要在路由设置里面设置占位符  调用的时候使用params -->  
                <router-link :to="`/home/message/detail/${m.id}/${m.msg}`">{{m.title}}</router-link>&nbsp;&nbsp;

                <!-- 第二种写法 写成对象的形式
                <router-link :to="{
                    name:'threeDetail',   
                    // path:'/home/message/detail',  //不支持这样写了
                    params:{id:m.id,msg:m.msg}
                }">
                    {{m.title}}
                </router-link>&nbsp;&nbsp; -->
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:"Message",
        data() {
            return {
                msgList:[
                    {id:'001',title:"detail01",msg:"消息1"},
                    {id:'002',title:"detail02",msg:"消息2"},
                    {id:'003',title:"detail03",msg:"消息3"}
                ]
            }
        },
    }
</script>
