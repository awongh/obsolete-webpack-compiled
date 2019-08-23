const HtmlWebpackPlugin = require('html-webpack-plugin');
const ObsoleteWebpackPlugin = require('obsolete-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Compiled Version - obsolete webpack compiled',
      filename: 'index.html'
    }),
     new ObsoleteWebpackPlugin({
      template: '<div>Your browser is not supported. <button id="obsoleteClose">&times;</button></div>'
    }),
  ]
};
