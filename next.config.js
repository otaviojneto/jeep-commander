const withImages = require('next-images');
const isProd = process.env.NODE_ENV === 'production';

const BASE_PREFIX = '/';

module.exports = withImages({
  esModule: true,
  assetPrefix: BASE_PREFIX,
  env: {
    BASE_PREFIX: BASE_PREFIX,
  },
});