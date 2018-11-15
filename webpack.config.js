const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const webpack = require('webpack');
module.exports = {
	// mode: 'production',//生产模式
	mode: 'development',//开发模式
	// entry: './src/index.js',//入口
   entry: {
     // app: './src/index.js',
     // print: './src/print.js'
     app: './src/index.js'
  },
  //开发使用，生产不需要
  devtool: 'inline-source-map',
  devServer: {
     contentBase: './dist',
     hot: true
  },
   module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'Output Management'
     })
      // new webpack.NamedModulesPlugin(),
      // new webpack.HotModuleReplacementPlugin()
  ],
	output: { //出口 
    	// filename: 'bundle.js',//打包文件名称
      filename: '[name].bundle.js',//打包文件名称 
    	path: path.resolve(__dirname, 'dist')
    	//所有输出文件的目标路径,必须是绝对路径
    	// publicPath:'/',
    	//(公共路径) 输出解析文件的目录，url 相对于 HTML 页面
  	},
    //为了从 JavaScript 模块中 import 一个 CSS 文件，你需要在 module 配置中 安装并添加 style-loader 和 css-loader：
     module: {
        rules: [
          {
            test: /\.css$/,
            //以 .css 结尾的全部文件，
            //都将被提供给 style-loader 和 css-loader
            use: [
              'style-loader',
              'css-loader'
                ]
            },
            //背景和图标,图片,使用 file-loader
            //内容混合到 CSS 中
            {
             test: /\.(png|svg|jpg|gif)$/,
             use: [
               'file-loader'
             ]
           },
           //字体
           //file-loader 和 url-loader 可以接收并加载任何文件
           {
             test: /\.(woff|woff2|eot|ttf|otf)$/,
             use: [
               'file-loader'
             ]
           },
           //加载数据
           //如 JSON 文件，CSV、TSV 和 XML
            {
             test: /\.(csv|tsv)$/,
             use: [
               'csv-loader'
             ]
           },
           {
             test: /\.xml$/,
             use: [
               'xml-loader'
             ]
           }
        ]
    }
};