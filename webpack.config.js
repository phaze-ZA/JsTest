const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
 mode: 'development',
 devtool: 'eval',
  entry: "./src/js/game.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins:[
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new CopyWebpackPlugin({
        patterns: [
            { from: "./src/css" },
            { from: "./src/assets",
              to:"./assets" },
        ]
    })
  ],
   module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /node_modules/
       },
       {
         test: /\.(gltf)$/,
         use: [
           {
             loader: "gltf-webpack-loader"
           }
         ]
       },
       {
         test: [/\.(bin)$/, /\.(jpg)$/, /\.(png)$/],
         use: [
           {
             loader: 'file-loader',
             options: {
               name: '[name]-[hash].[ext]'
             }
           }
         ]
       }
     ]
   },
};