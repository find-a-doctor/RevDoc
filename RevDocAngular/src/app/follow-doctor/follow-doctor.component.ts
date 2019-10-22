import { Component, OnInit, OnDestroy } from '@angular/core';
import { DoctorInfoService } from '../doctor-info.service';
import { Followers } from '../revdoc-classes/followers';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../revdoc-classes/doctor';
import { RevAssociate } from '../revdoc-classes/rev-associate';

@Component({
  selector: 'app-follow-doctor',
  templateUrl: './follow-doctor.component.html',
  styleUrls: ['./follow-doctor.component.css']
})
export class FollowDoctorComponent implements OnInit {

  followers: Followers;

  npi: number;
  revassociate: string;
  followdate: number;
  followerId: number;

  isFollowing: boolean;



  constructor(private doctorInfoService: DoctorInfoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.followers=new Followers();
    this.followers.doctor=new Doctor();
    this.route.url.subscribe(data => {
      this.followers.doctor.npi = Number(data[1].path);
    });

    this.doctorInfoService.getDoctor(this.followers.doctor.npi).subscribe(data => {
      // console.log("getting...\n" + data);
      this.followers.doctor = data;
    }); 
    // error => console.log("error:\n" + error));

    this.followers.revAssociate=new RevAssociate();

    //check if revassoc is following this doc
    this.doctorInfoService.isFollowing(this.npi, this.revassociate).subscribe(data => {
      this.isFollowing = data;
      console.log("is following data boolean: " + this.isFollowing);
    });
  }

  toggleFollowing(){
    if(this.isFollowing){
      this.unfollowDoctor();
    }else{
      this.followDoctor();
    }
  }
  
  followDoctor() {
    this.doctorInfoService.followDoctor(this.followers).subscribe(data => {
      this.followers = data;
      console.log("follow doctor data: " + this.followers);
    });
  }

  unfollowDoctor() {
    this.doctorInfoService.unfollowDoctor(this.followerId).subscribe(data => {
      this.followers = data;
      console.log("unfollow doctor data: " + this.followers);
    });
  }

}
