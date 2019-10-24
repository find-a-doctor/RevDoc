import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConditionType } from './revdoc-classes/condition-type';
import { SpecialtyType } from './revdoc-classes/specialty-type';
import { InsuranceType } from './revdoc-classes/insurance-type';
import { Location } from './revdoc-classes/location';
import { Doctor } from './revdoc-classes/doctor';
import { Router } from '@angular/router';
import { Feedback } from './revdoc-classes/feedback';
import { Insurance } from './revdoc-classes/insurance';
import { Specialty } from './revdoc-classes/specialty';
import { Conditions } from './revdoc-classes/conditions';
import { Followers } from './revdoc-classes/followers';
import { RevAssociate } from './revdoc-classes/rev-associate';
import { Observable } from 'rxjs';
import { Appointment } from './revdoc-classes/appointment';


@Injectable({
  providedIn: 'root'
})

export class DoctorInfoService {

  private searchDoctorUrl: string;
  private getAllDoctorsUrl: string;
  private getAllConditionsUrl: string;
  private getAllSpecialtyUrl: string;
  private getAllInsuranceUrl: string;
  private getLocationByIdUrl: string;
  private getDoctorByIdUrl: string;
  baseUrl: string;
  doctorUrl: string;
  allRatingsUrl: string;
  followingUrl: string;
  followUrl: string;
  getAllFollowersUrl: string;
  rateDoctorUrl: string;
  getAppointmentUrl: string;

  constructor(private http: HttpClient) {
    this.searchDoctorUrl = "http://localhost:9000/searchDoctor/";
    this.getAllDoctorsUrl = "http://localhost:9000/doctors";
    this.getAllConditionsUrl = "http://localhost:9000/conditionTypes";
    this.getAllSpecialtyUrl = "http://localhost:9000/specialtyTypes";
    this.getAllInsuranceUrl = "http://localhost:9000/insuranceTypes";
    this.getLocationByIdUrl = "http://localhost:9000/location/";
    this.getDoctorByIdUrl = "http://localhost:9000/doctor/";
    this.baseUrl = "http://localhost:9000/";
    this.doctorUrl = "http://localhost:9000/doctorinfo/";
    this.allRatingsUrl = "http://localhost:9000/allRatings/";
    this.followingUrl = "http://localhost:9000/following/";
    this.followUrl = "http://localhost:9000/follow/";
    this.getAllFollowersUrl = "http://localhost:9000/allFollowers";
    this.rateDoctorUrl = "http://localhost:9000/feedback";
    this.getAppointmentUrl= "http://localhost:9000/getAppointment/"
  }



  public searchDoctor(search: string) {
    console.log("Search Doctor: " + this.searchDoctorUrl + search);
    //  return this.http.get<Doctor[]>(this.searchDoctorUrl+search);
    return this.http.get<Object[]>(this.searchDoctorUrl + search);

  }


  public getAllDoctors() {
    return this.http.get<Object[]>(this.getAllDoctorsUrl);
  }
  public getAllConditions() {
    return this.http.get<ConditionType>(this.getAllConditionsUrl);
  }
  public getAllSpecialtys() {
    return this.http.get<SpecialtyType>(this.getAllSpecialtyUrl);
  }
  public getAllInsurances() {
    return this.http.get<InsuranceType>(this.getAllInsuranceUrl);
  }

  public getLocationById(id: number){
    return this.http.get<Location>(this.getLocationByIdUrl+id);
  }

  public getDoctorById(id: number){
    return this.http.get<Doctor>(this.getDoctorByIdUrl+id);
  }


  public getDoctor(npi: number): Observable<Doctor> {
    return this.http.get<Doctor>(this.doctorUrl + npi);
  }
   public getDoctorInsurance(npi:number):Observable<Insurance[]>{
     return this.http.get<Insurance[]>(this.doctorUrl+npi+"/insurance");
   }

   public getAllRatings(npi:number):Observable<Feedback[]>{
     return this.http.get<Feedback[]>(this.allRatingsUrl+npi);
   };


   public getDoctorConditions(npi:number):Observable<Conditions[]>{
     return this.http.get<Conditions[]>(this.doctorUrl+npi+"/conditions");
   }

   //Feedback has an appointment number in it, so we can get user email and doctor npi from feedback object.
   public rateDoctor( feedback :Feedback){
     console.log("sending feedback data to Server: ")
     console.log(feedback)
     console.log(this.rateDoctorUrl);
     return this.http.post(this.rateDoctorUrl,feedback);
   }

   public getAppointment(npi : number, revassociate:RevAssociate):Observable<Appointment>{
    console.log("NPI: "+npi+" email: "+String(revassociate.revAssociateEmail));
    return this.http.get<Appointment>(this.getAppointmentUrl+npi+"/"+revassociate.revAssociateEmail);
   }

  public isFollowing(npi: number, revassociate: RevAssociate): Observable<boolean> {
    console.log("checking if "+revassociate.revAssociateEmail+" follows "+npi)
    return this.http.get<boolean>(this.followingUrl + npi + "/" + revassociate.revAssociateEmail);
  }

  public followDoctor(followers: Followers): Observable<Followers> {
    return this.http.post<Followers>(this.followUrl, followers);
  }

  public unfollowDoctor(followerId) {
    return this.http.delete<Followers>(this.followUrl + followerId);
  }

  public getAllFollowers(): Observable<Followers[]> {
    return this.http.get<Followers[]>(this.getAllFollowersUrl);
  }

  public getDoctorSpecialty(npi: number): Observable<Specialty[]> {
    return this.http.get<Specialty[]>(this.doctorUrl + npi + "/specialty");
  }

}
