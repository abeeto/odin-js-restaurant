const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "onejstorule.js",
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"]
    },
    module: {
        rules: [
            {test: /\.txt$/, use: "raw-loader", },
            {test: /\.css$/i, use: ["style-loader", "css-loader"], },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {test: /\.html$/i, loader: "html-loader",},
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: "./src/template.html"})],

}