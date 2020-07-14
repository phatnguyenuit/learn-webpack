import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

// Reference: https://webpack.js.org/configuration/configuration-languages/#typescript

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
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/styles'),
          to: path.resolve(__dirname, 'dist/styles'),
        },
      ],
    }),
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
    liveReload: true,
    open: true,
  },
};

export default config;
