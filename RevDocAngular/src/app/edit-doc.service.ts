import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from './revdoc-classes/doctor';
import { ConditionType } from './revdoc-classes/condition-type';
import { Location } from './revdoc-classes/location';
import { Insurance } from './revdoc-classes/insurance';
import { License } from './revdoc-classes/license';
import { Specialty } from './revdoc-classes/specialty';
import { Conditions } from './revdoc-classes/conditions';

@Injectable({
  providedIn: 'root'
})
export class EditDocService {

  baseUrl: string;
  doctorUrl: string;
  getDoctorByIdUrl: string;
  updateDoctorUrl: string;
  updateConditionUrl: string;
  updateSpecialtyUrl: string;
  updateInsuranceUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.baseUrl = "http://localhost:9000"; 
    this.doctorUrl = this.baseUrl + "/doctorSession";
    this.getDoctorByIdUrl = "http://localhost:9000/doctor/";
    this.updateDoctorUrl = "http://localhost:9000/updateDoctor/";
    // this.updateLocationUrl = "http://localhost:9000/doctor/";
    this.updateInsuranceUrl = "http://localhost:9000/doctorinfo";
    // this.updateLicenseUrl = "http://localhost:9000/doctor/";
    this.updateSpecialtyUrl = "http://localhost:9000/doctorinfo/";
    this.updateConditionUrl = "http://localhost:9000/doctorinfo/";
  }

  public getDoctor(npi:number): Observable<Doctor> {
    return this.http.get<Doctor>(this.doctorUrl + npi);
  }
  public getDoctorById(id:number): Observable<Doctor> {
    return this.http.get<Doctor>(this.getDoctorByIdUrl + id);
  }
  public updateDoctor(doctor:Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(this.updateDoctorUrl , doctor);
  }
  // public updateLocation(location:Location): Observable<Location> {
  //   return this.http.put<Location>(this.updateLocationUrl, location);
  // }
  public updateInsurance(npi:number): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(this.updateInsuranceUrl+"/"+ npi + "/insurance");
  }
  // public updateLicense(license:License): Observable<License> {
  //   return this.http.put<License>(this.updateLicenseUrl, license);
  // }
  public updateSpecialty(npi:number): Observable<Specialty[]> {
    return this.http.get<Specialty[]>(this.updateSpecialtyUrl + "/"+ npi + "/specialty");
  }
  public updateCondition(npi:number): Observable<Conditions[]> {
    return this.http.get<Conditions[]>(this.updateConditionUrl + "/"+ npi + "/conditions");
  }
}