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
  private getInsuranceTypeByNpiUrl: string;
  private getAllDoctorAppointmentByIdUrl: string;
  private deleteDoctorAppointmentUrl: string;
  private setDoctorAppointmentUrl: string;
  baseUrl: string;
  doctorUrl: string;
  allRatingsUrl: string;
  followingUrl: string;
  followUrl: string;
  getAllFollowersUrl: string;
  rateDoctorUrl: string;
  getAppointmentUrl: string;
  getAllUrl: string;

  constructor(private http: HttpClient) {
    this.searchDoctorUrl = "http://localhost:9000/searchDoctor/";
    this.getAllDoctorsUrl = "http://localhost:9000/doctors";
    this.getAllConditionsUrl = "http://localhost:9000/conditionTypes";
    this.getAllSpecialtyUrl = "http://localhost:9000/specialtyTypes";
    this.getAllInsuranceUrl = "http://localhost:9000/insuranceTypes";
    this.getLocationByIdUrl = "http://localhost:9000/location/";
    this.getDoctorByIdUrl = "http://localhost:9000/doctor/";
    this.getInsuranceTypeByNpiUrl = "http://localhost:9000/insuranceTypeByNPI/";
    this.getAllDoctorAppointmentByIdUrl = "http://localhost:9000/doctorAppointmentByNPI/";
    this.deleteDoctorAppointmentUrl = "http://localhost:9000/deleteDoctorAppointment/";
    this.setDoctorAppointmentUrl = "http://localhost:9000/doctorAppointment";
    this.baseUrl = "http://localhost:9000/";
    this.doctorUrl = this.baseUrl + "doctorinfo/";
    this.getAllUrl = this.baseUrl + "doctors";
    this.allRatingsUrl = this.baseUrl + "allRatings/";
    this.followingUrl = this.baseUrl + "following/";
    this.followUrl = this.baseUrl + "follow/";
    this.getAllFollowersUrl = this.baseUrl + "allFollowers";
    this.rateDoctorUrl = this.baseUrl + "rateDoctor/"
    this.getAppointmentUrl= this.baseUrl + "getAppointment/"
    this.rateDoctorUrl = "http://localhost:9000/feedback";
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

  public getAllDoctorAppointmentById(id: number){
    return this.http.get<Appointment[]>(this.getAllDoctorAppointmentByIdUrl+id);
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

  public setDoctorAppointment(appointment: Appointment){
    return this.http.post<Appointment>(this.setDoctorAppointmentUrl, appointment);
  }
   public getDoctorConditions(npi:number):Observable<Conditions[]>{
     return this.http.get<Conditions[]>(this.doctorUrl+npi+"/conditions");
   }

   //Feedback has an appointment number in it, so we can get user email and doctor npi from feedback object.
   public rateDoctor( feedback :Feedback){
     return this.http.post(this.baseUrl+this.rateDoctorUrl,feedback);
   }

  public isFollowing(npi: number, revassociate: RevAssociate): Observable<boolean> {
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

  //gets correct appointment to be rated.
  public getAppointment(npi: number, associateEmail: string): Observable<Appointment>{
   return this.http.get<Appointment>(this.getAppointmentUrl+npi+"/"+associateEmail)
  }

  public getInsuranceTypeByNpi(id: number){
    return this.http.get<InsuranceType[]>(this.getInsuranceTypeByNpiUrl+id);
  }

  public deleteDoctorAppointment(appointmentId: string){
    return this.http.delete<Appointment>(this.deleteDoctorAppointmentUrl+ appointmentId);
  }
}