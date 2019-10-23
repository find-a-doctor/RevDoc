import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './revdoc-classes/appointment';
=======
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
>>>>>>> origin/test/master

@Injectable({
  providedIn: 'root'
})

export class ViewApptService {
  private getApptsUrl: string;
  private getApptsByAssociateUrl: string;
  private getApptsByDoctorUrl: string;

  constructor(private http: HttpClient) {
    this.getApptsUrl = 'http://localhost:9000/appointments';
    this.getApptsByAssociateUrl = 'http://localhost:9000/userAppointments/';
    this.getApptsByDoctorUrl = 'http://localhost:9000/doctorAppointments/';
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

<<<<<<< HEAD
}
=======
  public allApptsUrl: string;
  public userApptsUrl: string;
  public doctorApptsUrl: string;
  public loginUrl: string;

  constructor(private http: HttpClient) {
    this.allApptsUrl = "http://localhost:9000/appointments";
    this.userApptsUrl = "http://localhost:9000/appointments/";
    this.doctorApptsUrl = "http://localhost:9000/doctorAppointments/";
    this.loginUrl = "http://localhost:9000/login/";
   }

   public login(email: string){
     console.log("Loggin in user: " +this.loginUrl + email);
     return this.http.get<Object>(this.loginUrl + email);
   }

   public allAppts() {
    console.log("Grabbing all Appts: " + this.allApptsUrl);
    return this.http.get<Object[]>(this.allApptsUrl);
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
>>>>>>> origin/test/master
