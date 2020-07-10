const path = require('path');

const basic_config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist', 'basic_config'),
    filename: 'bundle.js',
  },
};

const entry_config = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'entry_config'),
    // filename will be `main.js`
  },
};

const arr_entry_config = {
  entry: {
    main: ['./src/index.js', './src/script.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'arr_entry_config'),
    // filename will be `main.js`
  },
};

const multiple_entry_config = {
  entry: {
    main: './src/index.js',
    script: './src/script.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'multiple_entry_config'),
    // filename will be `main.js` and `script.js`
  },
};

const multiple_entry_output_config = {
  ...multiple_entry_config,
  output: {
    path: path.resolve(__dirname, 'dist', 'multiple_entry_output_config'),
    filename: '[name].bundle.js',
  },
};

const multiple_entry_output_prod_config = {
  ...multiple_entry_output_config,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist', 'multiple_entry_output_prod_config'),
    filename: '[name].[id].bundle.js',
  },
};

module.exports = [
  basic_config,
  entry_config,
  arr_entry_config,
  multiple_entry_config,
  multiple_entry_output_config,
  multiple_entry_output_prod_config,
];