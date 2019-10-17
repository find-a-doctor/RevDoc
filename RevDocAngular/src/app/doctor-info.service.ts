import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Doctor } from './revdoc-classes/doctor';
import { Router } from '@angular/router';
import { Feedback } from './revdoc-classes/feedback';
import { Insurance } from './revdoc-classes/insurance';
import { Specialty } from './revdoc-classes/specialty';
import { Conditions } from './revdoc-classes/conditions';
import { RevAssociate } from './revdoc-classes/rev-associate';


@Injectable({
  providedIn: 'root'
})
export class DoctorInfoService {


  baseUrl:string;
  doctorUrl:string;
  getAllUrl:string;
  allRatingsUrl:string;
  rateDoctorUrl:string;

  constructor(private http:HttpClient, private router:Router) {
    this.baseUrl="http://localhost:1000/";
    this.doctorUrl=this.baseUrl+"doctor/";
    this.getAllUrl=this.baseUrl+"doctors";
    this.allRatingsUrl=this.baseUrl+"allRatings/";
    this.rateDoctorUrl=this.baseUrl+"rateDoctor/"


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
    
   //Feedback has an appointment object in it, so we can get user email and doctor npi from feedback object.
   public rateDoctor( feedback :Feedback){
     return this.http.post(this.baseUrl+this.rateDoctorUrl,feedback);
   }

}
