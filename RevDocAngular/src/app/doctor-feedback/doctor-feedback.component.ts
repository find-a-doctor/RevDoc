import { Component, OnInit } from '@angular/core';
import {Feedback } from '../revdoc-classes/feedback' 


@Component({
  selector: 'app-doctor-feedback',
  templateUrl: './doctor-feedback.component.html',
  styleUrls: ['./doctor-feedback.component.css']
})
export class DoctorFeedbackComponent implements OnInit {

 
  constructor(feeback :Feedback) { }

  ngOnInit() {
  }
  
  

  rateDoctor(BM : number, WT : number, OV : number, Comment : string){
    console.log("Bedside = "+BM+" WT = "+WT+" Overall = "+OV+" Comment = "+Comment);
    alert("Thank you for your feedback!")
  }



}
