import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RevAssociate } from './revdoc-classes/rev-associate';
import { Doctor } from './revdoc-classes/doctor';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public associateSessionUrl: string;
  public doctorSessionUrl: string;
  public getAssociateSessionUrl: string;
  public getDoctorSessionUrl: string;
  public destroySessionUrl: string
  public associate: RevAssociate;
  public doctor: Doctor;

  constructor(private http: HttpClient) {
    this.associateSessionUrl = "http://localhost:9000/associateSession";
    this.doctorSessionUrl= "http://localhost:9000/doctorSession";
    this.getAssociateSessionUrl = "http://localhost:9000/getAssociateSession"
    this.getDoctorSessionUrl = "http://localhost:9000/getDocSession"
    this.destroySessionUrl = "http://localhost:9000/destroy"
   }

   public initAssociateSession(associate: RevAssociate){
     return this.http.post<RevAssociate>(this.associateSessionUrl, associate)
   }

   public initDoctorSession(doctor: Doctor) {
     return this.http.post<Doctor>(this.doctorSessionUrl, doctor)
   }

   public getAssociateSession(){
     return this.http.get<RevAssociate>(this.getAssociateSessionUrl)
   }

   public getDoctorSession(){
    return this.http.get<Doctor>(this.getDoctorSessionUrl)
  }
}
