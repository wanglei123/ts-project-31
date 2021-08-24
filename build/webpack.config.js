const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'app.js'
  },
  resolve: {
    // 模块导入扩展名处理,以下文件可以直接导入
    extensions: ['.js', '.ts', 'tsx']
  },
  devtool: 'eval-cheap-module-source-map', // 可以生成source-map
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {loader: 'ts-loader'}
        ],
        exclude: /node-modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]

}