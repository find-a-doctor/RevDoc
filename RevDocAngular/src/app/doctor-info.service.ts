import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Doctor } from './revdoc-classes/doctor';
import { Router } from '@angular/router';
import { Followers } from './revdoc-classes/followers';

@Injectable({
  providedIn: 'root'
})
export class DoctorInfoService {

  baseUrl: string;
  doctorUrl: string;
  getAllUrl: string;
  followingUrl: string;
  followUrl: string;
  getAllFollowersUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.baseUrl = "http://localhost:1000/";
    this.doctorUrl = this.baseUrl + "doctor/";
    this.getAllUrl = this.baseUrl + "doctors";
    this.followingUrl = this.baseUrl + "following/"
    this.followUrl = this.baseUrl + "follow/"
    this.getAllFollowersUrl = this.baseUrl + "allFollowers";


   }

  public getDoctor(npi: number): Observable<Doctor> {
    return this.http.get<Doctor>(this.doctorUrl + npi);
  }

  public getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.getAllUrl);
  }

  public isFollowing(npi: number, revassociate: string): Observable<boolean> {
    return this.http.get<boolean>(this.followingUrl+npi+"/"+revassociate);
  }

  public followDoctor(followers:Followers): Observable<Followers> {
    return this.http.post<Followers>(this.followUrl, followers);
  }

  public unfollowDoctor(followerId){
    return this.http.delete<Followers>(this.followUrl+followerId);
  }

  public getAllFollowers(): Observable<Followers[]> {
    return this.http.get<Followers[]>(this.getAllFollowersUrl);
  }

}
