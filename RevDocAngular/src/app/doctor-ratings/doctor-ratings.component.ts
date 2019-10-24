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
  overall: number;
  bedsideManner: number;
  waitTime: number;



  constructor(private doctorInfoService: DoctorInfoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.doctor = new Doctor();
    this.route.url.subscribe(data => {
      this.doctor.npi = Number(data[1].path);

      this.doctorInfoService.getDoctor(this.doctor.npi).subscribe(data => {
        // console.log("getting...\n" + data);
        this.doctor = data;

        this.doctorInfoService.getAllRatings(this.doctor.npi).subscribe(data => {
          var ov: number = 0;
          var bm: number = 0;
          var wt: number = 0;
          var count: number = 0;
          this.allFeedback = data;
          this.allFeedback.forEach(function (fb: Feedback) {
            ov += fb.overallRating;
            bm += fb.bedsideMannerRating;
            wt += fb.waitTimeRating;
            count += 1;
          });
    
          // this.overall = (ov / count);
          if (count == 0) {
            console.log("no reviews available")
            count = 1;
          }
    
          this.bedsideManner = Number((bm / count).toFixed(3));
          this.waitTime = Number((wt / count).toFixed(3));
          this.overall = Number((ov / count).toFixed(3));
        });

      }, error => console.log("error:\n" + error)); 
    });

  }

}