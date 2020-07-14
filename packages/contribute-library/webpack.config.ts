import path from 'path';
import webpack, { Configuration } from 'webpack';

// Reference: https://webpack.js.org/configuration/configuration-languages/#typescript

const config: Configuration = {
  target: 'node',
  entry: ['./src/index.ts'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin()],
  resolve: {
    extensions: ['.ts'],
  },
};

export default config;
