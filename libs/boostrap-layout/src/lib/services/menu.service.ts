import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SidebarMenu {
  label: string;
  url: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private _navbarMenu = new BehaviorSubject<any[]>([]);
  public navbarMenu$ = this._navbarMenu.asObservable();

  private _sidebarMenu = new BehaviorSubject<SidebarMenu[]>([]);
  public sidebarMenu$ = this._sidebarMenu.asObservable();

  constructor() {}

  setNavbarMenu(menu: any[]) {
    this._navbarMenu.next(menu);
  }

  setSidebarMenu(menu: SidebarMenu[]) {
    this._sidebarMenu.next(menu);
  }

  unsetSidebarMenu() {
    this._sidebarMenu.next([]);
  }
}
