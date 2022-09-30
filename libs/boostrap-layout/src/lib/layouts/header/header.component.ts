import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'ega-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menu$: Observable<any[]> = of([]);
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menu$ = this.menuService.navbarMenu$;
  }
}
