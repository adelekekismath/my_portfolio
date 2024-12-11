const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[hash].[ext]',
        outputPath: 'assets/pdf/',
      });
    
    config.plugin('define').tap(args => {
        const { 'process.env': env, ...rest } = args[0];
        args[0] = {
          'process.env': {
            ...env,
            __VUE_OPTIONS_API__: JSON.stringify(true),
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
          },
          ...rest,
        };
        return args;
      });
    
  }
});
