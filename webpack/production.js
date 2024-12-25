// const path = require('path');
// const htmlWebpackPlugin = require('html-webpack-plugin');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
// const webpack = require('webpack');
//
// require('dotenv').config();
//
// const isProduction = process.env.NODE_ENV === 'production';
//
// const shareable = require('./shareable');
//
// module.exports = {
//     mode: isProduction ? 'production' : 'development',
//     entry: './src/index.tsx',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, '../dist'),
//         clean: true,
//         publicPath: '/',
//     },
//     ...shareable.config,
//     resolve: {
//         extensions: ['.tsx', '.ts', '.js'],
//         plugins: [new TsconfigPathsPlugin()],
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(ts|tsx)$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/,
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     'style-loader',
//                     {
//                         loader: 'css-loader',
//                         options: {
//                             modules: {
//                                 localIdentName: '[local]_[hash:base64:5]',
//                             },
//                         },
//                     },
//                     'postcss-loader',
//                     'sass-loader',
//                 ],
//                 include: /src/,
//             },
//             {
//                 test: /\.(png|jpe?g|gif|svg|webp)$/i,
//                 type: 'asset/resource',
//             },
//             {
//                 test: /\.hbs$/,
//                 loader: 'handlebars-loader',
//                 include: /src/,
//             },
//         ],
//     },
//     plugins: [
//         new htmlWebpackPlugin({
//             filename: 'index.html',
//             template: path.resolve('src', 'template.hbs'),
//         }),
//         new ForkTsCheckerWebpackPlugin(),
//         new webpack.DefinePlugin({
//             'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
//             'process.env.REACT_APP_PRODUCTION_URL': JSON.stringify(process.env.REACT_APP_PRODUCTION_URL),
//             'process.env.REACT_APP_DEVELOPMENT_URL': JSON.stringify(process.env.REACT_APP_DEVELOPMENT_URL),
//         }),
//     ],
// };
