<template>
    <div>
        <ul>
            <li v-for="m in msgList" :key="m.id">
                <!-- 给路由穿参数  第一种写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&msg=${m.msg}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

                <!-- 第二种写法 写成对象的形式-->
                <router-link :to="{
                    name:'threeDetail',   //使用简写形式
                    // path:'/home/message/detail',
                    query:{id:m.id,msg:m.msg}
                }">
                    {{m.title}}
                </router-link>&nbsp;&nbsp;
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
