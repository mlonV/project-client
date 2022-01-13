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