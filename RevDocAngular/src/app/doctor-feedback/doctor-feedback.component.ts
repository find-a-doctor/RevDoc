import { Component, OnInit } from '@angular/core';
import { Feedback } from '../revdoc-classes/feedback';
import { DoctorInfoService } from '../doctor-info.service';


@Component({
  selector: 'app-doctor-feedback',
  templateUrl: './doctor-feedback.component.html',
  styleUrls: ['./doctor-feedback.component.css']
})
export class DoctorFeedbackComponent implements OnInit {


  feedback: Feedback;
  npi: number;

  // constructor(private doctorInfoService: DoctorInfoService) {
  //   this.feedback = new Feedback();
  //   this.npi = 1;
  // }


  ngOnInit() {

  }



  // rateDoctor(BM: number, WT: number, OV: number, Comment: string) {
  //   console.log("Bedside = " + BM + " WT = " + WT + " Overall = " + OV + " Comment = " + Comment);
  //   alert("Thank you for your feedback!")
  // }


}
