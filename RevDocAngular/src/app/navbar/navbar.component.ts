import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private service: SessionService) { }

  ngOnInit() {
    console.log(localStorage.getItem("USER_TYPE"))
  }

  logout(){
    this.service.destroySession().subscribe()
    localStorage.clear()
    this.router.navigate(['login'])
  }

  viewAppts(){
    if(localStorage.getItem("USER_TYPE") == null) {
      this.router.navigate(['login'])
    } else {
      this.router.navigate(['viewSchedule'])
    }
  }

  toAccount(){
    if(localStorage.getItem("USER_TYPE") == "DOCTOR") {
      this.router.navigate(['doctor-profile'])
    } else if(localStorage.getItem("USER_TYPE") == "ASSOCIATE") {
      this.router.navigate(['searchDoctor'])
    } else if(localStorage.getItem("USER_TYPE") == null){
      this.router.navigate(['login'])
    }
  }

}
