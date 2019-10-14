import { Component, OnInit } from '@angular/core';
import { Feedback } from './feedback';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  
 
  constructor(feeback :Feedback) { }

  ngOnInit() {
  }
  
  

  rateDoctor(BM : number, WT : number, OV : number, Comment : string){
    console.log("Bedside = "+BM+" WT = "+WT+" Overall = "+OV+" Comment = "+Comment);
    alert("Thank you for your feedback!")
  }



}