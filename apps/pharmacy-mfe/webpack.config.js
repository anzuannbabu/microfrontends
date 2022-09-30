const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'pharmacyMfe',

  exposes: {
    //'./Component': './apps/pharmacy-mfe/src/app/app.component.ts',
    './pharmacy.module':
      './apps/pharmacy-mfe/src/app/modules/pharmacy/pharmacy.module.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
