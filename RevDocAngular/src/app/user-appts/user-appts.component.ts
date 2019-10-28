import { Component, OnInit } from '@angular/core';
import { RevAssociate } from '../revdoc-classes/rev-associate';
import { Router, ActivatedRoute } from '@angular/router';
import { Appointment } from '../revdoc-classes/appointment';
import { ViewApptService } from '../view-appt.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-user-appts',
  templateUrl: './user-appts.component.html',
  styleUrls: ['./user-appts.component.css']
})
export class UserApptsComponent implements OnInit {

  revAssociate: RevAssociate;
  appointment: Appointment = new Appointment();
  userAppointments: Appointment[] = [];

  constructor(private session: SessionService, private viewApptService: ViewApptService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.revAssociate = new RevAssociate();
    this.revAssociate.revAssociateEmail = 'jluna@gmail.com';
    this.revAssociate.revAssociatePassword = 'revCat';
    this.revAssociate.revAssociateName =  'Josue Luna';

    //this.session.getAssociateSession().subscribe(data => { this.revAssociate = data });

    this.viewApptService.getAppointmentsByRevAssociateEmail(this.revAssociate.revAssociateEmail).subscribe(apptsData => {
      apptsData.forEach(appt => {
        this.userAppointments.push(appt);
      });
    });
  }
}
