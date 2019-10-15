import { Component, OnInit } from '@angular/core';
import { Doctor } from '../revdoc-classes/doctor';
import { DoctorInfoService } from '../doctor-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from '../revdoc-classes/feedback';

@Component({
  selector: 'app-doctor-ratings',
  templateUrl: './doctor-ratings.component.html',
  styleUrls: ['./doctor-ratings.component.css']
})
export class DoctorRatingsComponent implements OnInit {

  doctor:Doctor;
  allFeedback:Feedback[];


  constructor(private doctorInfoService:DoctorInfoService, private route:ActivatedRoute, private router:Router) {}

  ngOnInit() {
    this.doctor=new Doctor();

    this.doctor.npi = 1000000001; //default

    this.allFeedback=new Feedback();

    this.doctorInfoService.getDoctor(this.doctor.npi).subscribe(data => {
      // console.log("getting...\n" + data);
      this.doctor = data;
    }, error => console.log("error:\n" + error));

    this.doctorInfoService.getAllRatings(this.doctor.npi).subscribe(data=>{
      this.allFeedback=data;
      console.log("all ratings: "+ this.allFeedback);
    });

    // this.doctorInfoService.getDoctor(this.doctor.npi).subscribe(data => {
    //   console.log("getting...\n" + data);
    //   this.doctor = data;
    // }, error => console.log("error:\n" + error));
  }

}
