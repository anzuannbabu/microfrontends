import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@ega/auth';
import { MenuService } from '@ega/boostrap-layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'ega-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit,OnDestroy {
  user$: Observable<string>;
  constructor(
    private authService: AuthService,
    private menuService: MenuService
  ) {
    this.user$ = this.authService.loggedInUser$;
  }

  ngOnDestroy(): void {
    this.menuService.unsetSidebarMenu()
  }

  ngOnInit(): void {
    this.menuService.setSidebarMenu([
      {
        label: 'Patient List',
        url: '/list',
      },
      {
        label: 'Register Patient',
        url: '/registration/register-patient',
      },
      {
        label: 'Patient List',
        url: '/list',
      },
      {
        label: 'Patient List',
        url: '/list',
      },
    ]);
  }


}
