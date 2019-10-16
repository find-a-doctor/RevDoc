import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';


const routes: Routes = [
  { path: 'ex-dr-page', component: DoctorProfileComponent },
  { path: 'doctor/:npi', component: DoctorProfileComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
