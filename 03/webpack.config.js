const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    watch: true,
    mode: 'development',
    // mode: 'production',
    entry: './src/tab.js',
    output: {
        filename: 'text.js',
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



//图片
// const path = require('path');

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// module.exports = {
//     // mode: 'development',
//     mode: 'production',
//     entry: './src/index1.js',
//     module: {
//         rules: [{
//                 test: /\.css$/,
//                 use: [
//                     'style-loader',
//                     'css-loader'
//                 ]
//             }, { //改变html
//                 test: /\.html$/,
//                 use: [
//                     'html-loader',
//                 ]
//             },
//             //图片
//             // {
//             //     test: /\.jpg|png$/,
//             //     use: ["url-loader?mimetype=image/jpg"]
//             // },
//             {
//                 test: /\.(png|svg|jpg|gif)$/,
//                 use: [
//                     'file-loader'
//                 ]
//             }
//         ]
//     },
//     output: {
//         //图片
//         publicPath: "http://cdn.example.com/[hash]/",
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),

//     },
//     plugins: [
//         new UglifyJsPlugin()
//     ]
// };