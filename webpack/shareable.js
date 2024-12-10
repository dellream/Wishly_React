const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
    config: {
        resolve: {
            modules: ['node_modules'],
            extensions: ['.js', '.ts', '.tsx'],
            plugins: [new TsconfigPathsPlugin()] // Подключаем плагин для алиасов из tsconfig.json
        },
        stats: {
            preset: 'normal',
            modules: false,
        },
        performance: {
            hints: false,
        },
    },
};
