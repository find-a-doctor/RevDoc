import { Component, OnInit, OnDestroy } from '@angular/core';
import { DoctorInfoService } from '../doctor-info.service';
import { Followers } from '../revdoc-classes/followers';

@Component({
  selector: 'app-follow-doctor',
  templateUrl: './follow-doctor.component.html',
  styleUrls: ['./follow-doctor.component.css']
})
export class FollowDoctorComponent implements OnInit, OnDestroy {

  followers: Followers;

  npi:number;
  revassociate:string;
  followdate:number;

 
  isFollowing: boolean;

  following;
  
  constructor(private doctorInfoService: DoctorInfoService) { }

  ngOnInit() {

    //check if revassoc is following this doc
    this.doctorInfoService.isFollowing(this.npi, this.revassociate).subscribe(data => {
      this.isFollowing = data;
      console.log("following data: "+this.isFollowing);
    }
    
  toggleFollow() {
    const npi = this.npi
    const revassociateemail = this.revassociateemail

    if (this.isFollowing) this.doctorInfoService.unfollow(revassociateemail, npi)
    else this.doctorInfoService.follow(revassociateemail, npi)
  }

  ngOnDestroy() {
    this.following.unsubscribe();
  }
}
