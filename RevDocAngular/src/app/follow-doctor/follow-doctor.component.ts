import { Component, OnInit, OnDestroy } from '@angular/core';
import { DoctorInfoService } from '../doctor-info.service';
import { Followers } from '../revdoc-classes/followers';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-follow-doctor',
  templateUrl: './follow-doctor.component.html',
  styleUrls: ['./follow-doctor.component.css']
})
export class FollowDoctorComponent implements OnInit {

  followers: Followers;

  npi:number;
  revassociate:string;
  followdate:number;
  followerId:number;
 
  isFollowing: boolean;
  followDoctor: Followers;
  
  getAllFollowers: Followers;
  
  
  constructor(private doctorInfoService: DoctorInfoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    //check if revassoc is following this doc
    this.doctorInfoService.isFollowing(this.npi, this.revassociate).subscribe(data => {
      this.isFollowing = data;
      console.log("is following data boolean: "+this.isFollowing);
    },

    this.doctorInfoService.followDoctor(this.followers).subscribe(data=> {
      this.followDoctor = data;
      console.log("follow doctor data: "+this.followDoctor);
    },

    this.doctorInfoService.unfollowDoctor(this.followerId).subscribe(data=> {
      this.getAllFollowers = data;
      console.log("unfollow doctor data: "+this.getAllFollowers);
    },
  
    //Do I need getAllFollowers here too?
    
  // ngOnDestroy() {
  //   this.following.unsubscribe();
  // }
  }
