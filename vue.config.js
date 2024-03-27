const { defineConfig } = require('@vue/cli-service')
const publicPath = process.env.NODE_ENV === 'production' ? '/portfolio-vuejs/' : '/'
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: publicPath,
})
