import { Component, OnInit, Input } from '@angular/core';
import { Feedback } from '../revdoc-classes/feedback';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  // @Input() npi: number;
  npi: number;
  associate: RevAssociate;
  appointment: Appointment
  feedback: Feedback;


  constructor(private doctorInfoService: DoctorInfoService,
    private sessionService: SessionService, private route: ActivatedRoute,
    private router: Router) { }

  // grabs associate object in session and gets correct appointment
  ngOnInit() {
    console.log(this.route);

    //get associate
    this.associate = new RevAssociate();
    this.sessionService.getAssociateSession().subscribe(data => {
      console.log(["data", data])
      this.associate = data;
      console.log(["associate", this.associate])
      console.log(["1", this.feedback, this.associate]);

      //get npi
      this.route.url.subscribe(data => {
        this.npi = Number(data[1].path);
        console.log(["2", this.feedback, this.associate, this.npi]);

        this.feedback = new Feedback();
        // building appointement object
        this.feedback.appointment = new Appointment();
        this.feedback.appointment.appointmentId = 10000001;
        this.feedback.appointment.date=null;
        this.feedback.appointment.time=null;
        this.feedback.appointment.insurance="QuackQuack";
        this.feedback.appointment.confirmed=true;
        console.log(["3", this.feedback, this.associate, this.npi]);

        
        //adds associate in session to appointment
        this.feedback.appointment.revAssociate = this.associate;
        console.log(["4", this.feedback, this.associate, this.npi]);
        //builds doctor object that is nested in appointment object.
        //In the future, you will need to make a call the the database
        // to get a list of appointments between this doctor and the associate
        //and iterate through the list to find the most recent appointment then 
        // see if the appointment has a corresponding feedback yet. If the appointment
        // already has a feedback, then this component should not appear.

        //Alternatively, you could get the list of appointments and display
        // all of the appointments that do not have a feedback yet in a dropdown
        // menu in HTML. Have the associate choose an appointment to rate and give feedback.
        this.feedback.appointment.doctor=new Doctor();
        this.feedback.appointment.doctor.npi = this.npi;
        this.feedback.appointment.doctor.doctorName=null;
        this.feedback.appointment.doctor.experience=0;
        this.feedback.appointment.doctor.numberOfFollowers=0;
        this.feedback.appointment.doctor.location=null;
        console.log(["5", this.feedback, this.associate, this.npi]);

      })

      

    });








  }


  //Collects ratings and comment from user to create a feedback object then sends an alert to user that the feedback has been recieved.
  //Could possibly add a "rate your last appointment w/ this doctor button" that pulls the correct appointment on click
  rateDoctor(comments: string) {

    this.feedback.bedsideMannerRating = Number(this.BedsideManners.value);
    this.feedback.waitTimeRating = this.WaitTime.value;
    this.feedback.overallRating = this.Overall.value;
    console.log(comments);
    this.feedback.comments = comments;
    // ONLY appointment ID is needed to relate to table in DB, not the entire appointment object.

    console.log(this.feedback);

    console.log("Feedback being sent to angular service: ")
    console.log(this.feedback);
    this.doctorInfoService.rateDoctor(this.feedback).subscribe(data=>{});
    alert("Thank you for your feedback!")
    window.location.reload();


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

