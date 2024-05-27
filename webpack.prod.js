const path = require('path');
const glob = require("glob");
const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "src"),
};


module.exports = merge(config,{
	mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'img/[hash][ext]',
    clean: true, //untuk tidak terlalu banyak file ketika ada perubahan
  },
  optimization: {
    minimizer: [
      "...",
      new CssMinimizerPlugin(),
      // new ImageMinimizerPlugin({
      //   minimizer: {
      //     implementation: ImageMinimizerPlugin.squooshMinify,
      //     options: {
      //       // Your options for `squoosh`
      //     },
      //   },
      // }),
    ],
  },
  
  plugins: [new MiniCssExtractPlugin({
    filename: '[contenthash].css',
  }),
    new PurgeCSSPlugin({
    paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ],
});