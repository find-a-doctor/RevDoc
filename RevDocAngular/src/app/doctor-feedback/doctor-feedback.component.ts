import { Component, OnInit } from 'node_modules/@angular/core';
import { Feedback } from '../revdoc-classes/feedback';
import {FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from 'node_modules/@angular/router';



@Component({
  selector: 'app-doctor-feedback',
  templateUrl: './doctor-feedback.component.html',
  styleUrls: ['./doctor-feedback.component.css'],
  styles: [`
  .stars {
    font-size: 3rem;
    color: white;
  }
  .filled {
    color: #F26925;
  }
  
`]
})
export class DoctorFeedbackComponent implements OnInit {

  feedback: Feedback;
  // constructor(feeback: Feedback) { }

  ngOnInit() {
    this.feedback=new Feedback();
  }


  //Collects ratings and comment from user to create a feedback object then sends an alert to user that the feedback has been recieved.
  rateDoctor( Comment : string){
    
    this.feedback.bedsideMannerRating= this.BedsideManners.value;
    this.feedback.waitTimeRating=this.WaitTime.value;
    this.feedback.overallRating=this.Overall.value;
    this.feedback.comments=Comment;
    
    console.log(this.feedback);
    alert("Thank you for your feedback!")
  }

//dynamically changes background image from blank star to orange star.
BedsideManners = new FormControl(null, Validators.required);

toggleBM() {
  if (this.BedsideManners.disabled) {
    this.BedsideManners.enable();
  
  } else {
    this.BedsideManners.disable();
  }
}

WaitTime =new FormControl(null, Validators.required);

toggleWT() {
  if (this.WaitTime.disabled) {
    this.WaitTime.enable();
  } else {
    this.WaitTime.disable();
  }
}

Overall = new FormControl(null,  Validators.required);

toggleOV() {
  if (this.Overall.disabled) {
    this.Overall.enable();
    

  } else {
    this.Overall.disable();
    
  }
}


}
