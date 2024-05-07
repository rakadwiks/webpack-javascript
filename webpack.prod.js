const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path =  require('path');

module.exports = merge(config,{
	mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[contenthash].js',
    assetModuleFilename: 'img/[hash][ext]',
    clean: true, //untuk tidak terlalu banyak file ketika ada perubahan
  },
  plugins: [new MiniCssExtractPlugin({
    filename: '[contenthash].css',
  })],
});