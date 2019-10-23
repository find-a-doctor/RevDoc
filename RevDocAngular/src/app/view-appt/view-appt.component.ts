import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RevAssociate } from '../revdoc-classes/rev-associate'
import dayGridPlugin from '@fullcalendar/daygrid';
import { ViewApptService } from '../view-appt.service';

@Component({
  selector: './app-view-appt',
  templateUrl: './view-appt.component.html',
  styleUrls: ['./view-appt.component.css']
})
export class ViewApptComponent implements OnInit {
  title = 'revdoc-calendar';
  calendarEvents:any[]=[];
  calendarPlugins=[dayGridPlugin];
  constructor(private svc:ViewApptService) { }

  ngOnInit() {
    // this.svc.allAppts().subscribe(data=>this.calendarEvents=data);
  }
}

