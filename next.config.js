/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/newline-after-import */
const withImages = require('next-images');

const isProd = (process.env.NODE_ENV || 'production') === 'production';

const exportPathMap = () => {
  return {
    '/': { page: '/' }
  };
};

const assetPrefix = isProd ? '/samina-zafar-foundation' : '';

const webpack = config => {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix)
    })
  );

  return config;
};

module.exports = {
  withImages,
  exportPathMap,
  assetPrefix
  // webpack
};
