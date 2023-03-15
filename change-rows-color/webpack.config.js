const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html',
})

module.exports = {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        },
        open: true,
        port: 80,
    },
    plugins: [htmlPlugin],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}
