const path = require('path');
const webpack = require('webpack');

const config = {
  entry: 'index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        }
      },
    ],
  },
};

module.exports = config;

// NOTE: Relevant tutorials:
// https://codeburst.io/yet-another-beginners-guide-to-setting-up-a-react-project-part-1-bdc8a29aea22
// https://scotch.io/@deityhub/settingup-reactjs-using-webpack-4-and-babel-7-the-definitive-guide
// https://itnext.io/from-zero-to-deploy-set-up-react-stack-with-webpack-3-20b57d6cb8d7
// https://www.valentinog.com/blog/babel/
