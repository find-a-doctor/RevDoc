import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { ViewApptComponent } from './view-appt/view-appt.component';
// import { LoginPageComponent} from './login-page/login-page.component'

const routes: Routes = [
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent},
  { path: 'searchDoctor', component: SearchDoctorComponent},
  { path: 'viewSchedule', component: ViewApptComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
