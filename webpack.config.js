const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    bundle: './src/widget.js'
  },
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/build',
    filename: '[name].js'
  },
  devtool: '#source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
