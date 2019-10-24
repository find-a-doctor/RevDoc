import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './revdoc-classes/appointment';

@Injectable({
  providedIn: 'root'
})

export class ViewApptService {

  private getApptsUrl: string;
  private getApptsByAssociateUrl: string;
  private getApptsByDoctorUrl: string;
  public userApptsUrl: string;
  public doctorApptsUrl: string;
  public loginUrl: string;

  constructor(private http: HttpClient) {
    this.getApptsUrl = 'http://localhost:9000/appointments';
    this.getApptsByAssociateUrl = 'http://localhost:9000/userAppointments/';
    this.getApptsByDoctorUrl = 'http://localhost:9000/doctorAppointments/';
    this.userApptsUrl = "http://localhost:9000/appointments/";
    this.doctorApptsUrl = "http://localhost:9000/doctorAppointments/";
    this.loginUrl = "http://localhost:9000/login/";
   }

   public login(email: string){
     console.log("Loggin in user: " +this.loginUrl + email);
     return this.http.get<Object>(this.loginUrl + email);
   }

   public getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.getApptsUrl);
  }

  public getAppointmentsByRevAssociateEmail(email: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.getApptsByAssociateUrl + email);
  }

  public getAppointmentsByDoctorEmail(email: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.getApptsByDoctorUrl + email);
  }

  public userAppts(email: string) {
    console.log("Grabbing all Appts: " + this.userApptsUrl + email);
    return this.http.get<Object[]>(this.userApptsUrl + email);
  }

  public doctorAppts(email: string) {
    console.log("Grabbing all Appts: " + this.doctorApptsUrl + email);
    return this.http.get<Object[]>(this.doctorApptsUrl + email);
  }

}