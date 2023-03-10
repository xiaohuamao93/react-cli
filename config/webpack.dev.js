const path = require("path");
const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    compress: true, // 是否开启压缩
    port: 8000, // 启动端口
    hot: true, // 热模替换
    open: true, // 默认打开浏览器
    historyApiFallback: true,
    proxy: {
      // 启用请求代理，可以解决前端跨域请求的问题
      "/api": "www.maoxh.top",
    },
  },
});
