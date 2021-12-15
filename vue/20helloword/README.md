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

## 不同版本说明
- 1.vue.js 与 vue.runtime.xxxx.js的区别:
    - vue.js是完整版的vue，包含核心功能和模板解析器。
    - vue.runtime.xxxx.js 是运行版的vue，只包含核心功能：没有模板解析器
- 因为vue.runtime.xxx.js没有模板解析器，所以不能在new Vue中使用template配置项需要使用render函数接收到的createElement函数去指定具体内容

##  vue.config.js配置文件
> 使用vue inspect > output.js可以查看到vue脚手架的默认配置
> 使用vue.config.js可以对脚手架进行个性化定制，详情请见：https://cli.vuejs.org/zh/config/·

## ref属性
  1. 被用来给元素或者自组件注册引用信息(id的替代者)
  2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上获取的是组件实例对象（vc）
  3. 使用方式：
     1. 打标识 <School ref="sch"><School/>   <h2 ref="xxx"> </h2>
     2. 获取：this.$refs.sch   this.$refs.xxx