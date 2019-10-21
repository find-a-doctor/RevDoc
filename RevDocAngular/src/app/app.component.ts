import { Component, OnInit } from '@angular/core';
import { ViewApptService } from './view-appt.service';
import { Router } from '@angular/router';
import { RevAssociate } from './revdoc-classes/rev-associate';
import { Doctor } from './revdoc-classes/doctor';
import { SessionType } from './revdoc-classes/session-type'
import { Session } from 'inspector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 associate: RevAssociate;
 doctor: Doctor;
 userType: SessionType;
  constructor(private viewApptService: ViewApptService, private router: Router) {
    this.associate = new RevAssociate;
    this.doctor = new Doctor;
    this.userType = new SessionType
  }

  ngOnInit(){
   this.userType.type = localStorage.getItem('userType');
   if(this.userType.type == "DOCTOR") {
     this.doctor.email="johnross@gmail.com"
     this.doctor.npi = 1000000000
     localStorage.setItem('user', this.doctor.email)
     localStorage.setItem('docNpi', this.doctor.npi.toString())
   } else if(this.userType.type == "REVASSOCIATE") {
     this.associate.revAssociateEmail == "revTom@gmail.com"
     this.associate.revAssociateName == "Tom Cat"
     localStorage.setItem('user', this.associate.revAssociateEmail)
     localStorage.setItem('user name', this.associate.revAssociateName)
   }
  }
}
