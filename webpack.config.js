const HtmlWebpackPlugin = require('html-webpack-plugin');
const ObsoleteWebpackPlugin = require('obsolete-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/docs',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Compiled Version - obsolete webpack compiled',
      filename: 'index.html'
    }),
    new ObsoleteWebpackPlugin({
      template: '<div>Your browser is not supported. <button id="obsoleteClose">&times;</button></div>',
      browsers: [
        '>= 1%',
        'last 1 major version',
        'not dead',
        'Chrome >= 60',
        'Firefox >= 60',
        'Edge >= 15.15063',
        'Explorer 11',
        'iOS >= 10',
        'Safari >= 10',
        'Android >= 6',
        'not ExplorerMobile <= 11'
      ]
    }),
  ]
};
