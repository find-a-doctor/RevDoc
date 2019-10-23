import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { $ } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDisplayed: boolean;
   
  constructor(private router: Router, private service: SessionService) {
    this.isDisplayed = true
   }

  ngOnInit() {
    console.log(localStorage.getItem("USER_TYPE"))
    if(localStorage.getItem("USER_TYPE") == null) {
      this.isDisplayed = false;
    }
  }

  onChange(){
    if(localStorage.getItem("USER_TYPE") == null) {
      this.isDisplayed = false
    } else{
      this.isDisplayed = true
    }
  }

  logout(){
    this.service.destroySession().subscribe()
    localStorage.clear()
    this.onChange()
    this.router.navigate(['login'])
  }

  viewAppts(){
    if(localStorage.getItem("USER_TYPE") == null) {
      this.onChange()
      this.router.navigate(['login'])
    } else {
      this.onChange()
      this.router.navigate(['viewSchedule'])
    }
  }

  toAccount(){
    if(localStorage.getItem("USER_TYPE") == "DOCTOR") {
      this.onChange()
      this.router.navigate(['doctor-profile'])
    } else if(localStorage.getItem("USER_TYPE") == "ASSOCIATE") {
      this.router.navigate(['searchDoctor'])
    } else if(localStorage.getItem("USER_TYPE") == null){
      this.router.navigate(['login'])
    }
  }

}
