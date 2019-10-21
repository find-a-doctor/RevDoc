import { Doctor } from './doctor';
import { RevAssociate } from './rev-associate';
import { Insurance } from './insurance';
import { Time } from '@angular/common';

export class Appointment {

  appointmentId: number;
  doctor: Doctor;
  revAssociate: RevAssociate;
  date: Date;
  time: Time;
  insurance: string;
  confirmed: boolean;

}
