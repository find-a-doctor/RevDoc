import { Component, OnInit } from '@angular/core';
import { ViewApptService } from './view-appt.service';
import { Router } from '@angular/router';
import { RevAssociate } from './revdoc-classes/rev-associate';
import { Doctor } from './revdoc-classes/doctor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 associate: RevAssociate;
 doctor: Doctor;
  constructor(private viewApptService: ViewApptService, private router: Router) {
    this.associate = new RevAssociate;
    this.doctor = new Doctor;
  }

  ngOnInit(){
    localStorage.setItem('userType', this.doctor.doctorName);
  }
}
