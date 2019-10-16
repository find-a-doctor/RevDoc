import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConditionType } from './revdoc-classes/condition-type';
import { SpecialtyType } from './revdoc-classes/specialty-type';
import { InsuranceType } from './revdoc-classes/insurance-type';
import { Location } from './revdoc-classes/Location';


@Injectable({
  providedIn: 'root'
})

export class DoctorInfoService {

  private searchDoctorUrl: string;
  private getAllDoctorsUrl: string;
  private getAllConditionsUrl: string;
  private getAllSpecialtyUrl: string;
  private getAllInsuranceUrl: string;
  private getLocationByIdUrl: string;

  constructor(private http: HttpClient) {
    this.searchDoctorUrl = "http://localhost:9000/searchDoctor/";
    this.getAllDoctorsUrl = "http://localhost:9000/doctors";
    this.getAllConditionsUrl = "http://localhost:9000/conditionTypes";
    this.getAllSpecialtyUrl = "http://localhost:9000/specialtyTypes";
    this.getAllInsuranceUrl = "http://localhost:9000/insuranceTypes";
    this.getLocationByIdUrl = "http://localhost:9000/location/";
  }

  public searchDoctor(search: string) {
    console.log("Search Doctor: " + this.searchDoctorUrl + search);
    //  return this.http.get<Doctor[]>(this.searchDoctorUrl+search);
    return this.http.get<Object[]>(this.searchDoctorUrl + search);
  }

  public getAllDoctors() {
    return this.http.get<Object[]>(this.getAllDoctorsUrl);
  }
  public getAllConditions() {
    return this.http.get<ConditionType>(this.getAllConditionsUrl);
  }
  public getAllSpecialtys() {
    return this.http.get<SpecialtyType>(this.getAllSpecialtyUrl);
  }
  public getAllInsurances() {
    return this.http.get<InsuranceType>(this.getAllInsuranceUrl);
  }
 
  public getLocationById(id: number){
    return this.http.get<Location>(this.getLocationByIdUrl+id);
  }
}
