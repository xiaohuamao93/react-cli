const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const commonConfig = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          "thread-loader",
          // 耗时的 loader （例如 babel-loader）
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        type: "asset",
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src/"),
    },
    extensions: [".js", ".ts", ".json", ".jsx", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = commonConfig;
