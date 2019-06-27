const path = require('path')
const CleanComments = require('./plugins/cleanComments.js')
const MyCleanWebpackPlugin = require('./plugins/myCleanWebpackPlugin.js')
const testPlugin = require('./plugins/testPlugin.js')
const ClearConsolePlugin = require('./plugins/clearConsolePlugin.js')
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  resolveLoader: {
    modules: ['node_modules', './loaders']
  },
  entry: {
    main: path.resolve(__dirname, './src/main.js')
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }]
      },
      {
        test: /\.js$/,
        use: [
          // 'replaceContent', 
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  useBuiltIns: 'entry'
                }]
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'sunCssLoader'
        ]
      },
    ]
  },
  plugins: [
    new CleanComments(),
    new ClearConsolePlugin(),
    new testPlugin({
      name: 'sunyangyang'
    }),
    new MyCleanWebpackPlugin({
      path: path.resolve(__dirname, 'dist')
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}