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
    // this.svc.allAppts().subscribe(data=>this.calendarEvents=data);
  }
}

