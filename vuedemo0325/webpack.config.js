const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//引入html-webpack-plugin的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//引入webpack插件
const webpack = require('webpack')
//引入clean-webpack-plugin的插件
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 204811, //如果小于这个值(bite)就会以base64的方式打包在js里，而不是打包为一个文件,
                    esModule: false
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //注意顺序
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    esModule:false
                }
            }
        ]
    },

    //配置devserver
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html' //以根目录下的index为模板，打包时在dist目录下生成index，并将bundle注入，
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
}