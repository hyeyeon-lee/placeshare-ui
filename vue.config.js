module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: ['quasar'],
  configureWebpack: {
    resolve: {
      alias: require('./aliases.config').webpack
    }
  }
};
