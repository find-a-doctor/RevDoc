import { Component, OnInit } from 'node_modules/@angular/core';
import { Feedback } from '../revdoc-classes/feedback';
import { ActivatedRoute, Router } from 'node_modules/@angular/router';



@Component({
  selector: 'app-doctor-feedback',
  templateUrl: './doctor-feedback.component.html',
  styleUrls: ['./doctor-feedback.component.css']
})
export class DoctorFeedbackComponent implements OnInit {

  feedback: Feedback;
  // constructor(feeback: Feedback) { }

  ngOnInit() {
  }


  //Collects ratings and comment from user to create a feedback object then sends an alert to user that the feedback has been recieved.
  rateDoctor(BM: number, WT: number, OV: number, Comment: string) {

    console.log("Bedside = " + BM + " WT = " + WT + " Overall = " + OV + " Comment = " + Comment);
    this.feedback.bedsideMannerRating = BM;
    this.feedback.waitTimeRating = WT;
    this.feedback.overallRating = OV;
    this.feedback.comments = Comment;
    console.log("Feedback Object: "+this.feedback);
    alert("Thank you for your feedback!")
  }



}
