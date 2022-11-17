const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './client/index.js',
    output : {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js',
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true,
        static: {
            directory: path.join(__dirname, 'build'),
            publicPath: '/'
        },
        proxy: {
            //this calls database at 'api'
            '/api': 'http://localhost:3000'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack',
            template: './client/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
}