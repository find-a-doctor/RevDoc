import { Component, OnInit } from '@angular/core';
import { RevAssociate } from '../revdoc-classes/rev-associate';
import { ViewApptService } from '../view-appt.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../session.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  revAssociate: RevAssociate;
  loggedIn: boolean;

  constructor(private associateService: SessionService, private router: Router, private route: ActivatedRoute, private nav: NavbarComponent) { }

  ngOnInit() {
    this.revAssociate = new RevAssociate();
    this.revAssociate.revAssociateEmail = 'jluna@gmail.com';
    this.revAssociate.revAssociatePassword = 'revCat';
    this.revAssociate.revAssociateName =  'Josue Luna';
    localStorage.setItem('USER_TYPE', 'ASSOCIATE');
    if (localStorage.getItem('USER_TYPE') == null) {
      this.loggedIn =  false;
      this.router.navigate(['/']);
    } else if (localStorage.getItem('USER_TYPE') == 'ASSOCIATE') {
      this.loggedIn = true;
    } else if (localStorage.getItem('USER_TYPE') == 'DOCTOR') {
      this.loggedIn = false;
    }
    this.nav.onChange()
  }
}
