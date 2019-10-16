import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ViewApptService {

  public allApptsUrl: string;
  public userApptsUrl: string;
  public doctorApptsUrl: string;

  constructor(private http: HttpClient) {
    this.allApptsUrl = "http://localhost:9000/appointments";
    this.userApptsUrl = "http://localhost:9000/appointments/";
    this.doctorApptsUrl = "http://localhost:9000/doctorAppointments/";
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