const path = require('path');

const isDevelop = process.env.NODE_ENV === 'development';

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        img: path.resolve(__dirname, './src/assets/img'),
        css: path.resolve(__dirname, './src/assets/css'),
        font: path.resolve(__dirname, './src/assets/font')
      }
    }
  },
  devServer: {
    // proxy: {
    //   '^/AlpasqLocalAdmin': {
    //     target: 'http://59.16.139.202:9088',
    //     changeOrigin: true
    //   }
    // }
  },
  filenameHashing: isDevelop,
  productionSourceMap: isDevelop
};
