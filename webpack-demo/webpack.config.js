const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry point
  output: {
    filename: 'main.js', // The output file name
    path: path.resolve(__dirname, 'dist'), // The output directory
  },
  mode: 'development', // Set the mode to 'development' or 'production'
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules from being processed
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript
          options: {
            presets: ['@babel/preset-env'], // Use the preset-env preset
          },
        },
      },
    ],
  },
};
