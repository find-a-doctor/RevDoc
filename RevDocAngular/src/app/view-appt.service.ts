import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './revdoc-classes/appointment';

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

}
