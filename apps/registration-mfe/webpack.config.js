const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'registrationMfe',

  exposes: {
    // './Component': './apps/registration-mfe/src/app/app.component.ts',
    './Download':
      './apps/registration-mfe/src/app/exposedComponents/download/download.component.ts',
    './Upload':
      './apps/registration-mfe/src/app/exposedComponents/upload/upload.component.ts',
    './registration.module':
      './apps/registration-mfe/src/app/modules/registration/registration.module.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
  sharedMappings: ['@ega/auth', '@ega/boostrap-layout'],
});
