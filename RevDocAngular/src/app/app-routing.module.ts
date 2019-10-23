import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { ViewApptComponent } from './view-appt/view-appt.component';
import { UserApptsComponent } from './user-appts/user-appts.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';
import { AppComponent } from './app.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { ScheduleApptComponent } from './schedule-appt/schedule-appt.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'doctorHome', component: DoctorProfileComponent},
  // { path: 'ex-dr-page', component: DoctorProfileComponent },
  // { path: 'doctor/:npi', component: DoctorProfileComponent },
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  { path: 'searchDoctor', component: SearchDoctorComponent},
  { path: 'calendar', component: AppointmentCalendarComponent},
  { path: 'viewSchedule', component: AppointmentCalendarComponent},
  { path: 'schedule-appt', component: ScheduleApptComponent},
  { path: 'userProfile', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
