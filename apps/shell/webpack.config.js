const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    // "pharmacyMfe": "http://localhost:4200/remoteEntry.js",
    // "registrationMfe": "http://localhost:4200/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
  sharedMappings: ['@ega/auth','@ega/boostrap-layout'],
});
