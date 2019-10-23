import { Component, OnInit, OnDestroy } from '@angular/core';
import { DoctorInfoService } from '../doctor-info.service';
import { Followers } from '../revdoc-classes/followers';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../revdoc-classes/doctor';
import { RevAssociate } from '../revdoc-classes/rev-associate';
import { SessionService } from '../session.service';
import { isNullOrUndefined } from 'util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-follow-doctor',
  templateUrl: './follow-doctor.component.html',
  styleUrls: ['./follow-doctor.component.css']
})
export class FollowDoctorComponent implements OnInit {

  followers: Followers;

  isFollowing: boolean;



  constructor(private doctorInfoService: DoctorInfoService, private sessionService: SessionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.isFollowing = false;

    this.followers = new Followers();
    // this.followers.revAssociate=new RevAssociate;
    this.followers.doctor = new Doctor;

    this.sessionService.getAssociateSession().subscribe(data => {
      this.followers.revAssociate = data;  
    })
    this.followers.doctor = new Doctor();
    this.route.url.subscribe(data => {
      this.followers.doctor.npi = Number(data[1].path);
    });

    this.doctorInfoService.getDoctor(this.followers.doctor.npi).subscribe(data => {
      // console.log("getting...\n" + data);
      this.followers.doctor = data;
    },error => console.log("error:\n" + error));

    //check if revassoc is following this doc
    this.doctorInfoService.isFollowing(this.followers.doctor.npi, this.followers.revAssociate).subscribe(data => {
      this.isFollowing=data;
    },error => console.log("error:\n" + error));


  }


  toggleFollowing() {
    if (this.isFollowing) {
      this.unfollowDoctor();
    } else {
      this.followDoctor();
    }
  }

  followDoctor() {
    this.doctorInfoService.followDoctor(this.followers).subscribe(data => {
      this.followers = data;
      console.log("follow doctor data: " + this.followers);
      this.isFollowing=true;
    });
    this.ngOnInit();
  }

  unfollowDoctor() {
    this.doctorInfoService.unfollowDoctor(this.followers.followersId).subscribe(data => {
      this.followers = data;

      console.log("unfollow doctor data: " + this.followers);
    });
    this.ngOnInit();
  }


}
