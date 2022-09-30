import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoostrapLayoutModule } from '@ega/boostrap-layout';
import { DefaultLayoutComponent } from 'libs/boostrap-layout/src/lib/layouts/default-layout/default-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { PluginProxyComponent } from './config/plugi-proxy.component';
import { environment } from '../environments/environment';



export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      // {
      //   path: 'download',
      //   component:  DownloadComponent,
      // },
      // {
      //   path: 'registration',
      //   loadChildren: () =>
      //     loadRemoteModule({
      //       type: 'manifest',
      //       remoteName: 'registrationMfe',
      //       //remoteEntry: 'http://localhost:4401/remoteEntry.js',
      //       exposedModule: './registration.module',
      //     }).then((m) => m.RegistrationModule),
      // },
      // {
      //   path: 'pharmacy',
      //   loadChildren: () =>
      //     loadRemoteModule({
      //       // type: 'module',
      //       // remoteEntry: 'http://localhost:4402/remoteEntry.js',
      //       type: 'manifest',
      //       remoteName: 'pharmacyMfe',
      //       exposedModule: './pharmacy.module',
      //     }).then((m) => m.PharmacyModule),
      // },
    ],
  },
];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, PluginProxyComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BoostrapLayoutModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'environment', useValue: environment
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
