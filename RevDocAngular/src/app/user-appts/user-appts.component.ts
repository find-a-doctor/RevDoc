import { Component, OnInit } from '@angular/core';
import { RevAssociate } from '../revdoc-classes/rev-associate';
import { ViewApptService } from '../view-appt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-appts',
  templateUrl: './user-appts.component.html',
  styleUrls: ['./user-appts.component.css']
})
export class UserApptsComponent implements OnInit {
  user: RevAssociate;

  constructor(private viewApptService: ViewApptService, private router: Router) {
    this.user = new RevAssociate
   }

   
  ngOnInit() {
    console.log(this.user);
    this.user.revAssociateEmail = 'revTom@gmail.com'
    this.viewApptService.userAppts(this.user.revAssociateEmail).subscribe(data => {
      this.user.revAssociateName = data.toString();
    })
  }
}
