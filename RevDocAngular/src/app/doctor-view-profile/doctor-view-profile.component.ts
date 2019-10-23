import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Doctor } from '../revdoc-classes/doctor';
import { DoctorInfoService } from '../doctor-info.service';
import { Specialty } from '../revdoc-classes/specialty';
import { Insurance } from '../revdoc-classes/insurance';
import { Conditions } from '../revdoc-classes/conditions';
import { Location } from '../revdoc-classes/location';
import { RevAssociate } from '../revdoc-classes/rev-associate';
import { SessionService } from '../session.service';



@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  //fake user
  doctor:Doctor;

  insurance: Insurance[];
  specialty: Specialty[];
  conditions: Conditions[];

  constructor(private doctorInfoService: DoctorInfoService, private route: ActivatedRoute, private router: Router, private sessionService:SessionService) { }

  ngOnInit() {
    
    this.doctor=this.sessionService.getDoctorSession();

    this.doctorInfoService.getDoctorInsurance(this.doctor.npi).subscribe(data => {
      this.insurance = data;
      // console.log("insurance loaded");
    }, error => console.log("error:\n" + error));

    this.doctorInfoService.getDoctorSpecialty(this.doctor.npi).subscribe(data => {
      this.specialty = data;
      // console.log("specialty loaded");
    }, error => console.log("error:\n" + error));

    this.doctorInfoService.getDoctorConditions(this.doctor.npi).subscribe(data => {
      this.conditions = data;
      // console.log("conditions loaded");
    }, error => console.log("error:\n" + error));


  }

}
