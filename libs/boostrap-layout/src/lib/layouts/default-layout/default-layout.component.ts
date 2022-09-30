import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'ega-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  constructor(public menuService: MenuService,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cdr.detectChanges();
  }
}
