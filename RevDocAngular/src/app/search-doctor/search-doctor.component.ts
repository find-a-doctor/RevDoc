import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorInfoService } from '../doctor-info.service';
//import { timingSafeEqual } from 'crypto';
import { SpecialtyType } from '../revdoc-classes/specialty-type';
import { InsuranceType } from '../revdoc-classes/insurance-type';
import { ConditionType } from '../revdoc-classes/condition-type';
//import { JwPaginationComponent } from 'jw-angular-pagination';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {

  searchValue: string;
  opendetails: boolean;
  searchName: string;
  doctorList: Object[];
  backupList: Object[];
  backupList2: Object[];
  isGeneralSearch: boolean;
  isSort: boolean;
  //init for specialty, insurance, and condition
  specialtyList: SpecialtyType;
  selectedSpecialty: string;
  insuranceList: InsuranceType;
  selectedInsurance: string;
  conditionList: ConditionType;
  selectedCondition: string;
  //Pagination
  selectedNumberPage: number;
  pageOfItems: Array<any>;


  constructor(private searchDoctorService: DoctorInfoService, private router: Router) {
    this.searchValue = "";
    this.opendetails = false;
    this.isGeneralSearch = true;
    this.isSort = true;
    this.doctorList = [];
    this.backupList = [];
    this.backupList2 = [];
    this.searchName = "Advanced Search";
    // Number rows per page at Pagination
    this.selectedNumberPage = 10;
    // set default 0 to insurance, specialty, and condition
    this.selectedSpecialty = "0";
    this.selectedInsurance = "0";
    this.selectedCondition = "0";
  }

  ngOnInit() {

    // an example array of 10 items to be paged
    // this.items = Array(10).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}` }));
    this.searchDoctorService.getAllSpecialtys().subscribe(data => { this.specialtyList = data; });
    this.searchDoctorService.getAllInsurances().subscribe(data => { this.insuranceList = data });
    this.searchDoctorService.getAllConditions().subscribe(data => { this.conditionList = data });
  }

  /////////////////////////////// Combo Box for Insurance, specialty, and condition
  onSpecialtyChagne(newValue: string) {
    console.log(newValue);
    this.selectedSpecialty = newValue;
    if (this.doctorList.length > 0 || this.backupList.length > 0 || this.backupList2.length > 0) {
      if (this.backupList.length > 0) {
        this.doctorList = this.backupList;
      }
      if (this.backupList2.length > 0) {
        this.doctorList = this.backupList2;
      }
      if (this.selectedSpecialty != "0") {
        this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
      } else { this.searchDoctor(); }
      if (this.selectedCondition != "0") {
        this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
      }
      if (this.selectedInsurance != "0") {
        this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
      }
    }
  }

  onConditionChagne(newValue: string) {
    console.log(newValue);
    this.selectedCondition = newValue;
    if (this.doctorList.length > 0 || this.backupList.length > 0 || this.backupList2.length > 0) {
      if (this.backupList.length > 0) {
        this.doctorList = this.backupList;
      }
      if (this.backupList2.length > 0) {
        this.doctorList = this.backupList2;
      }
      if (this.selectedCondition != "0") {
        this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
      } else { this.searchDoctor(); }
      if (this.selectedSpecialty != "0") {
        this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
      }
      if (this.selectedInsurance != "0") {
        this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
      }
    }
  }

  onInsuranceChagne(newValue: string) {
    console.log(newValue);
    this.selectedInsurance = newValue;
    if (this.doctorList.length > 0 || this.backupList.length > 0 || this.backupList2.length > 0) {
      if (this.backupList.length > 0) {
        this.doctorList = this.backupList;
      }
      if (this.backupList2.length > 0) {
        this.doctorList = this.backupList2;
      }
      if (this.selectedInsurance != "0") {
        this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
      } else { this.searchDoctor(); }
      if (this.selectedSpecialty != "0") {
        this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
      }
      if (this.selectedCondition != "0") {
        this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
      }
    }
  }

  ////////////////////////////////////////// Pagination
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  onNumberPageChange(newValue: number) {
    console.log(newValue);
    if (this.searchValue == undefined || this.searchValue == "") {
      this.searchDoctorService.getAllDoctors().subscribe(data => {
        this.selectedNumberPage = newValue;
        this.doctorList = data;
        if (this.selectedSpecialty != "0") {
          this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
        }
        if (this.selectedCondition != "0") {
          this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
        }
        if (this.selectedInsurance != "0") {
          this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
        }
      });
    }
    else {
      this.searchDoctorService.searchDoctor(this.searchValue).subscribe(data => {
        // this.doctorList = data;
        this.selectedNumberPage = newValue;
        this.doctorList = data;
        if (this.doctorList == null) {
          this.doctorList = [];
          return;
        }
        if (this.selectedSpecialty != "0") {
          this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
        }
        if (this.selectedCondition != "0") {
          this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
        }
        if (this.selectedInsurance != "0") {
          this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
        }
      });
    }

    // ... do other stuff here ...
  }
  //////////////////////////////////// Search Doctor
  searchDoctor() {
    this.opendetails = true;
    if (this.searchValue == undefined || this.searchValue == "") {
      this.searchDoctorService.getAllDoctors().subscribe(data => {
        this.doctorList = data;
        if (this.selectedSpecialty != "0") {
          this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
        }
        if (this.selectedCondition != "0") {
          this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
        }
        if (this.selectedInsurance != "0") {
          this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
        }
      });
      this.searchDoctorService.getAllDoctors().subscribe(data => {
        this.backupList = data;
        if (this.selectedSpecialty != "0") {
          this.backupList = this.backupList.filter(value => value[7].includes(this.selectedSpecialty));
        }
        if (this.selectedCondition != "0") {
          this.backupList = this.backupList.filter(value => value[9].includes(this.selectedCondition));
        }
        if (this.selectedInsurance != "0") {
          this.backupList = this.backupList.filter(value => value[8].includes(this.selectedInsurance));
        }
      });
      this.searchDoctorService.getAllDoctors().subscribe(data => {
        this.backupList2 = data;
        if (this.selectedSpecialty != "0") {
          this.backupList2 = this.backupList2.filter(value => value[7].includes(this.selectedSpecialty));
        }
        if (this.selectedCondition != "0") {
          this.backupList2 = this.backupList2.filter(value => value[9].includes(this.selectedCondition));
        }
        if (this.selectedInsurance != "0") {
          this.backupList2 = this.backupList2.filter(value => value[8].includes(this.selectedInsurance));
        }
      });

    }
    else {
      this.searchDoctorService.searchDoctor(this.searchValue).subscribe(data => {
        this.doctorList = data;
        if (this.doctorList == null) {
          this.doctorList = [];
          return;
        }
        if (this.selectedSpecialty != "0") {
          this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
        }
        if (this.selectedCondition != "0") {
          this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
        }
        if (this.selectedInsurance != "0") {
          this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
        }
      });
      this.searchDoctorService.searchDoctor(this.searchValue).subscribe(data => {
        this.backupList = data;
        if (this.backupList == null) {
          this.backupList = [];
          return;
        }
        if (this.selectedSpecialty != "0") {
          this.backupList = this.backupList.filter(value => value[7].includes(this.selectedSpecialty));
        }
        if (this.selectedCondition != "0") {
          this.backupList = this.backupList.filter(value => value[9].includes(this.selectedCondition));
        }
        if (this.selectedInsurance != "0") {
          this.backupList = this.backupList.filter(value => value[8].includes(this.selectedInsurance));
        }
      });
      this.searchDoctorService.searchDoctor(this.searchValue).subscribe(data => {
        this.backupList2 = data;
        if (this.backupList2 == null) {
          this.backupList2 = [];
          return;
        }
        if (this.selectedSpecialty != "0") {
          this.backupList2 = this.backupList2.filter(value => value[7].includes(this.selectedSpecialty));
        }
        if (this.selectedCondition != "0") {
          this.backupList2 = this.backupList2.filter(value => value[9].includes(this.selectedCondition));
        }
        if (this.selectedInsurance != "0") {
          this.backupList2 = this.backupList2.filter(value => value[8].includes(this.selectedInsurance));
        }
      });

    }
  }

  advancedSearch() {
    if (this.isGeneralSearch) {
      //  console.log("Set False");
      this.isGeneralSearch = false;
      this.searchName = "Normal Search";
    } else {
      // console.log("Set Trueeeee");
      this.isGeneralSearch = true;
      this.searchName = "Advanced Search";

    }
    // Reset to ALL for insurance, specialty, and condition
    this.selectedSpecialty = "0";
    this.selectedInsurance = "0";
    this.selectedCondition = "0";
  }
  /////////////////////////// GO TO DOCTOR DETAILS
  public goDoctorDetails(doc: Object) {
    // this.router.navigate(['searchDoctor/', { id: doc[0] }]);

    //Jessica is trying something
    var num=doc[0];
    console.log(this.router.navigate(['doctor/'+num]));


  }
  ////////////////////////////////// SORTING
  npiSort() {
    // console.log("npi sort");
    // this.doctorList = this.doctorList.sort(function(a,b){
    //   return a[0] < b[0]?1:a[0] <b[0]?-1:0
    //  });

    if (this.isSort) {
      this.isSort = false;
      //    this.searchDoctor();
      //    if (this.searchValue == undefined || this.searchValue == "") {
      // this.searchDoctorService.getAllDoctors().subscribe(data => {
      //   this.doctorList = data;
      this.doctorList = this.backupList;
      this.doctorList.sort((a, b) => b[0] - a[0]);
      //  });
      //      }
      //      else {
      // this.searchDoctorService.searchDoctor(this.searchValue).subscribe(data => {
      // this.doctorList = data;
      //    this.doctorList = data;

      //     if (this.doctorList == null) {
      //     this.doctorList = [];
      //      this.doctorList = this.backupList2;
      //          this.doctorList.sort((a, b) => b[0] - a[0]);
      //   }
      //   });
      //     }
      // this.searchDoctorService.getAllDoctors().subscribe(data => {
      //   this.doctorList = data;
      //  this.doctorList.sort((a, b) => b[0] - a[0]);

      //this.pageOfItems = pageOfItems;
      // this.initialPage =1;
      //  this.pageOfItems.sort((a, b) => b[0] - a[0]);
      // });
    } else {
      this.isSort = true;
      //   this.searchDoctor();
      // this.searchDoctorService.getAllDoctors().subscribe(data => {
      //   this.doctorList = data;
      this.doctorList = this.backupList2;
      this.doctorList.sort((a, b) => a[0] - b[0]);

      //this.pageOfItems = pageOfItems;
      //   this.initialPage=1;
      //this.pageOfItems.sort((a, b) => a[0] - b[0]);
      // this.pageOfItems.reverse();
      // });
    }
    // console.log("npi sort");
    if (this.selectedSpecialty != "0") {
      this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
    }
    if (this.selectedCondition != "0") {
      this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
    }
    if (this.selectedInsurance != "0") {
      this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
    }
  }

  nameSort() {
    if (this.isSort) {
      this.isSort = false;
      this.doctorList = this.backupList;
      this.doctorList.sort((a, b) => {
        if (b[1] > a[1]) {
          return 1;
        }
        else {
          if (b[1] < a[1])
            return -1;
          else return 0;
        }
      });
    } else {
      this.isSort = true;
      this.doctorList = this.backupList2;
      this.doctorList.sort((b, a) => {
        if (b[1] > a[1]) {
          return 1;
        }
        else {
          if (b[1] < a[1])
            return -1;
          else return 0;
        }
      });
    }
    if (this.selectedSpecialty != "0") {
      this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
    }
    if (this.selectedCondition != "0") {
      this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
    }
    if (this.selectedInsurance != "0") {
      this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
    }
  }

  phoneSort() {
    //   console.log("Phone sort: "+newValue);
    if (this.isSort) {
      this.isSort = false;
      this.doctorList = this.backupList;
      this.doctorList.sort((a, b) => {
        if (b[2] > a[2]) {
          return 1;
        }
        else {
          if (b[2] < a[2])
            return -1;
          else return 0;
        }
      });
      //    JwPaginationComponent.;

    } else {
      this.isSort = true;
      this.doctorList = this.backupList2;
      this.doctorList.sort((b, a) => {
        if (b[2] > a[2]) {
          return 1;
        }
        else {
          if (b[2] < a[2])
            return -1;
          else return 0;
        }
      });
    }
    if (this.selectedSpecialty != "0") {
      this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
    }
    if (this.selectedCondition != "0") {
      this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
    }
    if (this.selectedInsurance != "0") {
      this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
    }
  }

  emailSort() {
    if (this.isSort) {
      this.isSort = false;
      this.doctorList = this.backupList;
      this.doctorList.sort((a, b) => {
        if (b[3] > a[3]) {
          return 1;
        }
        else {
          if (b[3] < a[3])
            return -1;
          else return 0;
        }
      });
    } else {
      this.isSort = true;
      this.doctorList = this.backupList2;
      this.doctorList.sort((b, a) => {
        if (b[3] > a[3]) {
          return 1;
        }
        else {
          if (b[3] < a[3])
            return -1;
          else return 0;
        }
      });
    }
    if (this.selectedSpecialty != "0") {
      this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
    }
    if (this.selectedCondition != "0") {
      this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
    }
    if (this.selectedInsurance != "0") {
      this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
    }
  }

  addressSort() {
    if (this.isSort) {
      this.isSort = false;
      this.doctorList = this.backupList;
      this.doctorList.sort((a, b) => {
        if (b[4] > a[4]) {
          return 1;
        }
        else {
          if (b[4] < a[4])
            return -1;
          else return 0;
        }
      });
    } else {
      this.isSort = true;
      this.doctorList = this.backupList2;
      this.doctorList.sort((b, a) => {
        if (b[4] > a[4]) {
          return 1;
        }
        else {
          if (b[4] < a[4])
            return -1;
          else return 0;
        }
      });
    }
    if (this.selectedSpecialty != "0") {
      this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
    }
    if (this.selectedCondition != "0") {
      this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
    }
    if (this.selectedInsurance != "0") {
      this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
    }
  }

  citySort() {
    if (this.isSort) {
      this.isSort = false;
      this.doctorList = this.backupList;
      this.doctorList.sort((a, b) => {
        if (b[5] > a[5]) {
          return 1;
        }
        else {
          if (b[5] < a[5])
            return -1;
          else return 0;
        }
      });
    } else {
      this.isSort = true;
      this.doctorList = this.backupList2;
      this.doctorList.sort((b, a) => {
        if (b[5] > a[5]) {
          return 1;
        }
        else {
          if (b[5] < a[5])
            return -1;
          else return 0;
        }
      });
    }
    if (this.selectedSpecialty != "0") {
      this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
    }
    if (this.selectedCondition != "0") {
      this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
    }
    if (this.selectedInsurance != "0") {
      this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
    }
  }

  yearSort() {
    if (this.isSort) {
      this.isSort = false;
      this.doctorList = this.backupList;
      this.doctorList.sort((a, b) => b[6] - a[6]);
      // });
    } else {
      this.isSort = true;
      this.doctorList = this.backupList2;
      this.doctorList.sort((a, b) => a[6] - b[6]);
      //   });
    }
    if (this.selectedSpecialty != "0") {
      this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
    }
    if (this.selectedCondition != "0") {
      this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
    }
    if (this.selectedInsurance != "0") {
      this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
    }
  }

  specialtySort() {
    if (this.isSort) {
      this.isSort = false;
      this.doctorList = this.backupList;
      this.doctorList.sort((a, b) => {
        if (b[7] > a[7]) {
          return 1;
        }
        else {
          if (b[7] < a[7])
            return -1;
          else return 0;
        }
      });
    } else {
      this.isSort = true;
      this.doctorList = this.backupList2;
      this.doctorList.sort((b, a) => {
        if (b[7] > a[7]) {
          return 1;
        }
        else {
          if (b[7] < a[7])
            return -1;
          else return 0;
        }
      });
    }
    if (this.selectedSpecialty != "0") {
      this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
    }
    if (this.selectedCondition != "0") {
      this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
    }
    if (this.selectedInsurance != "0") {
      this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
    }
  }

  insuranceSort() {
    if (this.isSort) {
      this.isSort = false;
      this.doctorList = this.backupList;
      this.doctorList.sort((a, b) => {
        if (b[8] > a[8]) {
          return 1;
        }
        else {
          if (b[8] < a[8])
            return -1;
          else return 0;
        }
      });
    } else {
      this.isSort = true;
      this.doctorList = this.backupList2;
      this.doctorList.sort((b, a) => {
        if (b[8] > a[8]) {
          return 1;
        }
        else {
          if (b[8] < a[8])
            return -1;
          else return 0;
        }
      });
    }
    if (this.selectedSpecialty != "0") {
      this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
    }
    if (this.selectedCondition != "0") {
      this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
    }
    if (this.selectedInsurance != "0") {
      this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
    }
  }

  conditionSort() {
    if (this.isSort) {
      this.isSort = false;
      this.doctorList = this.backupList;
      this.doctorList.sort((a, b) => {
        if (b[9] > a[9]) {
          return 1;
        }
        else {
          if (b[9] < a[9])
            return -1;
          else return 0;
        }
      });
    } else {
      this.isSort = true;
      this.doctorList = this.backupList2;
      this.doctorList.sort((b, a) => {
        if (b[9] > a[9]) {
          return 1;
        }
        else {
          if (b[9] < a[9])
            return -1;
          else return 0;
        }
      });
    }
    if (this.selectedSpecialty != "0") {
      this.doctorList = this.doctorList.filter(value => value[7].includes(this.selectedSpecialty));
    }
    if (this.selectedCondition != "0") {
      this.doctorList = this.doctorList.filter(value => value[9].includes(this.selectedCondition));
    }
    if (this.selectedInsurance != "0") {
      this.doctorList = this.doctorList.filter(value => value[8].includes(this.selectedInsurance));
    }
  }

}
