import { Component, OnInit } from '@angular/core';
import { Doctor } from '../revdoc-classes/doctor';
import { DoctorInfoService } from '../doctor-info.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {


  doctor: Doctor;
  doctorLocation:string;

  constructor(private doctorInfoService: DoctorInfoService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.doctor = new Doctor();
    this.doctor.npi = 1000000001; //default

    this.doctorInfoService.getDoctor(this.doctor.npi).subscribe(data => {
      console.log("getting...\n" + data);
      this.doctor = data;
      console.log(this.doctor);
      console.log(this.doctor.location);
    }, error => console.log("error:\n" + error));

    


  }

}
