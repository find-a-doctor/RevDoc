import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RevAssociate } from '../revdoc-classes/rev-associate'
import dayGridPlugin from '@fullcalendar/daygrid';
import { ViewApptService } from '../view-appt.service';
import { Doctor } from '../revdoc-classes/doctor';
import { Appointment } from '../revdoc-classes/appointment'

@Component({
  selector: './app-view-appt',
  templateUrl: './view-appt.component.html',
  styleUrls: ['./view-appt.component.css']
})
export class ViewApptComponent implements OnInit {
  doctor: Doctor
  appt: any;
  testAppt: string
  calendarEvents:any[]=[];
  calendarPlugins=[dayGridPlugin];
  constructor(private viewApptService:ViewApptService) { 
    this.doctor = new Doctor
    this.appt = new Appointment 
  }

  ngOnInit() {
    this.doctor.email = localStorage.getItem('user');
    // this.viewApptService.doctorAppts(this.doctor.email).subscribe(data => console.log(data))
    this.viewApptService.getAppointmentsByDoctorEmail(this.doctor.email).subscribe(data=>{
       this.appt = data
       console.log(this.appt[0].doctor.doctorName)
       this.calendarEvents=data
    });
  }
}

