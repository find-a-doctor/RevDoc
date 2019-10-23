import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private service: SessionService) { }

  ngOnInit() {
  }

  logout(){
    this.service.destroySession().subscribe()
    this.router.navigate(['login'])
  }

}
