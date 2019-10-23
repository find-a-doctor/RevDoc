import { Component, OnInit, Input } from '@angular/core';
import { Feedback } from '../revdoc-classes/feedback';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { DoctorInfoService } from '../doctor-info.service';
import { RevAssociate } from '../revdoc-classes/rev-associate';
import { Appointment } from '../revdoc-classes/appointment';
import { Doctor } from '../revdoc-classes/doctor';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-doctor-feedback',
  templateUrl: './doctor-feedback.component.html',
  styleUrls: ['./doctor-feedback.component.css']
})
export class DoctorFeedbackComponent implements OnInit {

  //These will be used to grab objects fom active session
  @Input() npi: number;
  associate: RevAssociate;
  appointment: Appointment
  feedback: Feedback;


  constructor(private doctorInfoService: DoctorInfoService,
    private sessionService: SessionService, private route: ActivatedRoute,
    private router: Router) { }

    // grabs associate object in session and gets correct appointment
  ngOnInit() {
    console.log(this.route);
    this.feedback = new Feedback();
    this.sessionService.getAssociateSession().subscribe(data =>{
      this.associate= data;
    })
    console.log("associate in this session: "+this.associate);
    this.appointment = new Appointment();
    this.doctorInfoService.getAppointment(this.npi, this.associate.revAssociateEmail).subscribe(data => {
      this.appointment = data;
    });
    console.log("appointment to be rated: "+this.appointment);

  }

  //Collects ratings and comment from user to create a feedback object then sends an alert to user that the feedback has been recieved.
  //Could possibly add a "rate your last appointment w/ this doctor button" that pulls the correct appointment on click
  rateDoctor(comments: string) {

    this.feedback.bedsideMannerRating = this.BedsideManners.value;
    this.feedback.waitTimeRating = this.WaitTime.value;
    this.feedback.overallRating = this.Overall.value;
    this.feedback.comments = comments;
    // ONLY appointment ID is needed to relate to table in DB, not the entire appointment object.
    this.feedback.appointment = this.appointment;

    

    console.log(this.feedback);
    console.log("This is the doctor npi: " + this.npi);
    console.log("This is the associate: " + this.associate);

    console.log(this.feedback.comments);

    alert("Thank you for your feedback!")
    this.doctorInfoService.rateDoctor(this.feedback);

  }

  //dynamically changes star color from white to orange.
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
