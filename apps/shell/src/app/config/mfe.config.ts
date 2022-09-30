import {
  LoadRemoteModuleOptions,
  Manifest,
  RemoteConfig,
} from '@angular-architects/module-federation';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from 'libs/boostrap-layout/src/lib/layouts/default-layout/default-layout.component';
import { routes } from '../app.module';
import { Observable } from 'rxjs';

//declare types for custommanifest which is loaded from /assets/mfe.menifest.json
export type CustomRemoteConfig = RemoteConfig & {
  exposedModule: string;
  displayName: string;
  routePath: string;
  ngModuleName: string;
};

export type CustomManifest = Manifest<CustomRemoteConfig>;

//for rebuilding microfrontend routes
export function buildRoutes(options: CustomManifest): Routes {
  const lazyRoutes: Routes = Object.keys(options).map((key) => {
    const entry = options[key];
    return {
      path: entry.routePath,
      component: DefaultLayoutComponent,
      loadChildren: () =>
        loadRemoteModule({
          type: 'manifest',
          remoteName: key,
          exposedModule: entry.exposedModule,
        }).then((m) => m[entry.ngModuleName]),
    };
  });

  return [...routes, ...lazyRoutes];
}

//!type for dynamic components

export type PluginOptions = LoadRemoteModuleOptions & {
  displayName: string;
  componentName: string;
};

//!servce for loading external components

@Injectable({
  providedIn: 'root',
})
export class WorkFlowService {
  constructor(private http: HttpClient) {}

  fetchComponents() {
    return this.http.get('/assets/workflow.json');
  }
}
