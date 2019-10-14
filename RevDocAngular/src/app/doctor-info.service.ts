import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Doctor } from './revdoc-classes/doctor';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DoctorInfoService {

  baseUrl:string;
  doctorUrl:string;
  getAllUrl:string;

  constructor(private http:HttpClient, private router:Router) {
    this.baseUrl="http://localhost:1000/";
    this.doctorUrl=this.baseUrl+"doctor/";
    this.getAllUrl=this.baseUrl+"doctors";


   }

   public getDoctor(npi:number):Observable<Doctor>{
     return this.http.get<Doctor>(this.doctorUrl+npi);
   }

   public getAllDoctors():Observable<Doctor[]>{
     return this.http.get<Doctor[]>(this.getAllUrl);
   }

}
