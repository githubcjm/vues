const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    watch: true,
    mode: 'development',
    // mode: 'production',
    entry: './src/props.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, { //改变html
                test: /\.html$/,
                use: [
                    'html-loader',
                ]
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // }
            // {
            //     test: /\.js$/,
            //     // 除了node_modules和bower_components之外
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // }
        ]
    },
    // plugins: [
    //     new UglifyJsPlugin()
    // ]
};