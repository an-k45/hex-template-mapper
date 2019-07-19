const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: 'index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
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
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
       template: "index.html"
    })
  ]
};

module.exports = config;

// NOTE: Relevant tutorials:
// https://codeburst.io/yet-another-beginners-guide-to-setting-up-a-react-project-part-1-bdc8a29aea22
// https://scotch.io/@deityhub/settingup-reactjs-using-webpack-4-and-babel-7-the-definitive-guide
// https://itnext.io/from-zero-to-deploy-set-up-react-stack-with-webpack-3-20b57d6cb8d7
// https://www.valentinog.com/blog/babel/
//
// NOTE: Deploying:
// https://www.pixventive.com/deploying-react-to-github-pages/
// https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220
