import VueRouter from "vue-router";
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"
import Detail from "../pages/Detail"

const router =  new VueRouter({
    routes:[
        {
            name:"about",
            path:"/about",
            meta:{isAuth:true,title:"关于呀"},
            component:About
        },
        {
            name:"home",
            path:"/home",
            meta:{title:"主页呀"},
            component:Home,
            children:[
                {
                    name:"news",
                    path:"news",
                    meta:{isAuth:true,title:"新闻呀"},
                    component:News,
                    // // 独享路由守卫，写法和全局路由守卫一毛一样。
                    // beforeEnter: (to,_,next)=>{
                    //     if (to.meta.isAuth) {
                    //         if (localStorage.getItem('name') === 'mlon'){
                    //             next()
                    //         }else{
                    //             alert('name 不为 mlon，不给访问')
                    //         }
                    //     }else{
                    //         next()
                    //     }
                    // }
                },
                {
                    name:"message",
                    path:"message",
                    meta:{isAuth:true,title:"消息呀"},
                    component:Message,
                    children:[
                        {
                            name:"threeDetail",  //三级路由取了个名字，代码引用到这个可以简写
                            path:"detail/:id/:msg",
                            meta:{title:"详情呀"},
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


// // 添加路由守卫， to跳转到哪个路由  from从哪个路由来  next()判断条件后放行函数
// router.beforeEach((to,from,next)=>{
//     // if (to.name === 'message'|| to.name === 'news') {
//     if (to.meta.isAuth) {    // 设置了meta可以需要鉴定的 设置为true不需要的则不用设置 减少代码量
//         // 设置了从localstorage获取数据，数据不对称则不给显示
//         if (localStorage.getItem('name') === 'mlon'){
//             next()
//         }else{
//             alert('name 不为 mlon，不给访问')
//         }
//     }else{
//         next()
//     }
// })


// 后置路由守卫
router.afterEach((to,from)=>{
    console.log(to,from)
    document.title = to.meta.title  || '测试系统✅'
})

export default router  