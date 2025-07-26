const path = require('path');

module.exports = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // <- disables the default image optimization
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};
