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

  doctor: Doctor;
  allFeedback: Feedback[];
  overall: number = 0;
  bedsideManner: number = 0;
  waitTime: number = 0;



  constructor(private doctorInfoService: DoctorInfoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.doctor = new Doctor();
    this.doctor.npi = 1000000001; //default



    this.doctorInfoService.getDoctor(this.doctor.npi).subscribe(data => {
      // console.log("getting...\n" + data);
      this.doctor = data;
    }, error => console.log("error:\n" + error));

    this.doctorInfoService.getAllRatings(this.doctor.npi).subscribe(data => {
      var ov: number = 5;
      var bm: number = 5;
      var wt: number = 5;
      var count: number = 0;
      this.allFeedback = data;
      this.allFeedback.forEach(function (fb: Feedback) {
        // ov += fb.overallRating;
        bm += fb.bedsideMannerRating;
        wt += fb.waitTimeRating;
        count += 1;
      });

      // this.overall = (ov / count);
      if (count == 0) {
        console.log("no reviews available")
        count = 1;
      }

      this.bedsideManner = (bm / count);
      this.waitTime = (wt / count);
      this.overall = (ov / count);


      console.log(this.overall);
    });

  }
}