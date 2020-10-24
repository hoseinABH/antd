const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#3a86ff',
              '@warning-color': '#8338ec',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
