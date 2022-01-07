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
                            path:"detail",
                            component:Detail
                        },
                    ]
                },
            ]
            
        }
    ]
})
