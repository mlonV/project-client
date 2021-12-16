# 笔记

## 脚手架文件结构:
    ├—— node_modules 
    ├── public  
    │   ├── favicon.ico: 页签图标
    │   └── index.html: 主页面
    ├── src
    │   ├── App.vue: 汇总所有组件
    │   ├── assets: 存放静态资源
    │   │   └── logo.png
    │   ├── components
    │   │   ├── School.vue
    │   │   └── Student.vue
    │   └── main.js: 入口文件
    ├── README.md: 应用描述文件
    ├── babel.config.js: babel配置文件
    ├── package-lock.json: 包版本管理文件
    ├── package.json: 应用包配置文件 
    └── vue.config.js:
---
## 不同版本说明
- 1.vue.js 与 vue.runtime.xxxx.js的区别:
    - vue.js是完整版的vue，包含核心功能和模板解析器。
    - vue.runtime.xxxx.js 是运行版的vue，只包含核心功能：没有模板解析器
- 因为vue.runtime.xxx.js没有模板解析器，所以不能在new Vue中使用template配置项需要使用render函数接收到的createElement函数去指定具体内容
---
##  vue.config.js配置文件
> 使用vue inspect > output.js可以查看到vue脚手架的默认配置
> 使用vue.config.js可以对脚手架进行个性化定制，详情请见：https://cli.vuejs.org/zh/config/·
---
## ref属性
```
  1. 被用来给元素或者自组件注册引用信息(id的替代者)
  2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上获取的是组件实例对象（vc）
  3. 使用方式：
     1. 打标识 <School ref="sch"><School/>   <h2 ref="xxx"> </h2>
     2. 获取：this.$refs.sch   this.$refs.xxx
```
---
## 配置项props
### props是只读的，可以中转数据去处理，具体看代码
### 功能： 让组件接收外部传过来的数据
```
        // // 1.从外部接受参数/传递数据
        // props:["name","age","male"],

        // // 2.接受参数，且指定类型接受。若类型错误则报错，但不影响页面输出
        // props:{
        //     name:String,
        //     age:Number,
        //     male:String
        // }

        // 3.传递数据接受参数，指定默认值，且有必须选项
        props:{
            name:{
                type:String,
                required:true  // 是否为必须的
            },
            age:{
                type:Number,
                default:19     // 默认值
            },
            male:{
                type:String,
            }
        }
```


---
## mixin(混入，混合)
    功能：可以吧多个组件公用的配置提取成一个混入对象
    使用方式：
    1.定义混合
        export const mixin =  {
            methods:{
                showMsg(){
                    alert(this.name)
                }
            },
        }

    2.导入
        1.全局混入： Vue.mixin(xxx)
        2.局部混入： mixins:['xxx']


---
## 插件
功能：用于增强Vue
本质：包含install方法的一个对象，install的第一个参数是Vue，第二个参数是插件使用者传递的数据。  
定义插件:  
```  
export default {
    // 定义插件和使用插件
    install(Vue){
        console.log("@ install",Vue),
    
        Vue.filter('MySlice',function(value){
            return value.slice(0,4)
        }),
        Vue.mixin({
            methods: {
                showMsg(){
                    alert(this.name)
                }
            },
        }),
        // 全局加一个方法，vm和vc都可以使用
        Vue.prototype.hello = ()=>{alert('调用原型上的alert方法')}
    }   
}  
```
使用插件：  
```  
Vue.use()
```


---
## 样式作用域
```
作用：让央视在局部生效，防止冲突。
写法：<style scoped>
```