const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
            },
            extensions: ['.js', '.ts', '.tsx', '.vue', '.json'],
        },
    }
}