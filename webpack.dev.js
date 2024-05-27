const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path =  require('path');

module.exports = merge(config,{
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: true,
    port: 1000,
    liveReload: true,
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    assetModuleFilename: 'img/[name][ext]',
    clean: true, //untuk tidak terlalu banyak file ketika ada perubahan
  },
  plugins: [new MiniCssExtractPlugin()],
});