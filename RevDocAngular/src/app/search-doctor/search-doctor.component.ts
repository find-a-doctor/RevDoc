import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorInfoService } from '../doctor-info.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { equal } from 'assert';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {

  searchValue: string;
  opendetails: boolean;
  // doctorList:Doctor[];
  searchName: string;
  doctorList: Object[];
  isGeneralSearch: boolean;
  isSort: boolean;
  constructor(private searchDoctorService: DoctorInfoService, private router: Router) {
    this.searchValue = "";
    this.opendetails = false;
    this.isGeneralSearch = true;
    this.isSort = true;
    this.doctorList = [];
    this.searchName = "Advanced Search";
  }

  ngOnInit() {
    this.searchDoctorService.getAllDoctors().subscribe(data => {
      this.doctorList = data;
    });
  }

  searchDoctor() {
    this.opendetails = true;
    if (this.searchValue == undefined || this.searchValue == "") {
      this.searchDoctorService.getAllDoctors().subscribe(data => {
        this.doctorList = data;
      });
    }
    else {
      this.searchDoctorService.searchDoctor(this.searchValue).subscribe(data => {
        this.doctorList = data;
        if (this.doctorList == null) {
          this.doctorList = [];
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
  }

  public goDoctorDetails(doc: Object) {
    this.router.navigate(['searchDoctor/', { id: doc[0] }]);
  }

  npiSort() {
    // console.log("npi sort");
    // this.doctorList = this.doctorList.sort(function(a,b){
    //   return a[0] < b[0]?1:a[0] <b[0]?-1:0
    //  });
    if (this.isSort) {
      this.isSort = false;
      this.doctorList.sort((a, b) => b[0] - a[0]);
    } else {
      this.isSort = true;
      this.doctorList.sort((a, b) => a[0] - b[0]);
    }
    // console.log("npi sort");
  }

  nameSort() {
    if (this.isSort) {
      this.isSort = false;
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
  }

  phoneSort() {
    if (this.isSort) {
      this.isSort = false;
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
    } else {
      this.isSort = true;
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
  }

  emailSort() {
    if (this.isSort) {
      this.isSort = false;
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
  }

  addressSort() {
    if (this.isSort) {
      this.isSort = false;
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
  }

  citySort() {
    if (this.isSort) {
      this.isSort = false;
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
  }

  yearSort() {
    if (this.isSort) {
      this.isSort = false;
      this.doctorList.sort((a, b) => b[6] - a[6]);
    } else {
      this.isSort = true;
      this.doctorList.sort((a, b) => a[6] - b[6]);
    }
  }

  specialtySort() {
    if (this.isSort) {
      this.isSort = false;
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
  }

  insuranceSort() {
    if (this.isSort) {
      this.isSort = false;
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
  }
}
