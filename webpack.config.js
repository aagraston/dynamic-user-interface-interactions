const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    dropdown: './src/js/dropdown.js',
    mobilemenu: './src/js/mobilemenu.js',
    imageslider: './src/js/imageslider.js',
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.s[ac]ss/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: '[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [['optipng', { optimzationLevel: 5 }]],
        },
      },
    }),
    new HtmlWebpackPlugin({
      title: 'user interface menu',
      template: './src/index.html',
      filename: './index.html',
      inject: true,
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'Drop Down Template',
      template: './src/dropdown.html',
      filename: './dropdown.html',
      inject: true,
      chunks: ['dropdown'],
    }),
    new HtmlWebpackPlugin({
      title: 'Mobile Menu Template',
      template: './src/mobilemenu.html',
      filename: './mobilemenu.html',
      inject: true,
      chunks: ['mobilemenu'],
    }),
    new HtmlWebpackPlugin({
      title: 'Image Slider Template',
      template: './src/imageslider.html',
      filename: './imageslider.html',
      inject: true,
      chunks: ['imageslider'],
    }),
  ],
}
