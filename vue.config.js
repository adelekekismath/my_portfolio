const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => tag === 'lottie-player'
        };
        return options;
      });

    // Configuration pour les fichiers PDF
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[hash].[ext]',
        outputPath: 'assets/pdf/',
      });

    // Configuration des flags de fonctionnalité de Vue
    config.plugin('define').tap(args => {
      const { 'process.env': env, ...rest } = args[0];
      args[0] = {
        'process.env': {
          ...env,
          __VUE_OPTIONS_API__: JSON.stringify(true),
          __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
        },
        ...rest,
      };
      return args;
    });
  }
});