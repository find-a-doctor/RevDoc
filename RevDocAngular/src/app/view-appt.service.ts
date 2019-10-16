import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ViewApptService {

  public grabUserUrl: string;
  public grabUserApptsUrl: string;
  public grabDoctorApptsUrl: string;

  constructor(private http: HttpClient) {
    this.grabUserUrl = "http://localhost:9000/grabUser/";
    this.grabUserApptsUrl = "http://localhost:9000/appointments";
    this.grabDoctorApptsUrl = "http://localhost:9000/doctorAppointments";
   }

   public grabUser(email: string) {
    console.log("Grab User: " + this.grabUserUrl + email);
    return this.http.get<Object[]>(this.grabUserUrl + email);
  }
}