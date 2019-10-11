import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class DoctorInfoService {

  private searchDoctorUrl: string;
  private getAllDoctorsUrl: string;

  constructor(private http: HttpClient) {
    this.searchDoctorUrl = "http://localhost:9000/searchDoctor/";
    this.getAllDoctorsUrl = "http://localhost:9000/doctors";
  }

  public searchDoctor(search: string) {
    console.log("Search Doctor: " + this.searchDoctorUrl + search);
    //  return this.http.get<Doctor[]>(this.searchDoctorUrl+search);
    return this.http.get<Object[]>(this.searchDoctorUrl + search);
  }

  public getAllDoctors(){
    return this.http.get<Object[]>(this.getAllDoctorsUrl);
  }

}
