import { Component, Inject, OnInit } from '@angular/core';
import {MenuService} from '@ega/boostrap-layout'

@Component({
  selector: 'ega-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public menuService: MenuService, @Inject('environment') public environment:any) {}

  ngOnInit(): void {}
}
