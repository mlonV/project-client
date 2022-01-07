import VueRouter from "vue-router";
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"
import Detail from "../pages/Detail"

export default new VueRouter({
    routes:[
        {
            name:"about",
            path:"/about",
            component:About
        },
        {
            path:"/home",
            component:Home,
            children:[
                {
                    path:"news",
                    component:News
                },
                {
                    path:"message",
                    component:Message,
                    children:[
                        {
                            name:"threeDetail",  //三级路由取了个名字，代码引用到这个可以简写
                            path:"detail/:id/:msg",
                            component:Detail,

                            // // 使用props来给组件传递参数  第一种写法  只能传递固定参数
                            // props:{id:1,name:"test"}

                            // // 第二种写法,只能传递params的参数，默认传进来的都可以使用props来接收(需要path上加占位符 path:"detail/:id/:msg", )
                            // // 此方法不能用在 query上
                            // props:true

                            // // 第三种方法
                            // props($route){ 
                            //     return {
                            //         // id:$route.params.id,
                            //         // msg:$route.params.msg
                            //         id:$route.query.id,
                            //         msg:$route.query.msg
                            //     }
                            // }
                            props($route){ 
                                // console.log($route)
                                return {
                                    id:$route.params.id,
                                    msg:$route.params.msg,
                                    
                                    // id:query.id,
                                    // msg:query.msg
                                }
                            }
                        },
                    ]
                },
            ]
            
        }
    ]
})
