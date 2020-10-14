const Timestamp = new Date().getTime();

module.exports = {
    publicPath: './',
    outputDir: 'dist',

    configureWebpack: {
        output: {
            // 输出重构【模块名称.hash值.时间戳】
            filename: `[name].[hash].${Timestamp}.js`,
            chunkFilename: `[name].[hash].${Timestamp}.js`
        }
    },

    lintOnSave: false,  //关闭eslint校验

    productionSourceMap:false, //压缩打包体积
}
