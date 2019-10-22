import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';


const routes: Routes = [
  { path: 'doctor/:npi', component: DoctorProfileComponent },
  { path: '', redirectTo: 'searchDoctor', pathMatch: 'full' },
  { path: 'searchDoctor', component: SearchDoctorComponent },
  { path: 'calendar', component: AppointmentCalendarComponent },
  { path: 'viewSchedule', component: SearchDoctorComponent },
  { path: 'doctorHome', component: DoctorHomeComponent }
  // { path: ['searchDoctor', id], redirectTo: 'doctor/:id', pathMatch='full' }



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
