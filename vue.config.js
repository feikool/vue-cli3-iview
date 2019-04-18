module.exports = {
    publicPath: '/',
    // devServer: {
    //     proxy: {
    //         '/api/*': {
    //             'target': process.env.VUE_APP_PROXY_SERVER,
    //             'changeOrigin': true,
    //             'pathRewrite': {
    //                 '^/api': '/api'
    //             }
    //         }
    //     }
    // },
    chainWebpack: config => {
        const vueRules = config.module.rule('vue')
        vueRules.use('iview-loader').loader('iview-loader').tap(options => ({
            ...options,
            prefix: true
        })).end()
        config
            .entry('index')
            .add('babel-polyfill')
    },
    productionSourceMap: false
}