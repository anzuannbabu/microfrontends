import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from './exposedComponents/download/download.component';
import { UploadComponent } from './exposedComponents/upload/upload.component';
import { BoostrapLayoutModule } from '@ega/boostrap-layout';
import { DefaultLayoutComponent } from 'libs/boostrap-layout/src/lib/layouts/default-layout/default-layout.component';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'registration',
    pathMatch: 'full',
  },
  {
    path: 'registration',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./modules/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    DownloadComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    BoostrapLayoutModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [
    {
      provide: 'environment', useValue: environment
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
