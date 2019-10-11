import { Doctor } from './doctor';
import { License } from './license';

export class DoctorLicense {

  doctorLicenseId: number;
  doctor: Doctor;
  license: License;
  licenseDate: Date;

}
