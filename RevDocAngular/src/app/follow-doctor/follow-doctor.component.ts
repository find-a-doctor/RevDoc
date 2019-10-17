import { Component, OnInit, OnDestroy } from '@angular/core';
import { DoctorInfoService } from '../doctor-info.service';
import { Followers } from '../revdoc-classes/followers';
import { ActivatedRoute, Router } from '@angular/router';
import { RevAssociate } from '../revdoc-classes/rev-associate';

@Component({
  selector: 'app-follow-doctor',
  templateUrl: './follow-doctor.component.html',
  styleUrls: ['./follow-doctor.component.css']
})
export class FollowDoctorComponent implements OnInit {

  followers: Followers;

  npi: number;
  // revassociate: string;
  revassociate:RevAssociate;
  followdate: number;
  followerId: number;

  isFollowing: boolean;


  constructor(private doctorInfoService: DoctorInfoService, private route: ActivatedRoute, private router: Router) {


  }

  ngOnInit() {
    //dummy user, hardcoded for pre-integrations
    this.revassociate = new RevAssociate();
    this.revassociate.revAssociateEmail="sampleuser@rev.com";
    this.revassociate.revAssociateName="Mr Duck";

    //doctor found from url
    // console.log(this.route.url);
    this.route.url.subscribe(data=>{
      // console.log(data);
      this.npi=Number(data[1]);
    })
    // console.log("npi: "+this.npi)

    //check if revassoc is following this doc
    this.doctorInfoService.isFollowing(this.npi, this.revassociate.revAssociateEmail).subscribe(data => {
      console.log("isfollowing?"+data);
      this.isFollowing = Boolean(data);
    });
    console.log("is following data boolean: " + this.isFollowing);
  }

  public followDoctor() {
    this.doctorInfoService.followDoctor(this.followers).subscribe(data => {
      this.followers = data;
      console.log("follow doctor data: " + this.followDoctor);
    });
  }

  public unfollowDoctor() {
    this.doctorInfoService.unfollowDoctor(this.followerId);
  }

}
