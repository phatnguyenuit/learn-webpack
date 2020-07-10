import * as path from 'path';
import webpack, { Configuration } from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
  target: 'web', // default
  entry: ['./src/index.ts'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        // loaders come from right to left css-loader => style-loader
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./public', 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 5000,
  },
};

export default config;
