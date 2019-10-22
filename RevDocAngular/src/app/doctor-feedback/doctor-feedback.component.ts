import { Component, OnInit, Input } from '@angular/core';
import { Feedback } from '../revdoc-classes/feedback';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { DoctorInfoService } from '../doctor-info.service';
import { RevAssociate } from '../revdoc-classes/rev-associate';
import { Appointment } from '../revdoc-classes/appointment';
import { Doctor } from '../revdoc-classes/doctor';

@Component({
  selector: 'app-doctor-feedback',
  templateUrl: './doctor-feedback.component.html',
  styleUrls: ['./doctor-feedback.component.css']
})
export class DoctorFeedbackComponent implements OnInit {

  //These will be used to grab objects fom active session
  // @Input() doctor: Doctor;
  // @Input() user: RevAssociate;
  //not working yet

  doctor:Doctor;
  revAssociate:RevAssociate;
  feedback: Feedback;

  constructor(private doctorInfoService: DoctorInfoService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    console.log(this.route);
    this.feedback = new Feedback();
    this.feedback.appointment=new Appointment();
    this.feedback.appointment.doctor=new Doctor();

    //session not yet workiing
    this.route.url.subscribe(data => {
      this.feedback.appointment.doctor.npi = Number(data[1].path);
    });
    this.doctorInfoService.getDoctor(this.feedback.appointment.doctor.npi).subscribe(data => {
      // console.log("getting...\n" + data);
      this.feedback.appointment.doctor = data;
    }, error => console.log("error:\n" + error));

    
  }

  //Collects ratings and comment from user to create a feedback object then sends an alert to user that the feedback has been recieved.
  rateDoctor(Comment: string) {
    this.feedback.bedsideMannerRating = this.BedsideManners.value;
    this.feedback.waitTimeRating = this.WaitTime.value;
    this.feedback.overallRating = this.Overall.value;
    this.feedback.comments = Comment;
    this.feedback.appointment = new Appointment();
    this.feedback.appointment.doctor = this.doctor;
    this.route.url.subscribe(data => {
      this.feedback.appointment.doctor.npi = Number(data[1].path);
    })
    // this.feedback.appointment.revAssociate = this.user;
    // this.feedback.appointment.revAssociate.revAssociateEmail = "MrDuckworth@QuackQuack.com";
    //dummy value, no session stored

    console.log(this.feedback);
    console.log("This is the doctor: " + this.doctor);
    // console.log("This is the user: " + this.user);

    console.log(this.feedback.comments);

    alert("Thank you for your feedback!")
    this.doctorInfoService.rateDoctor(this.feedback);

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

  WaitTime = new FormControl(null, Validators.required);

  toggleWT() {
    if (this.WaitTime.disabled) {
      this.WaitTime.enable();
    } else {
      this.WaitTime.disable();
    }
  }

  Overall = new FormControl(null, Validators.required);

  toggleOV() {
    if (this.Overall.disabled) {
      this.Overall.enable();


    } else {
      this.Overall.disable();

    }
  }


}
