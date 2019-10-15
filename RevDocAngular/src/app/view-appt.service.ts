import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewApptService {
  public grabUserUrl: string;
  constructor(private http: HttpClient) {
    this.grabUserUrl = "http://localhost:9000/grabUser/";
   }

   public grabUser(search: string) {
    console.log("Grab User: " + this.grabUserUrl + search);
    //  return this.http.get<Doctor[]>(this.searchDoctorUrl+search);
    return this.http.get<Object[]>(this.grabUserUrl + search);
  }
}