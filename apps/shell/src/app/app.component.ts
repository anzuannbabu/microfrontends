import {
  getManifest,
  loadRemoteModule,
} from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@ega/auth';
import { Observable } from 'rxjs';
import {
  buildRoutes,
  CustomManifest,
  CustomRemoteConfig,
  PluginOptions,
  WorkFlowService,
} from './config/mfe.config';
import { MenuService } from '@ega/boostrap-layout';
import { DefaultLayoutComponent } from 'libs/boostrap-layout/src/lib/layouts/default-layout/default-layout.component';
@Component({
  selector: 'ega-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  user$: Observable<string>;
  form: FormGroup = new FormGroup({
    username: new FormControl(),
  });
  remotes: CustomRemoteConfig[] = [];
  components: PluginOptions[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private menuService: MenuService,
    private workflowService: WorkFlowService
  ) {
    //this.authService.loggedUser = 'Ali';
    this.user$ = this.authService.loggedInUser$;
  }

  async ngOnInit(): Promise<void> {
    this.login();
    const manifest = getManifest<CustomManifest>();

    const routes = buildRoutes(manifest);

    this.router.resetConfig(routes);

    this.remotes = Object.values(manifest);

    this.menuService.setNavbarMenu(this.remotes);

    this.loadExternalComponents();

    const DownloadComponent = await loadRemoteModule({
      type: 'module',
      //remoteName: 'registrationMfe',
      remoteEntry: 'http://localhost:4401/remoteEntry.js',
      exposedModule: './Download',
    }).then((m) => m['DownloadComponent']);

    const route = {
      path: 'download',
      component: DefaultLayoutComponent,
      children: [
        {
          path: '',
          component: DownloadComponent
        }
      ]
    };

    this.router.resetConfig([...routes, route]);
  }

  loadExternalComponents() {
    this.workflowService.fetchComponents().subscribe((res: any) => {
      console.log('components', res);
      this.components = res;
    });
  }

  login() {
    console.log(this.form.value.username);
    this.authService.setLoggedInUser(this.form.value.username);

    this.authService.login();
  }
}
