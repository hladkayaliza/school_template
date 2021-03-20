const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/script.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'task-webpack.bundle.[hash].js',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssPlugin.loader,
        'css-loader',
      ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      use: 'file-loader',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)&/,
      use: 'file-loader',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: true,
      clean: true,
    }),
    new MiniCssPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
  },
}
