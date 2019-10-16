import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RevAssociate } from '../revdoc-classes/rev-associate'
import dayGridPlugin from '@fullcalendar/daygrid';
import { ViewApptService } from '../view-appt.service';
import { Doctor } from '../revdoc-classes/doctor';

@Component({
  selector: './app-view-appt',
  templateUrl: './view-appt.component.html',
  styleUrls: ['./view-appt.component.css']
})
export class ViewApptComponent implements OnInit {
  title = 'revdoc-calendar';
  doctor: Doctor
  calendarEvents:any[]=[];
  calendarPlugins=[dayGridPlugin];
  constructor(private viewApptService:ViewApptService) { 
    this.doctor = new Doctor 
  }

  ngOnInit() {
    this.doctor.email = 'johnross@gmail.com';
    this.viewApptService.doctorAppts(this.doctor.email).subscribe(data=>this.calendarEvents=data);
  }
}

