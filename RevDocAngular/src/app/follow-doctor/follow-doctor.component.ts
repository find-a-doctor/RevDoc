import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { DoctorInfoService } from '../doctor-info.service';
import { Followers } from '../revdoc-classes/followers';
import { ActivatedRoute, Router } from '@angular/router';
import { RevAssociate } from '../revdoc-classes/rev-associate';
import { Doctor } from '../revdoc-classes/doctor';

@Component({
  selector: 'app-follow-doctor',
  templateUrl: './follow-doctor.component.html',
  styleUrls: ['./follow-doctor.component.css']
})
export class FollowDoctorComponent implements OnInit {

  followers: Followers;
  isFollowing: boolean;
  followersId:number;


  //removed redundant attributes


  constructor(private doctorInfoService: DoctorInfoService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.isFollowing = false;
    //default 


    this.followers=new Followers();
    //dummy user, hardcoded for pre-integrations
    this.followers.revAssociate = new RevAssociate();
    this.followers.revAssociate.revAssociateEmail="samplemcuser@revature.com";
    this.followers.revAssociate.revAssociateName="Sample McUser";
    this.followers.revAssociate.revAssociatePassword="password";

    //doctor found from url, added to blank doctor
    this.followers.doctor=new Doctor();
    this.route.url.subscribe(data => {
      this.followers.doctor.npi=Number(data[1]);
    })

    //add doctor to followers object
    this.doctorInfoService.getDoctor(this.followers.doctor.npi).subscribe(data => {
      this.followers.doctor = data;
    })
    this.followers.followersId=0;

    this.followers.followDate=new Date();
    this.followers.followDate.setDate(17);


    //check if revassoc is following this doc
    this.doctorInfoService.isFollowing(this.followers.doctor.npi, this.followers.revAssociate.revAssociateEmail).subscribe(data => {
      this.isFollowing = Boolean(data);
      console.log("initialization: following?");
      console.log(this.isFollowing);
    });

    console.log("finishing initialization:");
    console.log(this.followers);
  }



  isSubmitting = false;
  toggleFollowing() {
    this.isSubmitting = true;

    if (!this.isFollowing) {
      console.log(this.followers);
      this.doctorInfoService.followDoctor(this.followers).subscribe(data => {
        console.log("data:");
        console.log(data);
        // this.followers.followersId = data.followersId;
        this.followers=data;
        console.log("just tried to follow: followers object:");
        console.log(this.followers);
        //adds the followersId
      });

    } else {
      this.doctorInfoService.unfollowDoctor(this.followers.followersId).subscribe(data => {
        this.isSubmitting = false;
        this.isFollowing = false;
        // this.onToggle.emit(false);
      }, error => this.isSubmitting = false);
    }

    //update isFollowing attribute
    this.doctorInfoService.isFollowing(this.followers.doctor.npi, this.followers.revAssociate.revAssociateEmail).subscribe(data => {
      // console.log("isfollowing?" + data);
      this.isFollowing = Boolean(data);
    }, error => this.isSubmitting = false);
    // console.log("isfollowingnow?" + this.isFollowing)
  }


}
