import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';
import { ViewApptComponent } from './view-appt/view-appt.component';
import { UserApptsComponent } from './user-appts/user-appts.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'searchDoctor',  pathMatch: 'full' },
  { path: 'searchDoctor', component: SearchDoctorComponent},
  { path: 'calendar', component: AppointmentCalendarComponent},
  { path: 'viewSchedule', component: ViewApptComponent},
  { path: 'userAppts', component: UserApptsComponent},
  { path: 'userProfile', component: UserProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
