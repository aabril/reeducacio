var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './panel/index.js',
  output: { path: __dirname, filename: 'public/panel/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      // {
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     loader: 'babel'
      // },
      {
          //postcss is not being used anymore after i used an offline version of Roboto font. kept as a reference
          test: /\.scss$/,
          loader: 'style!css!sass'
      },
      // {
      //     test: /\.(png|jpg)$/,
      //     loader: 'url-loader?limit=8192'
      // },
      {
          test: /\.(png|jpg)$/,
          loader: 'file-loader'
      },


    ]
  },
};