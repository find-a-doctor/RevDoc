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
import { Conditions } from '../revdoc-classes/conditions';

@Component({
  selector: 'app-edit-doctor-profile',
  templateUrl: './edit-doctor-profile.component.html',
  styleUrls: ['./edit-doctor-profile.component.css']
})
export class EditDoctorProfileComponent implements OnInit {

  doctor:Doctor;
  insurance:Insurance[];
  specialty:Specialty[];
  conditions:Conditions[];

  constructor(private editDocService: EditDocService, private sessionService: SessionService, private route: ActivatedRoute, private router: Router) {
    this.doctor=new Doctor();
   }

  ngOnInit() {
    this.getProfileData();
  }

  getProfileData() {
    this.sessionService.getDoctorSession().subscribe(data => {
      this.doctor = data;
      console.log("refresh "+this.doctor.aboutMe);
      this.editDocService.updateInsurance(this.doctor.npi).subscribe(data => {
        this.insurance = data;
      })
      this.editDocService.updateSpecialty(this.doctor.npi).subscribe(data => {
        this.specialty = data;
      })
      this.editDocService.updateCondition(this.doctor.npi).subscribe(data => {
        this.conditions = data;
      })
    })

    

  }

  sendUpdatedData(formHorizontal:any) {
    console.log("heyyyyyy againnn  " + this.doctor.aboutMe);
    console.log("heyyyyyy againnn  " + this.doctor.npi);
    console.log("heyyyyyy againnn  " + this.doctor.doctorName);
    // this.doctor.doctorName = formHorizontal.value.doctorName;
    // this.doctor.experience = formHorizontal.value.experience;
    // this.doctor.aboutMe = formHorizontal.value.aboutMe;
    // this.insurance[0].insuranceType.insuranceName = formHorizontal.value.insuranceType.insuranceName;
    // this.specialty[0].specialtyType = formHorizontal.value.specialtyType;
    // this.conditions[0].conditionType = formHorizontal.value.conditionType;
    // this.doctor.phone = formHorizontal.value.phone;
    // this.doctor.email = formHorizontal.value.email;

    this.editDocService.updateDoctor(this.doctor).subscribe(data => {
      this.doctor = data;
      console.log("success updatename "+this.doctor.doctorName);
      console.log("success updatename "+this.doctor.aboutMe);
    })
    alert("Doctor Information Updated Successfully!");
    this.goBack();
  }      
    // this.editDocService.updateLocation(this.location).subscribe(data => {
    //   this.location = data;
    // });
    // this.editDocService.updateInsurance(this.doctor.npi).subscribe(data => {
    //   this.insurance = data;
    // });
    // this.editDocService.updateSpecialty(this.doctor.npi).subscribe(data => {
    //   this.specialty = data;
    // });
    // this.editDocService.updateCondition(this.doctor.npi).subscribe(data => {
    //   this.conditions = data;
    // });
    // });
  


  goBack() {
    //window.history.back();
    this.router.navigate(['doctor-profile']);
  }

}