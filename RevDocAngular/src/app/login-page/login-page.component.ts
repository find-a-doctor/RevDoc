import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { RevAssociate } from '../revdoc-classes/rev-associate';
import { Doctor } from '../revdoc-classes/doctor';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public associate: RevAssociate;
  public doctor: Doctor;

  constructor(private router:Router, private session:SessionService) {
    this.associate = new RevAssociate
    this.doctor = new Doctor
   }
  
  associateLogin(){
    // console.log("function has been reached")
    this.session.initAssociateSession(this.associate).subscribe(data => {
      localStorage.setItem("USER_TYPE", "ASSOCIATE")
    })
    this.router.navigate(['schedule-appt']);
  }

  doctorLogin(){
    // console.log("doctor function reached")
    this.session.initDoctorSession(this.doctor).subscribe(data => {
      localStorage.setItem("USER_TYPE", "DOCTOR")
    })
    this.router.navigate(['doctor-profile']);
  }
}
