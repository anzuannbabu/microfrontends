import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyComponent } from './pharmacy.component';
import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { DashabordComponent } from './pages/dashabord/dashabord.component';

@NgModule({
  declarations: [PharmacyComponent, DashabordComponent],
  imports: [CommonModule, PharmacyRoutingModule],
})
export class PharmacyModule {}
