module.exports = {
  webpack(config) {
    // this is used to be able to import svg as components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
