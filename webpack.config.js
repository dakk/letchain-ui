const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: __dirname + '/app/explorer.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/',
    filename: 'explorer.min.js'
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.min'
    },
    extensions: ['.js', '.vue']
  },
  plugins: [
    new UglifyJSPlugin()
  ],
  module: {
    rules: [
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000' 
      }
    ]
  }
}
