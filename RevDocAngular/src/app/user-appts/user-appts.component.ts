import { Component, OnInit } from '@angular/core';
import { RevAssociate } from '../revdoc-classes/rev-associate';
import { Router, ActivatedRoute } from '@angular/router';
import { Appointment } from '../revdoc-classes/appointment';
import { ViewApptService } from '../view-appt.service';

@Component({
  selector: 'app-user-appts',
  templateUrl: './user-appts.component.html',
  styleUrls: ['./user-appts.component.css']
})
export class UserApptsComponent implements OnInit {

  revAssociate: RevAssociate;
  appointment: Appointment = new Appointment();
  userAppointments: Appointment[] = [];

  constructor(private viewApptService: ViewApptService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.revAssociate = new RevAssociate();
    this.revAssociate.revAssociateEmail = 'revTom@gmail.com';
    this.revAssociate.revAssociatePassword = 'revTom';
    this.revAssociate.revAssociateName =  'Tom Cat';

    this.viewApptService.getAppointmentsByRevAssociateEmail(this.revAssociate.revAssociateEmail).subscribe(apptsData => {
      apptsData.forEach(appt => {
        this.userAppointments.push(appt);
      });
    });
  }
}
