const path = require('path');
const jsConfig = require('./jsconfig.json');

module.exports = {
  target: 'node',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve(jsConfig.compilerOptions.baseUrl),
    ],
  },
};
