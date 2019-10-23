import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { ViewApptComponent } from './view-appt/view-appt.component';
import { AppComponent } from './app.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { ScheduleApptComponent } from './schedule-appt/schedule-appt.component';
import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';
// import { LoginPageComponent} from './login-page/login-page.component'

const routes: Routes = [
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent},
  { path: 'login/associateHome', component: AppComponent},
  { path: 'doctorHome', component: DoctorProfileComponent},
  { path: 'searchDoctor', component: SearchDoctorComponent},
  { path: 'viewSchedule', component: AppointmentCalendarComponent},
  { path: 'schedule-appt', component: ScheduleApptComponent},
  { path: 'doctor-profile', component: DoctorProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
