const {defineConfig} = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.codeman.ink:3000/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
})
