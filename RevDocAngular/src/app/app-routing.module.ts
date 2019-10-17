import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { ViewApptComponent } from './view-appt/view-appt.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  // { path: '/', redirectTo: 'homePage',  pathMatch: 'full' },
  { path: 'searchDoctor', component: SearchDoctorComponent},
  { path: 'viewSchedule', component: ViewApptComponent},
  // { path: 'homePage', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
