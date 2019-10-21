import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConditionType } from './revdoc-classes/condition-type';
import { SpecialtyType } from './revdoc-classes/specialty-type';
import { InsuranceType } from './revdoc-classes/insurance-type';
import { Location } from './revdoc-classes/location';
import { Doctor } from './revdoc-classes/doctor';
import { Appointment } from './revdoc-classes/appointment';


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
  private getDoctorByIdUrl: string;
  private getInsuranceTypeByNpiUrl: string;
  private getAllDoctorAppointmentByIdUrl: string;
  private getAllUserAppointmentByIdUrl: string;
  private setDoctorAppointmentUrl: string;
  private deleteDoctorAppointmentUrl: string;

  constructor(private http: HttpClient) {
    this.searchDoctorUrl = "http://localhost:9000/searchDoctor/";
    this.getAllDoctorsUrl = "http://localhost:9000/doctors";
    this.getAllConditionsUrl = "http://localhost:9000/conditionTypes";
    this.getAllSpecialtyUrl = "http://localhost:9000/specialtyTypes";
    this.getAllInsuranceUrl = "http://localhost:9000/insuranceTypes";
    this.getLocationByIdUrl = "http://localhost:9000/location/";
    this.getDoctorByIdUrl = "http://localhost:9000/doctor/";
    this.getInsuranceTypeByNpiUrl = "http://localhost:9000/insuranceTypeByNPI/";
    this.getAllDoctorAppointmentByIdUrl = "http://localhost:9000/doctorAppointmentByNPI/";
    this.getAllUserAppointmentByIdUrl = "http://localhost:9000/userAppointmentById/";
    this.setDoctorAppointmentUrl = "http://localhost:9000/doctorAppointment";
    this.deleteDoctorAppointmentUrl = "http://localhost:9000/deleteDoctorAppointment/";
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

  public getDoctorById(id: number){
    return this.http.get<Doctor>(this.getDoctorByIdUrl+id);
  }

  public getInsuranceTypeByNpi(id: number){
    return this.http.get<InsuranceType[]>(this.getInsuranceTypeByNpiUrl+id);
  }

  public getAllDoctorAppointmentById(id: number){
    return this.http.get<Appointment[]>(this.getAllDoctorAppointmentByIdUrl+id);
  }

  public getAllUserAppointmentById(id: number){
    return this.http.get<Appointment[]>(this.getAllUserAppointmentByIdUrl+id);
  }

  public setDoctorAppointment(appointment: Appointment){
    return this.http.post<Appointment>(this.setDoctorAppointmentUrl, appointment);
  }
  public deleteDoctorAppointment(appointmentId: string){
    return this.http.delete<Appointment>(this.deleteDoctorAppointmentUrl+ appointmentId);
  }

}


