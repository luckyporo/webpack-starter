const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        // use: [
        //   // {
        //   //   loader: 'file-loader',
        //   //   options: { name: '[name].[hash:8].[ext]', outputPath: 'img' },
        //   // },
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       name: '[name].[hash:8].[ext]',
        //       limit: 10 * 1024,
        //       outputPath: 'img',
        //     },
        //   },
        // ],
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:6].[ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:6].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-demo',
      template: './public/index.html',
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: './',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
};
