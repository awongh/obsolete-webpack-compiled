const HtmlWebpackPlugin = require('html-webpack-plugin');
const ObsoleteWebpackPlugin = require('obsolete-webpack-plugin');

const supportedBrowsers = require('./supported-browsers');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/docs',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Compiled Version - obsolete webpack compiled',
      filename: 'index.html',
      template: 'src/index.ejs'
    }),
    new ObsoleteWebpackPlugin({
      template: '<div id="obsolete-browser-cont"><div id="obsolete-browser-alert"><p>Sorry, your browser is not supported.</p><p> Please try our website on a different device!</p><button id="obsoleteClose">&times;</button></div></div>',
      browsers: supportedBrowsers
    })
  ]
};
