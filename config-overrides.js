const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve("crypto-browserify"),
    buffer: require.resolve("buffer"),
    process: require.resolve("process"),
    stream: require.resolve("stream-browserify"),
    vm: false,
  };

  // Add plugins
  config.plugins = config.plugins || [];

  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.ProvidePlugin({
      process: "process",
    }),
  ];

  return config;
};
