import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
 import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditDoctorProfileComponent } from './edit-doctor-profile/edit-doctor-profile.component';
import { LicenseComponent } from './license/license.component';
import { LocationComponent } from './location/location.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { EditDocAvailComponent } from './edit-doc-avail/edit-doc-avail.component';
import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { ScheduleApptComponent } from './schedule-appt/schedule-appt.component';
import { ConfirmApptComponent } from './confirm-appt/confirm-appt.component';
import { ViewApptComponent } from './view-appt/view-appt.component';
import { UserApptsComponent } from './user-appts/user-appts.component';
import { DocorApptsComponent } from './docor-appts/docor-appts.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { FollowDoctorComponent } from './follow-doctor/follow-doctor.component';
import { DoctorRatingsComponent } from './doctor-ratings/doctor-ratings.component';
import { DoctorFeedbackComponent } from './doctor-feedback/doctor-feedback.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    EditDoctorProfileComponent,
    LicenseComponent,
    LocationComponent,
    SpecialityComponent,
    ConditionsComponent,
    InsuranceComponent,
    EditDocAvailComponent,
    AppointmentCalendarComponent,
    SearchDoctorComponent,
    ScheduleApptComponent,
    ConfirmApptComponent,
    ViewApptComponent,
    UserApptsComponent,
    DocorApptsComponent,
    DoctorProfileComponent,
    FollowDoctorComponent,
    DoctorRatingsComponent,
    DoctorFeedbackComponent,
    NavbarComponent,
    JwPaginationComponent,
    DoctorFeedbackComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    HttpClientModule,
    CommonModule,
    jqxSchedulerModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    jqxButtonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
