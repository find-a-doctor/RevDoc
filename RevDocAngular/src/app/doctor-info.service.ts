import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Doctor } from './revdoc-classes/doctor';
import { Router } from '@angular/router';
import { Feedback } from './revdoc-classes/feedback';
import { Insurance } from './revdoc-classes/insurance';


@Injectable({
  providedIn: 'root'
})
export class DoctorInfoService {

  baseUrl:string;
  doctorUrl:string;
  getAllUrl:string;
  allRatingsUrl:string;

  constructor(private http:HttpClient, private router:Router) {
    this.baseUrl="http://localhost:1000/";
    this.doctorUrl=this.baseUrl+"doctor/";
    this.getAllUrl=this.baseUrl+"doctors";
    this.allRatingsUrl=this.baseUrl+"allRatings/"


   }

   public getDoctor(npi:number):Observable<Doctor>{
     return this.http.get<Doctor>(this.doctorUrl+npi);
   }

   public getDoctorInsurance(doctor:Doctor):Observable<Insurance[]>{
     return this.http.get<Insurance[]>this.doctorUrl+doctor.npi+"/"+"insurance");
   }

   public getAllDoctors():Observable<Doctor[]>{
     return this.http.get<Doctor[]>(this.getAllUrl);
   }

   public getAllRatings(npi:number):Observable<Feedback[]>{
     console.log("getting feed back for "+npi)
     return this.http.get<Feedback[]>(this.allRatingsUrl+npi);
   };

}
