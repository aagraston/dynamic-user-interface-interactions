const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    dropdown: './src/js/dropdown.js',
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'eval',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'user interface menu',
      template: './src/index.html',
      filename: './index.html',
      inject: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Drop Down Template',
      template: './src/dropdown.html',
      filename: './dropdown.html',
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
}
