const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: {
    main: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    vendor: './src/vendor.js',
    hello: {
      import: './src/hello.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },

  optimization: {

    splitChunks: {

      chunks: 'all',

    },

  },
  plugins: [new HtmlWebpackPlugin({
    template:'./src/template.html', 
  })], // tambahkan nama plugins
    devtool: false, //untuk menghilangkan function eval pada bundle.js
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};