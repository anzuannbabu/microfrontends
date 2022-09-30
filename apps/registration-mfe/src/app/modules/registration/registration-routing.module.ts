import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistrationComponent } from './registration.component';
import { RegisterPatientComponent } from './pages/register-patient/register-patient.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'register-patient',
        component: RegisterPatientComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
