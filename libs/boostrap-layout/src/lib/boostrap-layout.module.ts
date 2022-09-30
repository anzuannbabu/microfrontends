import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    DefaultLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
})
export class BoostrapLayoutModule {}
