const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: { proxy: { '/api': { target: 'http://1.235.195.83:8070', changeOrigin: true, secure: false } } }
})
