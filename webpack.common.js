var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry:{
        main:  "./src/index.js"
    },
    
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        chunks: ["main"]
    }
    ),
    

],
//no ten
resolve: {
    extensions: ['.js', '.jsx'],
},

    module: {
        rules: [
            
            {
                test: /\.(svg|png|jfif|jpg|jpeg|gif|eot|woff|ttf)$/,
                use:{
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets"
                    }
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }

        ]
    }
};