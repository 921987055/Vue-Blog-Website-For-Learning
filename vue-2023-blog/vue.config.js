const { defineConfig } = require('@vue/cli-service')
const TerserPlugin = require("terser-webpack-plugin")
const CompressionWebpackPlugin = require('compression-webpack-plugin')

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
    },
    plugins: [
      new CompressionWebpackPlugin({
        // algorithm: 'gzip', // 使用 gzip 压缩
        test: /\.js$|\.html$|\.css$/, // 匹配文件名
        // filename: '[path].gz[query]', // 压缩后的文件名(保持原文件名, 后缀加 .gz)
        minRatio: 1, // 压缩率小于1才会压缩
        threshold: 10240, // 对超过10k的数据压缩
        deleteOriginalAssets: true // 是否删除未压缩的源文件, 谨慎设置, 若果希望提供非gzip的资源, 可不设置或者设置为 false
      }),
    ],
  }
})
