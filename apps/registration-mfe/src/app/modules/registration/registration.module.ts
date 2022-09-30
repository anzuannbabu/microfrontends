import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { BoostrapLayoutModule } from '@ega/boostrap-layout';
import { RegisterPatientComponent } from './pages/register-patient/register-patient.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    DashboardComponent,
    RegisterPatientComponent,
  ],
  imports: [CommonModule, RegistrationRoutingModule, BoostrapLayoutModule],
})
export class RegistrationModule {}
