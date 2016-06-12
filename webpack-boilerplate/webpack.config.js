const path = require('path');
const webpack = require('webpack');

// SETUP: See step (1) below

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    // (1) Direct to main entry point
    './public/app.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: [ 'react', 'es2015', 'stage-0' ],
        },
      }, {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: __dirname,
      },
    ],
  },
  resolve: {
    root: [
      path.resolve('./public'),
    ],
  },
};
