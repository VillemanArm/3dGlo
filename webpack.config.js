const path = require('path') // модуль, собирающий путь

module.exports = {
    // context: path.resolve(__dirname, 'src'), //смена базовой директории для путей

    entry: {
        filename: path.resolve(__dirname, 'src/index.js'),
    },
    output: {        
        path: path.join(__dirname, 'dist', 'js'), // сборка пути из имен директорий и файлов
        filename: 'main.js',
    },
    devServer: {
        compress: true,
        hot: true,
        watchFiles: path.resolve(__dirname, 'src/index.js'),
        static: {
            
            directory: path.join(__dirname, 'dist'),           
        }
    }
}