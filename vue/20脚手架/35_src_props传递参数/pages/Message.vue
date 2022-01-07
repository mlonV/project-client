<template>
    <div>
        <ul>
            <li v-for="m in msgList" :key="m.id">
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&msg=${m.msg}`">{{m.title}}</router-link>&nbsp;&nbsp; -->


                <router-link :to="{
                    name:'threeDetail',   
                    // path:'/home/message/detail',  //不支持这样写了
                    // params:{id:m.id,msg:m.msg}
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
