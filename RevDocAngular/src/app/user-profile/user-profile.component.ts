import { Component, OnInit } from '@angular/core';
import { RevAssociate } from '../revdoc-classes/rev-associate';
import { ViewApptService } from '../view-appt.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  revAssociate: RevAssociate;
  loggedIn: boolean;

  constructor(private associateService: SessionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.revAssociate = new RevAssociate();
    this.revAssociate.revAssociateEmail = 'revTom@gmail.com';
    this.revAssociate.revAssociatePassword = 'revTom';
    this.revAssociate.revAssociateName =  'Tom Cat';
    localStorage.setItem('USER_TYPE', 'ASSOCIATE');
    if (localStorage.getItem('USER_TYPE') == null) {
      this.loggedIn =  false;
      this.router.navigate(['/']);
    } else if (localStorage.getItem('USER_TYPE') == 'ASSOCIATE') {
      this.loggedIn = true;
    } else if (localStorage.getItem('USER_TYPE') == 'DOCTOR') {
      this.loggedIn = false;
    }
  }
}
