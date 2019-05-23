

module.exports = {
    publicPath: './',  //根路径，从 Vue CLI 3.3 起已弃用，请使用publicPath。
    outputDir: 'dist', //构建输入目录
    assetsDir: 'assets', //静态资源目录(js,css,image,fonts)
    lintOnSave: false,  //是否开启eslink保存检测，有效值：true||false||'error'
    devServer: {
        open: true,   //自动弹出页面，有效值：true||false 
        //port: 8081,  //端口号，默认是8080,避免和其他项目冲突
        https: false, //默认是false,最好还是false,开启true会有警告
        hotOnly: true,   //热模块更新，新增模块时，能更好的帮助我们更新，vue本身就有热更新，建议为false,有效值：true||false
    },
    // build: {
    //     assetsPublicPath: './',index.html里面引用资源的的相对地址
    // },
}