import { Component, OnInit } from '@angular/core';
import { RevAssociate } from '../revdoc-classes/rev-associate';
<<<<<<< HEAD
import { Router, ActivatedRoute } from '@angular/router';
import { Appointment } from '../revdoc-classes/appointment';
import { ViewApptService } from '../view-appt.service';
=======
import { ViewApptService } from '../view-appt.service';
import { Router } from '@angular/router';
>>>>>>> origin/test/master

@Component({
  selector: 'app-user-appts',
  templateUrl: './user-appts.component.html',
  styleUrls: ['./user-appts.component.css']
})
export class UserApptsComponent implements OnInit {
  user: RevAssociate;

<<<<<<< HEAD
  revAssociate: RevAssociate;
  appointment: Appointment = new Appointment();
  userAppointments: Appointment[] = [];

  constructor(private viewApptService: ViewApptService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // this.viewApptService.getAllAppointments().subscribe(apptsData => {
    //   apptsData.forEach(appt => {
    //     this.userAppointments.push(appt);
    //   });
    // });

    this.revAssociate = new RevAssociate();
    this.revAssociate.revAssociateEmail = 'revTom@gmail.com';
    this.revAssociate.revAssociatePassword = 'revTom';
    this.revAssociate.revAssociateName =  'Tom Cat';

    this.viewApptService.getAppointmentsByRevAssociateEmail(this.revAssociate.revAssociateEmail).subscribe(apptsData => {
      apptsData.forEach(appt => {
        this.userAppointments.push(appt);
      });
    });
  };

}
=======
  constructor(private viewApptService: ViewApptService, private router: Router) {
    this.user = new RevAssociate
   }

   
  ngOnInit() {
    console.log(this.user);
    this.user.revAssociateEmail = localStorage.getItem('user')
    this.viewApptService.userAppts(this.user.revAssociateEmail).subscribe(data => {
      this.user.revAssociateName = data.toString();
    })
  }
}
>>>>>>> origin/test/master
