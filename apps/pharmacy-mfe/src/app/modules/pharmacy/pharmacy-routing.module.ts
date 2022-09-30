import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PharmacyComponent } from './pharmacy.component';
import { DashabordComponent } from './pages/dashabord/dashabord.component';

const routes: Routes = [
  {
    path: '',
    component: PharmacyComponent,
    children: [
      {
        path: '',
        component: DashabordComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyRoutingModule {}
