const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

require('dotenv').config();

const isDevelopment = process.env.NODE_ENV === 'development';

const shareable = require('./shareable');

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/index.tsx', // Входной файл приложения
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'), // Добавлено '../'
        clean: true, // Очистка директории dist перед сборкой
        publicPath: '/', // Базовый путь для всех ресурсов
    },
    ...shareable.config,
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // Поддержка расширений файлов
        plugins: [
            new TsconfigPathsPlugin(), // Плагин для поддержки алиасов из tsconfig.json
        ],
    },
    devServer: {
        historyApiFallback: true, // Для поддержки маршрутов React Router
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]_[hash:base64:5]'
                            }
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ],
                include: /src/
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                include: /src/
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('src', 'template.hbs'),
        }),
        // isDevelopment && new ReactRefreshWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin(), // Проверка типов в фоне
    ].filter(Boolean), // Убираем null-значения из массива
};
