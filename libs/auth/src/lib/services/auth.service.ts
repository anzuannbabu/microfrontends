import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {AppEnviroment} from '@ega/api-settings'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // public loggedUser: string = '';
  private _loggedInUser = new BehaviorSubject<string>('');
  public loggedInUser$ = this._loggedInUser.asObservable();
  constructor(@Inject('environment') public environment: AppEnviroment) {}

  public setLoggedInUser(user: string) {
    this._loggedInUser.next(user);
  }

  login() {
    //login url
    console.log(this.environment.userApiUrl);
  }
}
