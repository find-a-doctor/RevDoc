import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../revdoc-classes/doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { EditDocService } from '../edit-doc.service';
import { Location } from '../revdoc-classes/location';
import { Insurance } from '../revdoc-classes/insurance';
import { License } from '../revdoc-classes/license';
import { Specialty } from '../revdoc-classes/specialty';
import { ConditionType } from '../revdoc-classes/condition-type';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-edit-doctor-profile',
  templateUrl: './edit-doctor-profile.component.html',
  styleUrls: ['./edit-doctor-profile.component.css']
})
export class EditDoctorProfileComponent implements OnInit {

  doctor:Doctor;
  location:Location;
  insurance:Insurance;
  license:License;
  specialty:Specialty;
  conditionType:ConditionType;

  constructor(private editDocService: EditDocService, private sessionService: SessionService, private route: ActivatedRoute, private router: Router) {
    this.doctor=new Doctor();
   }

  ngOnInit() {
    this.getProfileData();
  }

  getProfileData() {
    this.sessionService.getDoctorSession().subscribe(data => {
      this.doctor = data;
    })
  }

  sendUpdatedData(formHorizontal:any) {
    this.doctor.doctorName = formHorizontal.value.doctorName;
    this.location.state = formHorizontal.value.state;
    this.location.locationName = formHorizontal.value.locationName;
    this.doctor.experience = formHorizontal.value.experience;
    this.doctor.aboutMe = formHorizontal.value.aboutMe;
    this.insurance.insuranceType = formHorizontal.value.insuranceType;
    this.license.licenseName = formHorizontal.value.licenseName;
    this.specialty.specialtyType = formHorizontal.value.specialtyType;
    this.conditionType.conditionName = formHorizontal.value.conditionName;
    this.doctor.phone = formHorizontal.value.phone;
    this.doctor.email = formHorizontal.value.email;
    this.location.address = formHorizontal.value.address;

    this.editDocService.updateDoctor(this.doctor).subscribe(data => {
      this.doctor = data;
    });
    // this.editDocService.updateLocation(this.location).subscribe(data => {
    //   this.location = data;
    // });
    // this.editDocService.updateInsurance(this.insurance).subscribe(data => {
    //   this.insurance = data;
    // });
    // this.editDocService.updateLicense(this.license).subscribe(data => {
    //   this.license = data;
    // });
    // this.editDocService.updateSpecialty(this.specialty).subscribe(data => {
    //   this.specialty = data;
    // });
    // this.editDocService.updateCondition(this.conditionType).subscribe(data => {
    //   this.conditionType = data;
    // });
  }
  goBack() {
    window.history.back()
  }

}