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
    // devServer:{
    //   proxy: {
    //     '/student': {
    //       target: 'http://localhost:5000',
    //       changeOrigin: true,  // 到服务器是否修改HOST字段，默认为true
    //       // pathRewrite: {'^/api1':''} //转发时 去掉/api1 (转发规则)
    //     },
    //     '/cars': {
    //       target: 'http://localhost:6000',
    //       changeOrigin: true,  // 到服务器是否修改HOST字段，默认为true
    //       // pathRewrite: {'^/api1':''} //转发时 去掉/api1 (转发规则)
    //     },
    //   }
    // }
  }