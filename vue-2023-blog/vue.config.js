const { defineConfig } = require('@vue/cli-service')
const TerserPlugin = require("terser-webpack-plugin")

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8090,
    proxy:{
      '/api': {
        target: 'http://localhost:3000',
      }
    }
  },
  configureWebpack: {
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    }
  }
})
