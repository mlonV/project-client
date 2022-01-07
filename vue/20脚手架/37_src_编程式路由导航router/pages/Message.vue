<template>
    <div>
        <ul>
            <li v-for="m in msgList" :key="m.id">
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&msg=${m.msg}`">{{m.title}}</router-link>&nbsp;&nbsp; -->


                <router-link :to="{ 
                    // path:'/home/message/detail',
                    name:'threeDetail',
                    params:{id:m.id,msg:m.msg}

                }">
                    {{m.title}}
                </router-link>&nbsp;&nbsp;
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
                
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
        methods:{
            // 自己实现跳转，不用router-link
            pushShow(m){
                // 使用push函数 去跳转到特定的组件或者路径，带有回退功能
                this.$router.push({
                    name:'threeDetail',
                    params:{id:m.id,msg:m.msg}
                })
            },
            replaceShow(m){
                // 使用replace函数 去跳转到特定的组件或者路径，没有回退功能
                this.$router.replace({
                    name:'threeDetail',
                    params:{id:m.id,msg:m.msg}
                })
            },
            
        }
    }
</script>
