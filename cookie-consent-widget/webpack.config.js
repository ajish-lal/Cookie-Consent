const path = require("path")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'cookie-consent-widget.min.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env', '@babel/react'
          ],
          plugins: ['@babel/plugin-proposal-class-properties', "@babel/plugin-transform-runtime"]
        }
      }
    ]
  },
  mode: 'production',
  plugins: [new UglifyJsPlugin()]
}