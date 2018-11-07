const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function hwpGeneratePage(page) {
  return new HtmlWebpackPlugin({
    filename: page +".html",
    template: Path.resolve(__dirname, '../src/' + page + '.html'),
    options: {
      interpolate: true
    }
  })
}

module.exports = {
  entry: {
    app: [Path.resolve(__dirname, '../src/scripts/index.js'), 
          Path.resolve(__dirname, '../src/scripts/contact.js'),
          Path.resolve(__dirname, '../src/scripts/drafts.js'),
        ]
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  plugins: [
    new CleanWebpackPlugin(['build'], { root: Path.resolve(__dirname, '..') }),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../public'), to: 'public' }
    ]),
    hwpGeneratePage("contact"),
    hwpGeneratePage("index"),
    hwpGeneratePage("drafts"),
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      }
    ]
  }
};
