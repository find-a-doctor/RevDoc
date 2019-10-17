import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Doctor } from './revdoc-classes/doctor';
import { Router } from '@angular/router';
import { Feedback } from './revdoc-classes/feedback';
import { Insurance } from './revdoc-classes/insurance';
import { Specialty } from './revdoc-classes/specialty';
import { Conditions } from './revdoc-classes/conditions';
import { Followers } from './revdoc-classes/followers';


@Injectable({
  providedIn: 'root'
})
export class DoctorInfoService {


  baseUrl:string;
  doctorUrl:string;
  getAllUrl:string;
  allRatingsUrl:string;
  followingUrl: string;
  followUrl: string;
  getAllFollowersUrl: string;

  constructor(private http:HttpClient, private router:Router) {
    this.baseUrl="http://localhost:1000/";
    this.doctorUrl=this.baseUrl+"doctor/";
    this.getAllUrl=this.baseUrl+"doctors";
    this.allRatingsUrl=this.baseUrl+"allRatings/";
    this.followingUrl = this.baseUrl + "following/";
    this.followUrl = this.baseUrl + "follow/";
    this.getAllFollowersUrl = this.baseUrl + "allFollowers";


   }

   public getDoctor(npi:number):Observable<Doctor>{
     return this.http.get<Doctor>(this.doctorUrl+npi);
   }

   public getDoctorInsurance(npi:number):Observable<Insurance[]>{
     return this.http.get<Insurance[]>(this.doctorUrl+npi+"/insurance");
   }

   public getAllDoctors():Observable<Doctor[]>{
     return this.http.get<Doctor[]>(this.getAllUrl);
   }

   public getAllRatings(npi:number):Observable<Feedback[]>{
     return this.http.get<Feedback[]>(this.allRatingsUrl+npi);
   };

   public getDoctorSpecialty(npi:number):Observable<Specialty[]>{
     return this.http.get<Specialty[]>(this.doctorUrl+npi+"/specialty");
   }

   public getDoctorConditions(npi:number):Observable<Conditions[]>{
     return this.http.get<Conditions[]>(this.doctorUrl+npi+"/conditions");
   }

   public isFollowing(npi: number, revassociate: string): Observable<boolean> {
    return this.http.get<boolean>(this.followingUrl+npi+"/"+revassociate);
  }

  newFl:Followers;
  public followDoctor(followers:Followers): Observable<Followers> {
    // console.log(followers);
    // this.newFl= this.http.post<Followers>(this.followUrl, {followers});
    // console.log(this.newFl);
    return this.http.post<Followers>(this.followUrl, {followers});
  }

  public unfollowDoctor(followerId:number){
    return this.http.delete<Followers>(this.followUrl+followerId);
  }

  public getAllFollowers(): Observable<Followers[]> {
    return this.http.get<Followers[]>(this.getAllFollowersUrl);
  }
}
