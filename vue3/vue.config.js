// 备份放在此层结构，应该放外外层
module.exports = {
    pages: {
      index: {
        // page 的入口
        entry: 'src/main.js',
      },
    },
    //  // 方法1，直接配置
    // devServer:{
    //   proxy: 'http://localhost:5000'
    // }
    // //方法2
    devServer:{
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8080',
          changeOrigin: false,  // 到服务器是否修改HOST字段，默认为true
          pathRewrite: {'^/api':''} //转发时 去掉/api1 (转发规则)
        },

      }
    }
  }